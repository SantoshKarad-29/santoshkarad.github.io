import React from 'react';
import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: theme.palette.gradient.main,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            © {currentYear} Santosh Karad. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {[
              { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/yourprofile' },
              { icon: <GitHubIcon />, href: 'https://github.com/yourusername' },
              { icon: <EmailIcon />, href: 'mailto:santoshkarad29@gmail.com' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 