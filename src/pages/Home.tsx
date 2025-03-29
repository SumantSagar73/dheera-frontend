import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
  LinearProgress,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Timeline as TimelineIcon,
  School as SchoolIcon,
  EmojiEvents as EmojiEventsIcon,
  Forum as ForumIcon,
  Speed as SpeedIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import type { GridProps } from '@mui/material';

const Home: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      title: 'Live Cyber Threat Map',
      description: 'Real-time visualization of global cyber threats and attacks',
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      color: '#00ff00',
      path: '/threat-map',
      progress: 75,
    },
    {
      title: 'Cybersecurity Branches',
      description: 'Explore different branches of cybersecurity and their essential tools',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      color: '#ff00ff',
      path: '/branches',
      progress: 100,
    },
    {
      title: 'Daily Security Tips',
      description: 'Stay updated with the latest cybersecurity best practices',
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      color: '#ff00ff',
      path: '/tips',
      progress: 60,
    },
    {
      title: 'Interactive Learning',
      description: 'Gamified cybersecurity challenges and quizzes',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      color: '#00ffff',
      path: '/learning',
      progress: 90,
    },
    {
      title: 'Leaderboard',
      description: 'Compete with others and track your progress',
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      color: '#ffff00',
      path: '/leaderboard',
      progress: 45,
    },
    {
      title: 'Community Forum',
      description: 'Discuss cybersecurity topics with experts',
      icon: <ForumIcon sx={{ fontSize: 40 }} />,
      color: '#ff0000',
      path: '/forum',
      progress: 30,
    },
  ];

  const achievements = [
    { name: 'First Hack', points: 100, icon: <StarIcon /> },
    { name: 'Security Master', points: 500, icon: <EmojiEventsIcon /> },
    { name: 'Speed Demon', points: 300, icon: <SpeedIcon /> },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0a1929 0%, #1a2939 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(0,255,0,0.1) 0%, transparent 70%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8, position: 'relative' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #00ff00, #00ffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                CYBER QUEST
              </Typography>
              <Typography variant="h5" paragraph sx={{ color: 'text.secondary' }}>
                Level up your cybersecurity skills through interactive challenges and real-world scenarios.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => navigate('/learning')}
                  sx={{
                    background: 'linear-gradient(45deg, #00ff00, #00cc00)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #00cc00, #00ff00)',
                    },
                  }}
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => navigate('/leaderboard')}
                >
                  View Leaderboard
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    border: '2px solid rgba(0,255,0,0.3)',
                    borderRadius: '20px',
                    animation: 'pulse 2s infinite',
                  },
                }}
              >
                {/* Add hero image or illustration here */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            background: 'linear-gradient(45deg, #00ff00, #00ffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Your Cybersecurity Journey
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          Level up your skills and earn achievements
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                  border: `1px solid ${feature.color}33`,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 0 20px ${feature.color}33`,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: feature.color,
                        mr: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3">
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" paragraph>
                    {feature.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Progress
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={feature.progress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(90deg, ${feature.color}, ${feature.color}88)`,
                        },
                      }}
                    />
                  </Box>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => navigate(feature.path)}
                    sx={{
                      borderColor: feature.color,
                      color: feature.color,
                      '&:hover': {
                        borderColor: feature.color,
                        backgroundColor: `${feature.color}11`,
                      },
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Achievements Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #00ff00, #00ffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Your Achievements
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center" paragraph>
            Track your progress and earn badges
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  sx={{
                    background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                    border: '1px solid rgba(0,255,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 0 20px rgba(0,255,0,0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        margin: '0 auto',
                        bgcolor: 'primary.main',
                        mb: 2,
                      }}
                    >
                      {achievement.icon}
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      {achievement.name}
                    </Typography>
                    <Chip
                      label={`${achievement.points} points`}
                      color="primary"
                      size="small"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 