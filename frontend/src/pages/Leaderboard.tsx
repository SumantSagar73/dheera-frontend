import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Paper,
  Tabs,
  Tab,
  LinearProgress,
  useTheme,
} from '@mui/material';
import {
  EmojiEvents as EmojiEventsIcon,
  Star as StarIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

interface User {
  id: string;
  name: string;
  avatar: string;
  points: number;
  level: number;
  achievements: number;
  completedChallenges: number;
  rank: number;
  streak: number;
  recentActivity: string;
}

const Leaderboard: React.FC = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  // Mock data for demonstration
  const users: User[] = [
    {
      id: '1',
      name: 'CyberMaster',
      avatar: 'https://i.pravatar.cc/150?img=1',
      points: 2500,
      level: 5,
      achievements: 12,
      completedChallenges: 25,
      rank: 1,
      streak: 15,
      recentActivity: 'Completed Advanced Cryptography Challenge',
    },
    {
      id: '2',
      name: 'SecurityPro',
      avatar: 'https://i.pravatar.cc/150?img=2',
      points: 2200,
      level: 4,
      achievements: 10,
      completedChallenges: 22,
      rank: 2,
      streak: 12,
      recentActivity: 'Earned Malware Analysis Badge',
    },
    {
      id: '3',
      name: 'NetGuard',
      avatar: 'https://i.pravatar.cc/150?img=3',
      points: 2000,
      level: 4,
      achievements: 8,
      completedChallenges: 20,
      rank: 3,
      streak: 8,
      recentActivity: 'Completed Network Security Quiz',
    },
    // Add more users as needed
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return '#ffd700'; // Gold
      case 2:
        return '#c0c0c0'; // Silver
      case 3:
        return '#cd7f32'; // Bronze
      default:
        return theme.palette.primary.main;
    }
  };

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
            Leaderboard
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', maxWidth: '800px' }}>
            Compete with other cybersecurity enthusiasts and track your progress
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Top 3 Users */}
          <Grid xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 6 }}>
              {users.slice(0, 3).map((user, index) => (
                <Card
                  key={user.id}
                  sx={{
                    width: 300,
                    background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                    border: `1px solid ${getRankColor(user.rank)}33`,
                    transform: index === 1 ? 'translateY(-20px)' : 'none',
                    '&:hover': {
                      transform: index === 1 ? 'translateY(-25px)' : 'translateY(-5px)',
                      boxShadow: `0 0 20px ${getRankColor(user.rank)}33`,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ position: 'relative', display: 'inline-block' }}>
                      <Avatar
                        src={user.avatar}
                        sx={{
                          width: 120,
                          height: 120,
                          border: `3px solid ${getRankColor(user.rank)}`,
                          mb: 2,
                        }}
                      />
                      {index < 3 && (
                        <Chip
                          icon={<EmojiEventsIcon />}
                          label={`#${user.rank}`}
                          sx={{
                            position: 'absolute',
                            top: -10,
                            right: -10,
                            bgcolor: getRankColor(user.rank),
                            color: '#000',
                            fontWeight: 'bold',
                          }}
                        />
                      )}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {user.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Level {user.level}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                      <Chip
                        icon={<StarIcon />}
                        label={`${user.points} points`}
                        size="small"
                        sx={{ bgcolor: 'rgba(255,255,0,0.1)', color: '#ffff00' }}
                      />
                      <Chip
                        icon={<SchoolIcon />}
                        label={`${user.achievements} achievements`}
                        size="small"
                        sx={{ bgcolor: 'rgba(0,255,0,0.1)', color: '#00ff00' }}
                      />
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={(user.points / 3000) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(90deg, ${getRankColor(user.rank)}, ${getRankColor(user.rank)}88)`,
                        },
                      }}
                    />
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Leaderboard Table */}
          <Grid xs={12} md={8}>
            <Paper
              sx={{
                background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                border: '1px solid rgba(0,255,0,0.1)',
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  '& .MuiTab-root': {
                    color: 'text.secondary',
                    '&.Mui-selected': {
                      color: 'primary.main',
                    },
                  },
                }}
              >
                <Tab label="Global Rankings" />
                <Tab label="Weekly Top" />
                <Tab label="Achievement Leaders" />
              </Tabs>
              <List>
                {users.map((user) => (
                  <ListItem
                    key={user.id}
                    sx={{
                      borderBottom: 1,
                      borderColor: 'rgba(255,255,255,0.1)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.05)',
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={user.avatar}
                        sx={{
                          border: `2px solid ${getRankColor(user.rank)}`,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant="h6">{user.name}</Typography>
                          <Chip
                            label={`Level ${user.level}`}
                            size="small"
                            sx={{ bgcolor: 'rgba(0,255,0,0.1)', color: '#00ff00' }}
                          />
                        </Box>
                      }
                      secondary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                          <Chip
                            icon={<StarIcon />}
                            label={`${user.points} points`}
                            size="small"
                            sx={{ bgcolor: 'rgba(255,255,0,0.1)', color: '#ffff00' }}
                          />
                          <Chip
                            icon={<SpeedIcon />}
                            label={`${user.streak} day streak`}
                            size="small"
                            sx={{ bgcolor: 'rgba(255,0,0,0.1)', color: '#ff0000' }}
                          />
                        </Box>
                      }
                    />
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="subtitle2" color="text.secondary">
                        {user.recentActivity}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {Math.floor(Math.random() * 24)} hours ago
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Statistics */}
          <Grid xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                border: '1px solid rgba(0,255,0,0.1)',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Platform Statistics
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmojiEventsIcon sx={{ color: '#ffff00' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Total Points Earned"
                      secondary="1,234,567"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SchoolIcon sx={{ color: '#00ff00' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Challenges Completed"
                      secondary="45,678"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SecurityIcon sx={{ color: '#00ffff' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Active Users"
                      secondary="12,345"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon sx={{ color: '#ff00ff' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Average Level"
                      secondary="3.5"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Leaderboard; 