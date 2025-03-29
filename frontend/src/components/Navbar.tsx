import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  Avatar,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Language as LanguageIcon,
  Person as PersonIcon,
  ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);
  const [userAnchor, setUserAnchor] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState('English');

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchor(event.currentTarget);
  };

  const handleUserClose = () => {
    setUserAnchor(null);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    handleLanguageClose();
  };

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => navigate('/')}
          sx={{ mr: 2 }}
        >
          <SecurityIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          CYBER QUEST
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2, mr: 4 }}>
          <Button color="inherit" onClick={() => navigate('/learning')}>
            Learn
          </Button>
          <Button color="inherit" onClick={() => navigate('/forum')}>
            Forum
          </Button>
          <Button color="inherit" onClick={() => navigate('/leaderboard')}>
            Leaderboard
          </Button>
          <Button color="inherit" onClick={() => navigate('/news')}>
            News
          </Button>
        </Box>

        {/* Language Selector */}
        <Button
          color="inherit"
          startIcon={<LanguageIcon />}
          onClick={handleLanguageClick}
          sx={{ mr: 2 }}
        >
          {language}
        </Button>
        <Menu
          anchorEl={languageAnchor}
          open={Boolean(languageAnchor)}
          onClose={handleLanguageClose}
        >
          <MenuItem onClick={() => handleLanguageChange('English')}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('हिंदी')}>हिंदी</MenuItem>
        </Menu>

        {/* User Menu */}
        <IconButton
          color="inherit"
          onClick={handleUserClick}
          sx={{ ml: 2 }}
        >
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
            <PersonIcon />
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={userAnchor}
          open={Boolean(userAnchor)}
          onClose={handleUserClose}
        >
          <MenuItem onClick={handleUserClose}>
            <PersonIcon sx={{ mr: 1 }} /> Profile
          </MenuItem>
          <MenuItem onClick={handleUserClose}>
            <ExitToAppIcon sx={{ mr: 1 }} /> Logout
          </MenuItem>
        </Menu>

        {/* Login/Signup Buttons */}
        <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<PersonIcon />}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonIcon />}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 