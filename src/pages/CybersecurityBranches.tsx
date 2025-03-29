import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Lock as LockIcon,
  BugReport as BugReportIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Storage as StorageIcon,
  Psychology as PsychologyIcon,
  NetworkCheck as NetworkCheckIcon,
  Build as BuildIcon,
  PhoneAndroid as PhoneAndroidIcon,
  DevicesOther as DevicesOtherIcon,
  Warning as WarningIcon,
  Gavel as GavelIcon,
} from '@mui/icons-material';

interface Tool {
  name: string;
  description: string;
  example: string;
  benefits: string[];
}

interface Branch {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tools: Tool[];
}

const branches: Branch[] = [
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Protecting network infrastructure and data in transit',
    icon: <NetworkCheckIcon />,
    color: '#00ff00',
    tools: [
      {
        name: 'Wireshark',
        description: 'Network protocol analyzer for capturing and analyzing network traffic',
        example: 'Capturing HTTP traffic to identify potential security issues',
        benefits: [
          'Real-time network monitoring',
          'Protocol analysis',
          'Troubleshooting network issues',
          'Security auditing',
        ],
      },
      {
        name: 'Nmap',
        description: 'Network mapping tool for security scanning and network discovery',
        example: 'Scanning a network to identify open ports and services',
        benefits: [
          'Network inventory',
          'Security assessment',
          'Vulnerability scanning',
          'Service discovery',
        ],
      },
      {
        name: 'Snort',
        description: 'Network intrusion detection and prevention system',
        example: 'Monitoring network traffic for suspicious patterns',
        benefits: [
          'Real-time traffic analysis',
          'Protocol analysis',
          'Content searching/matching',
          'Detection of various attacks',
        ],
      },
    ],
  },
  {
    id: 'web-security',
    title: 'Web Security',
    description: 'Securing web applications and services',
    icon: <CodeIcon />,
    color: '#ff00ff',
    tools: [
      {
        name: 'Burp Suite',
        description: 'Web application security testing platform',
        example: 'Testing for SQL injection vulnerabilities in a web form',
        benefits: [
          'Web vulnerability scanning',
          'Proxy intercepting',
          'Automated testing',
          'Security reporting',
        ],
      },
      {
        name: 'OWASP ZAP',
        description: 'Open-source web application security scanner',
        example: 'Automated scanning of a web application for common vulnerabilities',
        benefits: [
          'Automated security testing',
          'Vulnerability assessment',
          'API testing',
          'Integration with CI/CD',
        ],
      },
      {
        name: 'SonarQube',
        description: 'Code quality and security analysis platform',
        example: 'Analyzing code for security vulnerabilities and code smells',
        benefits: [
          'Code quality analysis',
          'Security vulnerability detection',
          'Technical debt tracking',
          'Continuous integration support',
        ],
      },
    ],
  },
  {
    id: 'malware-analysis',
    title: 'Malware Analysis',
    description: 'Analyzing and understanding malicious software',
    icon: <BugReportIcon />,
    color: '#ff0000',
    tools: [
      {
        name: 'IDA Pro',
        description: 'Interactive disassembler for software analysis',
        example: 'Reverse engineering a suspicious executable',
        benefits: [
          'Binary analysis',
          'Code decompilation',
          'Debugging',
          'Pattern recognition',
        ],
      },
      {
        name: 'Volatility',
        description: 'Memory forensics framework',
        example: 'Analyzing a memory dump for malware artifacts',
        benefits: [
          'Memory analysis',
          'Malware detection',
          'Process analysis',
          'Network connection tracking',
        ],
      },
      {
        name: 'Cuckoo Sandbox',
        description: 'Automated malware analysis system',
        example: 'Analyzing suspicious files in a controlled environment',
        benefits: [
          'Automated malware analysis',
          'Behavioral analysis',
          'Network traffic analysis',
          'Report generation',
        ],
      },
    ],
  },
  {
    id: 'cryptography',
    title: 'Cryptography',
    description: 'Implementing and analyzing cryptographic systems',
    icon: <LockIcon />,
    color: '#ffff00',
    tools: [
      {
        name: 'OpenSSL',
        description: 'Cryptography toolkit for SSL/TLS protocols',
        example: 'Generating SSL certificates for secure communication',
        benefits: [
          'Certificate management',
          'Encryption/decryption',
          'Hash functions',
          'SSL/TLS implementation',
        ],
      },
      {
        name: 'HashCat',
        description: 'Advanced password recovery tool',
        example: 'Testing password strength and recovery',
        benefits: [
          'Password cracking',
          'Hash analysis',
          'GPU acceleration',
          'Multiple hash types support',
        ],
      },
      {
        name: 'GPG (GNU Privacy Guard)',
        description: 'Open-source implementation of OpenPGP standard',
        example: 'Encrypting sensitive files and emails',
        benefits: [
          'File encryption',
          'Email encryption',
          'Digital signatures',
          'Key management',
        ],
      },
    ],
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering',
    description: 'Understanding and preventing human-based attacks',
    icon: <PsychologyIcon />,
    color: '#00ffff',
    tools: [
      {
        name: 'SET (Social-Engineer Toolkit)',
        description: 'Framework for social engineering attacks',
        example: 'Creating phishing campaigns for security awareness',
        benefits: [
          'Phishing simulation',
          'Attack vector testing',
          'Security awareness training',
          'Vulnerability assessment',
        ],
      },
      {
        name: 'Maltego',
        description: 'Open-source intelligence and forensics application',
        example: 'Gathering information about a target organization',
        benefits: [
          'OSINT gathering',
          'Relationship mapping',
          'Data visualization',
          'Information correlation',
        ],
      },
      {
        name: 'PhishX',
        description: 'Phishing simulation and training platform',
        example: 'Conducting employee security awareness training',
        benefits: [
          'Phishing simulation',
          'Employee training',
          'Risk assessment',
          'Reporting and analytics',
        ],
      },
    ],
  },
  {
    id: 'forensics',
    title: 'Digital Forensics',
    description: 'Investigating digital crimes and incidents',
    icon: <StorageIcon />,
    color: '#ff8800',
    tools: [
      {
        name: 'Autopsy',
        description: 'Digital forensics platform',
        example: 'Analyzing a disk image for evidence',
        benefits: [
          'File system analysis',
          'Timeline analysis',
          'Keyword searching',
          'Report generation',
        ],
      },
      {
        name: 'FTK (Forensic Toolkit)',
        description: 'Comprehensive digital forensics solution',
        example: 'Processing and analyzing digital evidence',
        benefits: [
          'Evidence processing',
          'Data carving',
          'Email analysis',
          'Registry analysis',
        ],
      },
      {
        name: 'EnCase',
        description: 'Digital forensics and eDiscovery platform',
        example: 'Conducting comprehensive digital investigations',
        benefits: [
          'Evidence collection',
          'Data analysis',
          'Report generation',
          'Case management',
        ],
      },
    ],
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    description: 'Protecting cloud-based systems and data',
    icon: <CloudIcon />,
    color: '#00ff88',
    tools: [
      {
        name: 'AWS Security Hub',
        description: 'Security and compliance management service',
        example: 'Monitoring AWS resources for security issues',
        benefits: [
          'Security monitoring',
          'Compliance checking',
          'Automated remediation',
          'Centralized security management',
        ],
      },
      {
        name: 'Azure Security Center',
        description: 'Unified security management system',
        example: 'Protecting Azure resources and workloads',
        benefits: [
          'Security monitoring',
          'Threat protection',
          'Security recommendations',
          'Compliance management',
        ],
      },
      {
        name: 'Cloudflare',
        description: 'Web security and performance platform',
        example: 'Protecting web applications from DDoS attacks',
        benefits: [
          'DDoS protection',
          'Web application firewall',
          'SSL/TLS encryption',
          'Content delivery network',
        ],
      },
    ],
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    description: 'Identifying and exploiting security vulnerabilities',
    icon: <BugReportIcon />,
    color: '#ff0088',
    tools: [
      {
        name: 'Metasploit',
        description: 'Penetration testing framework',
        example: 'Testing for known vulnerabilities',
        benefits: [
          'Exploit development',
          'Payload generation',
          'Post-exploitation',
          'Automated testing',
        ],
      },
      {
        name: 'Kali Linux',
        description: 'Security-focused Linux distribution',
        example: 'Comprehensive penetration testing toolkit',
        benefits: [
          'Pre-installed tools',
          'Regular updates',
          'Custom kernel',
          'Wide tool selection',
        ],
      },
      {
        name: 'Nessus',
        description: 'Vulnerability scanner',
        example: 'Scanning systems for security vulnerabilities',
        benefits: [
          'Vulnerability scanning',
          'Configuration auditing',
          'Asset discovery',
          'Report generation',
        ],
      },
    ],
  },
  {
    id: 'mobile-security',
    title: 'Mobile Security',
    description: 'Protecting mobile devices and applications',
    icon: <PhoneAndroidIcon />,
    color: '#00ffaa',
    tools: [
      {
        name: 'MobSF (Mobile Security Framework)',
        description: 'Automated mobile app security testing framework',
        example: 'Analyzing Android and iOS apps for vulnerabilities',
        benefits: [
          'Static analysis',
          'Dynamic analysis',
          'API security testing',
          'Malware analysis',
        ],
      },
      {
        name: 'Frida',
        description: 'Dynamic instrumentation toolkit',
        example: 'Runtime analysis of mobile applications',
        benefits: [
          'Runtime manipulation',
          'API monitoring',
          'Reverse engineering',
          'Security testing',
        ],
      },
      {
        name: 'Android Debug Bridge (ADB)',
        description: 'Command-line tool for Android device communication',
        example: 'Debugging and analyzing Android devices',
        benefits: [
          'Device management',
          'App installation',
          'Log analysis',
          'Shell access',
        ],
      },
    ],
  },
  {
    id: 'iot-security',
    title: 'IoT Security',
    description: 'Securing Internet of Things devices and networks',
    icon: <DevicesOtherIcon />,
    color: '#ffaa00',
    tools: [
      {
        name: 'Shodan',
        description: 'Search engine for Internet-connected devices',
        example: 'Finding exposed IoT devices and their vulnerabilities',
        benefits: [
          'Device discovery',
          'Vulnerability scanning',
          'Port scanning',
          'Network mapping',
        ],
      },
      {
        name: 'Wireshark',
        description: 'Network protocol analyzer',
        example: 'Analyzing IoT device communication',
        benefits: [
          'Traffic analysis',
          'Protocol inspection',
          'Security auditing',
          'Troubleshooting',
        ],
      },
      {
        name: 'Nmap',
        description: 'Network mapping and security scanning tool',
        example: 'Scanning IoT networks for vulnerabilities',
        benefits: [
          'Device discovery',
          'Port scanning',
          'Service detection',
          'Vulnerability assessment',
        ],
      },
    ],
  },
  {
    id: 'application-security',
    title: 'Application Security',
    description: 'Securing software applications throughout their lifecycle',
    icon: <CodeIcon />,
    color: '#aa00ff',
    tools: [
      {
        name: 'SonarQube',
        description: 'Code quality and security analysis platform',
        example: 'Analyzing code for security vulnerabilities',
        benefits: [
          'Code analysis',
          'Security scanning',
          'Quality gates',
          'Technical debt tracking',
        ],
      },
      {
        name: 'OWASP Dependency Check',
        description: 'Software composition analysis tool',
        example: 'Scanning project dependencies for known vulnerabilities',
        benefits: [
          'Dependency scanning',
          'Vulnerability detection',
          'License compliance',
          'Automated updates',
        ],
      },
      {
        name: 'Fortify',
        description: 'Application security testing suite',
        example: 'Comprehensive security testing of applications',
        benefits: [
          'Static analysis',
          'Dynamic analysis',
          'Mobile testing',
          'Cloud security',
        ],
      },
    ],
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    description: 'Handling and managing security incidents',
    icon: <WarningIcon />,
    color: '#ff0000',
    tools: [
      {
        name: 'Splunk',
        description: 'Security information and event management platform',
        example: 'Analyzing security logs and events',
        benefits: [
          'Log management',
          'Event correlation',
          'Real-time monitoring',
          'Incident investigation',
        ],
      },
      {
        name: 'TheHive',
        description: 'Security incident response platform',
        example: 'Managing and investigating security incidents',
        benefits: [
          'Case management',
          'Task tracking',
          'Collaboration',
          'Reporting',
        ],
      },
      {
        name: 'MISP',
        description: 'Threat intelligence platform',
        example: 'Sharing and analyzing threat intelligence',
        benefits: [
          'Threat sharing',
          'Indicator correlation',
          'Automated analysis',
          'Export capabilities',
        ],
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Governance',
    description: 'Ensuring adherence to security standards and regulations',
    icon: <GavelIcon />,
    color: '#00aaff',
    tools: [
      {
        name: 'OpenSCAP',
        description: 'Security compliance assessment tool',
        example: 'Checking system compliance with security standards',
        benefits: [
          'Compliance scanning',
          'Vulnerability assessment',
          'Configuration checking',
          'Reporting',
        ],
      },
      {
        name: 'Tenable.io',
        description: 'Comprehensive security assessment platform',
        example: 'Managing security compliance across assets',
        benefits: [
          'Asset discovery',
          'Vulnerability management',
          'Compliance monitoring',
          'Risk assessment',
        ],
      },
      {
        name: 'Archer',
        description: 'Governance, risk, and compliance platform',
        example: 'Managing security policies and compliance',
        benefits: [
          'Policy management',
          'Risk assessment',
          'Compliance tracking',
          'Reporting',
        ],
      },
    ],
  },
];

const CybersecurityBranches: React.FC = () => {
  const theme = useTheme();
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [expandedBranch, setExpandedBranch] = useState<string | false>(false);

  const handleOpen = (branch: Branch) => {
    setSelectedBranch(branch);
  };

  const handleClose = () => {
    setSelectedBranch(null);
  };

  const handleBranchChange = (branchId: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedBranch(isExpanded ? branchId : false);
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
            Cybersecurity Branches
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', maxWidth: '800px' }}>
            Explore different branches of cybersecurity and their essential tools. Learn how these tools work,
            their practical applications, and the benefits they provide in securing digital assets.
          </Typography>
        </Container>
      </Box>

      {/* Branches Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {branches.map((branch) => (
            <Grid xs={12} key={branch.id}>
              <Accordion
                expanded={expandedBranch === branch.id}
                onChange={handleBranchChange(branch.id)}
                sx={{
                  background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                  border: `1px solid ${branch.color}33`,
                  '&:hover': {
                    boxShadow: `0 0 20px ${branch.color}33`,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: branch.color }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ color: branch.color }}>{branch.icon}</Box>
                    <Box>
                      <Typography variant="h5" component="h2">
                        {branch.title}
                      </Typography>
                      <Typography color="text.secondary">{branch.description}</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={4}>
                    {branch.tools.map((tool, index) => (
                      <Grid xs={12} md={6} key={index}>
                        <Card
                          sx={{
                            height: '100%',
                            background: 'linear-gradient(145deg, #1a2939 0%, #0a1929 100%)',
                            border: `1px solid ${branch.color}33`,
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              boxShadow: `0 0 20px ${branch.color}33`,
                            },
                          }}
                        >
                          <CardContent>
                            <Typography variant="h6" gutterBottom sx={{ color: branch.color }}>
                              {tool.name}
                            </Typography>
                            <Typography color="text.secondary" paragraph>
                              {tool.description}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom sx={{ color: branch.color }}>
                              Example:
                            </Typography>
                            <Typography color="text.secondary" paragraph>
                              {tool.example}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom sx={{ color: branch.color }}>
                              Benefits:
                            </Typography>
                            <List dense>
                              {tool.benefits.map((benefit, idx) => (
                                <ListItem key={idx}>
                                  <ListItemIcon>
                                    <CheckCircleIcon sx={{ color: branch.color }} />
                                  </ListItemIcon>
                                  <ListItemText primary={benefit} />
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Details Dialog */}
      <Dialog
        open={!!selectedBranch}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedBranch && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ color: selectedBranch.color, mr: 2 }}>
                    {selectedBranch.icon}
                  </Box>
                  {selectedBranch.title}
                </Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography paragraph>
                {selectedBranch.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Popular Tools
              </Typography>
              <List>
                {selectedBranch.tools.map((tool, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <ShieldIcon />
                    </ListItemIcon>
                    <ListItemText primary={tool.name} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default CybersecurityBranches; 