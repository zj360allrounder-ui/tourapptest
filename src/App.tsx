import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, Destination } from './types';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import TripDetail from './pages/TripDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleSelectDestination = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedDestination(null);
    setCurrentPage('explore'); // Or home, depending on where we came from
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onSelectDestination={handleSelectDestination} />;
      case 'explore':
        return <Explore onSelectDestination={handleSelectDestination} />;
      case 'profile':
        return <Profile />;
      case 'detail':
        return selectedDestination ? (
          <TripDetail destination={selectedDestination} onBack={handleBack} />
        ) : (
          <Home onSelectDestination={handleSelectDestination} />
        );
      case 'bookings':
        return <div className="pt-24 px-6">Bookings Page (Coming Soon)</div>;
      default:
        return <Home onSelectDestination={handleSelectDestination} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {currentPage !== 'detail' && <TopBar />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + (selectedDestination?.id || '')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {currentPage !== 'detail' && (
        <BottomNav 
          currentPage={currentPage} 
          onPageChange={(page) => {
            setCurrentPage(page);
            setSelectedDestination(null);
            window.scrollTo(0, 0);
          }} 
        />
      )}
    </div>
  );
}
