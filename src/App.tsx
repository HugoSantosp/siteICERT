import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Church, Users, Home, Calendar } from 'lucide-react';
import HomePage from './pages/HomePage';
import MinistriesPage from './pages/MinistriesPage';
import CellGroupsPage from './pages/CellGroupsPage';
import EventsPage from './pages/EventsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ministerios" element={<MinistriesPage />} />
            <Route path="/celulas" element={<CellGroupsPage />} />
            <Route path="/eventos" element={<EventsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;