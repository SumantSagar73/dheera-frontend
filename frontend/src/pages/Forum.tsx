import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Forum as ForumIcon,
  Add as AddIcon,
  Search as SearchIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Message as MessageIcon,
} from '@mui/icons-material';

interface ForumThread {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    reputation: number;
  };
  category: string;
  replies: number;
  views: number;
  lastReply: {
    author: string;
    date: string;
  };
  isPinned: boolean;
  isStarred: boolean;
}

const categories = [
  { id: 'penetration-testing', name: 'Penetration Testing' },
  { id: 'cloud-security', name: 'Cloud Security' },
  { id: 'threat-hunting', name: 'Threat Hunting' },
  { id: 'incident-response', name: 'Incident Response' },
  { id: 'general', name: 'General Discussion' },
];

const threads: ForumThread[] = [
  {
    id: '1',
    title: 'How to get started with penetration testing?',
    author: {
      name: 'SecurityPro',
      avatar: 'https://i.pravatar.cc/150?img=1',
      reputation: 1500,
    },
    category: 'penetration-testing',
    replies: 12,
    views: 245,
    lastReply: {
      author: 'NewLearner',
      date: '2024-03-29 14:30',
    },
    isPinned: true,
    isStarred: true,
  },
  {
    id: '2',
    title: 'Best practices for cloud security',
    author: {
      name: 'CloudGuard',
      avatar: 'https://i.pravatar.cc/150?img=2',
      reputation: 1200,
    },
    category: 'cloud-security',
    replies: 8,
    views: 180,
    lastReply: {
      author: 'CloudExpert',
      date: '2024-03-29 13:15',
    },
    isPinned: false,
    isStarred: false,
  },
];

const Forum: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredThreads = threads.filter((thread) => {
    const matchesCategory = selectedCategory === 'all' || thread.category === selectedCategory;
    const matchesSearch = thread.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Community Forum
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Discuss cybersecurity topics with the community
      </Typography>

      <Grid container spacing={3}>
        {/* Categories Sidebar */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              <List>
                <ListItem
                  button
                  selected={selectedCategory === 'all'}
                  onClick={() => handleCategorySelect('all')}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <ForumIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="All Discussions" />
                </ListItem>
                {categories.map((category) => (
                  <ListItem
                    key={category.id}
                    button
                    selected={selectedCategory === category.id}
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <ForumIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={category.name} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Discussions</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  New Thread
                </Button>
              </Box>

              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
                sx={{ mb: 3 }}
              />

              <List>
                {filteredThreads.map((thread, index) => (
                  <React.Fragment key={thread.id}>
                    <ListItem
                      button
                      sx={{
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar src={thread.author.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {thread.isPinned && (
                              <Chip
                                label="Pinned"
                                size="small"
                                color="primary"
                                sx={{ mr: 1 }}
                              />
                            )}
                            <Typography variant="subtitle1">
                              {thread.title}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              Posted by {thread.author.name} • {thread.replies} replies • {thread.views} views
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              Last reply by {thread.lastReply.author} on {thread.lastReply.date}
                            </Typography>
                          </Box>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="star">
                          {thread.isStarred ? <StarIcon color="primary" /> : <StarBorderIcon />}
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index < filteredThreads.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Forum; 