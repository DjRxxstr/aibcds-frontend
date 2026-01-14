import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProfileModal from './components/ProfileModal';

// Pages
import Dashboard from './pages/Dashboard';
import PatientRecords from './pages/PatientRecords';
import Settings from './pages/Settings';

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <Router>
      <Layout onOpenProfile={() => setIsProfileOpen(true)}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientRecords />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </Router>
  );
}

export default App;
