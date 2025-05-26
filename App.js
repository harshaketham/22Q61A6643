import React from 'react';
import Dashboard from './pages/Dashboard';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
