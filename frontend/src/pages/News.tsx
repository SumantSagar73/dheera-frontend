import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  severity: 'high' | 'medium' | 'low';
  date: string;
  source: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Major Data Breach Affects Millions of Users',
    summary: 'A significant data breach has exposed sensitive information of millions of users worldwide.',
    content: 'Detailed analysis of the breach and its implications...',
    image: 'https://source.unsplash.com/random/800x600?security',
    category: 'Data Breach',
    severity: 'high',
    date: '2024-03-29',
    source: 'Security News',
  },
  {
    id: '2',
    title: 'New Ransomware Strain Discovered',
    summary: 'Security researchers have identified a new ransomware variant targeting critical infrastructure.',
    content: 'Technical details about the ransomware and prevention measures...',
    image: 'https://source.unsplash.com/random/800x600?cybersecurity',
    category: 'Malware',
    severity: 'medium',
    date: '2024-03-28',
    source: 'Threat Intelligence',
  },
  {
    id: '3',
    title: 'Best Practices for Password Management',
    summary: 'Essential tips for creating and managing secure passwords in 2024.',
    content: 'Comprehensive guide on password security...',
    image: 'https://source.unsplash.com/random/800x600?password',
    category: 'Security Tips',
    severity: 'low',
    date: '2024-03-27',
    source: 'Security Blog',
  },
];

const News: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'info';
      default:
        return 'default';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <WarningIcon />;
      case 'medium':
        return <SecurityIcon />;
      case 'low':
        return <InfoIcon />;
      default:
        return <SecurityIcon />;
    }
  };

  const filteredNews = newsItems.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Cybersecurity News
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Stay updated with the latest cybersecurity threats and developments
      </Typography>

      {/* Category Filter */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Chip
          label="All"
          onClick={() => setSelectedCategory('all')}
          color={selectedCategory === 'all' ? 'primary' : 'default'}
        />
        <Chip
          label="Data Breach"
          onClick={() => setSelectedCategory('Data Breach')}
          color={selectedCategory === 'Data Breach' ? 'primary' : 'default'}
        />
        <Chip
          label="Malware"
          onClick={() => setSelectedCategory('Malware')}
          color={selectedCategory === 'Malware' ? 'primary' : 'default'}
        />
        <Chip
          label="Security Tips"
          onClick={() => setSelectedCategory('Security Tips')}
          color={selectedCategory === 'Security Tips' ? 'primary' : 'default'}
        />
      </Box>

      {/* News Grid */}
      <Grid container spacing={3}>
        {filteredNews.map((item) => (
          <Grid key={item.id} xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Chip
                    icon={getSeverityIcon(item.severity)}
                    label={item.severity}
                    color={getSeverityColor(item.severity)}
                    size="small"
                  />
                </Box>
                <Typography color="text.secondary" paragraph>
                  {item.summary}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      label={item.source}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Button variant="contained" color="primary">
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News; 