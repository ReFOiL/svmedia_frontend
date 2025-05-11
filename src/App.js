import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import FormSection from './components/FormSection';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', background: '#f8d49d', pb: 6 }}>
      <Header />
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Box sx={{ pt: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <img src="/logo512.png" alt="Радуга" style={{ height: 80 }} />
            <Box sx={{ fontSize: 40, fontWeight: 900, letterSpacing: 2, color: '#e53935', mt: 2 }}>
              РАДУГА
            </Box>
            <Box sx={{ fontSize: 24, fontWeight: 700, color: '#4caf50', letterSpacing: 1 }}>
              ДЕТСКИЙ ЛАГЕРЬ
            </Box>
          </Box>
          <InfoSection />
          <FormSection />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
