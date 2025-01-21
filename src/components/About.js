import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';

const About = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: <StorageIcon fontSize="large" />,
      title: 'Backend Development',
      description: 'Expertise in Java, Spring Boot, and Microservices Architecture',
    },
    {
      icon: <CloudIcon fontSize="large" />,
      title: 'Cloud & DevOps',
      description: 'Experience with AWS services and Azure DevOps for CI/CD pipelines',
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Performance',
      description: 'Building high-performance applications with messaging systems like Kafka and RabbitMQ',
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: 'Quality Assurance',
      description: 'Strong focus on testing with JUnit, Mockito, and Selenium automation',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(255,255,255,0.5) 100%)`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2, 
              textAlign: 'center',
              background: theme.palette.gradient.main,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 8, 
                textAlign: 'center', 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
              }}
            >
              Accomplished Software Engineer with 8+ years of experience in designing, developing,
              and integrating enterprise applications. Specialized in Java, Spring Boot, and microservices
              architecture with a strong focus on building scalable and secure solutions.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {highlights.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        background: theme.palette.gradient.main,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 2,
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 