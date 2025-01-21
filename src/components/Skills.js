import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    category: "Core Technologies",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "Python", level: 85 },
      { name: "Microservices", level: 90 }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 85 },
      { name: "Azure DevOps", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Jenkins", level: 80 }
    ]
  },
  {
    category: "Databases & Messaging",
    skills: [
      { name: "Microsoft SQL Server", level: 90 },
      { name: "Oracle", level: 85 },
      { name: "Kafka", level: 85 },
      { name: "RabbitMQ", level: 80 }
    ]
  },
  {
    category: "Testing & Tools",
    skills: [
      { name: "JUnit & Mockito", level: 92 },
      { name: "Selenium", level: 88 },
      { name: "Swagger", level: 85 },
      { name: "Git", level: 90 }
    ]
  }
];

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        background: theme.palette.gradient.main,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/path/to/pattern.svg")',
          opacity: 0.1,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Skills
          </Typography>

          <Grid container spacing={{ xs: 2, md: 4 }}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} md={6} key={categoryIndex}>
                <motion.div
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, sm: 3, md: 4 },
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 4, 
                        color: 'white',
                        fontWeight: 600,
                      }}
                    >
                      {category.category}
                    </Typography>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1" sx={{ color: 'white' }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: '100%' } : {}}
                          transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.8 }}
                        >
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                                background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, #ffffff 100%)',
                              },
                            }}
                          />
                        </motion.div>
                      </Box>
                    ))}
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

export default Skills; 