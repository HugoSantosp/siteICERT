# ============================================================
# siteICERT — SGE Frontend (deploy Render)
#
# Web Service (Docker) que:
#   1. builda os 3 apps Angular (site público + admin + Meu Ministério)
#   2. serve todos via Nginx no mesmo domínio:
#        /                    → site público (landing page)
#        /SGE-Administracao/  → painel administrativo
#        /SGE-MeuMinisterio/  → app Meu Ministério
#      com proxy de /api, /auth, /uploads para o backend Spring Boot.
#
# Env vars obrigatórias no Render:
#   PORT          → injetada automaticamente pelo Render
#   BACKEND_URL   → URL do backend, ex.: https://sge-backend.onrender.com
# ============================================================

# ---- Stage 1: build dos apps Angular ----
FROM node:20-alpine AS build
WORKDIR /app

# Pula o download do binário do Cypress (não roda testes no deploy)
ENV CYPRESS_INSTALL_BINARY=0

# Instala dependências primeiro (aproveita cache de camadas)
COPY package.json package-lock.json ./
RUN npm ci

# Copia o código e builda os 3 apps (production + baseHref)
COPY . .
RUN npx ng build sg-frontend --configuration production && \
    npx ng build sg-frontend --configuration site && \
    npx ng build meu-ministerio --configuration production

# ---- Stage 2: runtime Nginx ----
FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf

# Template processado no boot pela entrypoint oficial do nginx:
# substitui ${PORT} e ${BACKEND_URL} pelas env vars definidas no Render.
COPY deploy/nginx.conf.template /etc/nginx/templates/default.conf.template

# Dist dos três apps (paths servidos: /, /SGE-Administracao e /SGE-MeuMinisterio)
COPY --from=build /app/dist/site            /usr/share/nginx/html
COPY --from=build /app/dist/sg-frontend     /usr/share/nginx/html/SGE-Administracao
COPY --from=build /app/dist/meu-ministerio  /usr/share/nginx/html/SGE-MeuMinisterio
