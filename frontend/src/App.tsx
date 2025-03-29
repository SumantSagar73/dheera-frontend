import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Leaderboard from './pages/Leaderboard';
import GamifiedLearning from './pages/GamifiedLearning';
import News from './pages/News';
import CybersecurityBranches from './pages/CybersecurityBranches';
import Navbar from './components/Navbar';

// Create a cybersecurity-themed dark theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // Matrix green
      light: '#66ff66',
      dark: '#00cc00',
    },
    secondary: {
      main: '#ff00ff', // Cyberpunk pink
      light: '#ff66ff',
      dark: '#cc00cc',
    },
    background: {
      default: '#0a1929',
      paper: '#1a2939',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    h2: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    h3: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: '1px',
        },
        contained: {
          boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
          border: '1px solid rgba(0, 255, 0, 0.1)',
          boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: 600,
          letterSpacing: '0.5px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/learning" element={<GamifiedLearning />} />
          <Route path="/news" element={<News />} />
          <Route path="/branches" element={<CybersecurityBranches />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
