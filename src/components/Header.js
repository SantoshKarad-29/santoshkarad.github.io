import React, { useState, useEffect } from 'react';
import { AppBar, Container, Box, Button, IconButton, useTheme, useScrollTrigger } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 1200 }}
        >
          <AppBar
            position="fixed"
            elevation={trigger ? 4 : 0}
            sx={{
              backgroundColor: trigger ? 'rgba(26, 54, 93, 0.95)' : 'transparent',
              backdropFilter: trigger ? 'blur(10px)' : 'none',
              transition: 'all 0.3s ease-in-out',
              boxShadow: trigger 
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                : 'none',
              height: { xs: '64px', md: '80px' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <motion.a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  SK
                </motion.a>

                {/* Desktop Navigation */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: 4,
                    height: '100%',
                    alignItems: 'center',
                  }}
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        href={item.href}
                        sx={{
                          color: '#ffffff',
                          fontWeight: 600,
                          fontSize: '1rem',
                          px: 2,
                          height: '40px',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  ))}
                </Box>

                {/* Mobile Navigation Toggle */}
                <IconButton
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    color: '#ffffff',
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Container>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: theme.palette.primary.main,
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Container>
                    <Box sx={{ py: 2 }}>
                      {navItems.map((item) => (
                        <motion.div
                          key={item.name}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            fullWidth
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            sx={{
                              py: 2,
                              color: '#ffffff',
                              justifyContent: 'flex-start',
                              fontWeight: 600,
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              },
                            }}
                          >
                            {item.name}
                          </Button>
                        </motion.div>
                      ))}
                    </Box>
                  </Container>
                </motion.div>
              )}
            </AnimatePresence>
          </AppBar>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header; 