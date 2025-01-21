import React from 'react';
import { Box, Container, Typography, Button, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a365d 0%, #3182ce 100%)', // Deeper blue gradient
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: '80px', md: 0 }, // Add padding top for mobile to account for fixed header
      }}
    >
      {/* Animated background circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          filter: 'blur(80px)',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            maxWidth: '800px',
            px: { xs: 2, sm: 0 } // Add horizontal padding on mobile
          }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, // Adjusted font sizes
                fontWeight: 800,
                mb: 3,
                color: '#ffffff',
                letterSpacing: '-0.02em', // Tighter letter spacing
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)', // Stronger shadow
              }}
            >
              Santosh Karad
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
                color: '#ffffff',
                opacity: 0.95,
                letterSpacing: '-0.01em',
              }}
            >
              Backend Software Engineer
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 6,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                color: '#ffffff',
                opacity: 0.9,
                lineHeight: 1.6,
                maxWidth: '700px',
                fontWeight: 400,
              }}
            >
              Specializing in Java, Spring Boot, and Microservices Architecture
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Box sx={{ 
                mb: 6, 
                display: 'flex', 
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons on mobile
                width: { xs: '100%', sm: 'auto' } // Full width buttons on mobile
              }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#contact"
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#1a365d',
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#about"
                  sx={{
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#ffffff',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  View Portfolio
                </Button>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Box sx={{ display: 'flex', gap: 3 }}>
                {[
                  { icon: <EmailIcon fontSize="large" />, href: 'mailto:santoshkarad29@gmail.com' },
                  { icon: <LinkedInIcon fontSize="large" />, href: 'https://linkedin.com/in/yourprofile' },
                  { icon: <GitHubIcon fontSize="large" />, href: 'https://github.com/yourusername' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={item.href}
                      sx={{
                        color: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 