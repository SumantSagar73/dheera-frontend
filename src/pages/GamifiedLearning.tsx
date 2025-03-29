import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import {
  Lock as LockIcon,
  CheckCircle as CheckCircleIcon,
  Timer as TimerIcon,
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  category: string;
  isCompleted: boolean;
  isLocked: boolean;
}

interface Quiz {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const GamifiedLearning: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [score, setScore] = useState(0);

  const challenges: Challenge[] = [
    {
      id: 1,
      title: 'Password Security Basics',
      description: 'Learn the fundamentals of creating strong passwords',
      difficulty: 'beginner',
      points: 100,
      category: 'Authentication',
      isCompleted: true,
      isLocked: false,
    },
    {
      id: 2,
      title: 'Phishing Detection',
      description: 'Practice identifying phishing emails and websites',
      difficulty: 'beginner',
      points: 150,
      category: 'Social Engineering',
      isCompleted: false,
      isLocked: false,
    },
    {
      id: 3,
      title: 'Network Security',
      description: 'Understanding basic network security concepts',
      difficulty: 'intermediate',
      points: 200,
      category: 'Networking',
      isCompleted: false,
      isLocked: true,
    },
    {
      id: 4,
      title: 'Cryptography Fundamentals',
      description: 'Learn about encryption and decryption',
      difficulty: 'intermediate',
      points: 250,
      category: 'Cryptography',
      isCompleted: false,
      isLocked: true,
    },
    {
      id: 5,
      title: 'Malware Analysis',
      description: 'Introduction to malware types and analysis',
      difficulty: 'advanced',
      points: 300,
      category: 'Malware',
      isCompleted: false,
      isLocked: true,
    },
  ];

  const quizzes: Quiz[] = [
    {
      id: 1,
      question: 'What is the minimum recommended length for a strong password?',
      options: ['8 characters', '12 characters', '16 characters', '6 characters'],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: 'Which of the following is NOT a common phishing technique?',
      options: ['Urgent action required', 'Spelling errors', 'Official company logo', 'Personal information request'],
      correctAnswer: 2,
    },
  ];

  const handleChallengeClick = (challenge: Challenge) => {
    if (!challenge.isLocked) {
      setCurrentQuiz(quizzes[0]);
      setShowQuiz(true);
    }
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer === currentQuiz?.correctAnswer) {
      setScore(score + 10);
    }
    setShowQuiz(false);
    setSelectedAnswer(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '#00ff00';
      case 'intermediate':
        return '#ffff00';
      case 'advanced':
        return '#ff0000';
      default:
        return '#ffffff';
    }
  };

  return (
    <Box>
      {/* Progress Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 4, mb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Your Learning Progress
              </Typography>
              <Stepper activeStep={activeStep} alternativeLabel>
                <Step>
                  <StepLabel>Beginner</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Intermediate</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Advanced</StepLabel>
                </Step>
              </Stepper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 2,
                  background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                  border: '1px solid rgba(0,255,0,0.1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EmojiEventsIcon sx={{ color: '#ffff00', mr: 1 }} />
                  <Typography variant="h6">Total Points: {score}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SchoolIcon sx={{ color: '#00ff00', mr: 1 }} />
                  <Typography variant="h6">
                    Completed: {challenges.filter(c => c.isCompleted).length}/{challenges.length}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Challenges Section */}
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            background: 'linear-gradient(45deg, #00ff00, #00ffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          Available Challenges
        </Typography>

        <Grid container spacing={4}>
          {challenges.map((challenge) => (
            <Grid item xs={12} sm={6} md={4} key={challenge.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                  border: `1px solid ${challenge.isLocked ? 'rgba(255,255,255,0.1)' : getDifficultyColor(challenge.difficulty)}33`,
                  opacity: challenge.isLocked ? 0.7 : 1,
                  cursor: challenge.isLocked ? 'not-allowed' : 'pointer',
                  '&:hover': {
                    transform: !challenge.isLocked ? 'translateY(-5px)' : 'none',
                    boxShadow: !challenge.isLocked
                      ? `0 0 20px ${getDifficultyColor(challenge.difficulty)}33`
                      : 'none',
                  },
                }}
                onClick={() => handleChallengeClick(challenge)}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {challenge.isLocked ? (
                      <LockIcon sx={{ color: 'text.secondary', mr: 1 }} />
                    ) : challenge.isCompleted ? (
                      <CheckCircleIcon sx={{ color: '#00ff00', mr: 1 }} />
                    ) : null}
                    <Typography variant="h5" component="h3">
                      {challenge.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" paragraph>
                    {challenge.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip
                      label={challenge.difficulty}
                      size="small"
                      sx={{
                        bgcolor: `${getDifficultyColor(challenge.difficulty)}22`,
                        color: getDifficultyColor(challenge.difficulty),
                      }}
                    />
                    <Chip
                      label={`${challenge.points} points`}
                      size="small"
                      icon={<EmojiEventsIcon />}
                      sx={{
                        bgcolor: 'rgba(255,255,0,0.1)',
                        color: '#ffff00',
                      }}
                    />
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={challenge.isCompleted ? 100 : 0}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(90deg, #00ff00, #00cc00)',
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Quiz Dialog */}
      <Dialog
        open={showQuiz}
        onClose={() => setShowQuiz(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
            border: '1px solid rgba(0,255,0,0.1)',
          },
        }}
      >
        <DialogTitle>
          <Typography variant="h5" sx={{ color: 'primary.main' }}>
            Quiz Time!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            {currentQuiz?.question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(Number(e.target.value))}
            >
              {currentQuiz?.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={option}
                  sx={{
                    color: 'text.primary',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowQuiz(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleQuizSubmit}
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GamifiedLearning; 