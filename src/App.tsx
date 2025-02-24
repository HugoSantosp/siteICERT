import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MinistriesPage from './pages/MinistriesPage';
import CellGroupsPage from './pages/CellGroupsPage';
import EventsPage from './pages/EventsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import MuralPage from './pages/MuralPage';

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
            {/*<Route path="/mural" element={<MuralPage />} />*/}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;