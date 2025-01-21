import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    title: "Software Developer",
    company: "Han IT Inc",
    period: "Jan 2025 – Present",
    description: [
      "Design and develop microservices-based applications using Spring Boot and Java",
      "Implement event driven architecture using Kafka integration",
      "Develop and document REST APIs using Swagger",
      "Collaborate with cross-functional teams to build scalable and secure applications",
      "Conduct unit testing using JUnit & Mockito to maintain high-quality code",
      "Perform QA automation testing for UI and Backend application components"
    ]
  },
  {
    title: "Software Developer",
    company: "GenZ Software Solutions Pvt Ltd",
    period: "Oct 2023 – Dec 2024",
    description: [
      "Designed and implemented microservices-based backend architecture for an airline ancillary recommendation system",
      "Integrated Redis caching and Kafka messaging to enhance system performance",
      "Developed and executed unit tests using JUnit & Mockito",
      "Automated test cases using Selenium for UI validation and API testing"
    ]
  },
  {
    title: "Software Developer",
    company: "Armstrong Machine Builders Pvt Ltd",
    period: "Sep 2022 – Sep 2023",
    description: [
      "Developed RESTful APIs with Spring Boot, improving response times by 35%",
      "Integrated RabbitMQ for event-driven messaging between microservices",
      "Achieved 85% test coverage using JUnit & Mockito for unit testing",
      "Reduced downtime by 25% by integrating automated triggers in Azure DevOps CI/CD pipelines",
      "Performed QA automation testing with Selenium to validate application workflows"
    ]
  },
  {
    title: "Software Engineer",
    company: "SitusAMC India Pvt Ltd",
    period: "Nov 2020 – Mar 2022",
    description: [
      "Modernized monolithic applications into Spring Boot microservices, cutting maintenance efforts by 50%",
      "Developed hybrid automation frameworks integrating Selenium with Java",
      "Managed AWS cloud environments (EC2, S3, Lambda), integrating CI/CD pipelines",
      "Conducted comprehensive unit testing using JUnit & Mockito",
      "Executed API testing using Postman and automated regression testing"
    ]
  },
  {
    title: "Software Engineer",
    company: "Mphasis Ltd",
    period: "Oct 2018 – Mar 2020",
    description: [
      "Built secure APIs for a mortgage underwriting platform, reducing manual processing by 30%",
      "Maintained 95% sprint velocity while working in an Agile Scrum environment",
      "Developed REST APIs with Spring Boot and integrated Postman for API testing",
      "Reduced defect resolution time by 15% through improved defect triage process"
    ]
  },
  {
    title: "Software Engineer",
    company: "Suma Soft Pvt Ltd",
    period: "Apr 2015 – Sep 2018",
    description: [
      "Built a modular Pytest-based automation framework, increasing test coverage by 40%",
      "Developed and tested core trading systems, ensuring seamless order processing",
      "Documented test scenarios and defect logs using Jira",
      "Performed functional and regression testing using Selenium"
    ]
  }
];

const Experience = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id="experience"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(37, 99, 235, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: theme.palette.gradient.main,
          filter: 'blur(80px)',
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 8, 
              textAlign: 'center',
              background: theme.palette.gradient.main,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Experience
          </Typography>

          <Timeline 
            position="alternate"
            sx={{
              [`@media (max-width:600px)`]: {
                '.MuiTimelineItem-root': {
                  minHeight: 'auto',
                },
                '.MuiTimelineContent-root': {
                  px: 1,
                },
                '.MuiTimelineDot-root': {
                  margin: 0,
                },
                '.MuiTimelineConnector-root': {
                  width: 1,
                },
              },
            }}
          >
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <TimelineDot
                      sx={{
                        background: theme.palette.gradient.main,
                        p: 2,
                      }}
                    >
                      <WorkIcon />
                    </TimelineDot>
                  </motion.div>
                  <TimelineConnector 
                    sx={{ 
                      background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      width: '2px',
                    }} 
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        mb: 3,
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                          background: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        {exp.company} | {exp.period}
                      </Typography>
                      <Box 
                        component="ul" 
                        sx={{ 
                          m: 0, 
                          pl: 2,
                          listStyleType: 'none',
                          '& li': {
                            position: 'relative',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              left: index % 2 === 0 ? '-1em' : '-1em',
                              top: '0.6em',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: theme.palette.primary.main,
                            }
                          }
                        }}
                      >
                        {exp.description.map((item, i) => (
                          <Typography
                            component="li"
                            key={i}
                            variant="body2"
                            sx={{ 
                              mb: 1,
                              color: theme.palette.text.secondary,
                              lineHeight: 1.7,
                              textAlign: 'left',
                              pl: '0.5em',
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 