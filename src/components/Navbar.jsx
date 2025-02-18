import { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const pages = ['Home', 'Rooms', 'Gallery', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActivePage = (page) => {
    if (page === 'Home') return location.pathname === '/';
    return location.pathname === '/' + page.toLowerCase();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Desktop Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 4 }}>
              <AcUnitIcon sx={{ mr: 1, color: isScrolled ? '#1a237e' : 'white' }} />
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: isScrolled ? '#1a237e' : 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                WIN WIN
              </Typography>
            </Box>
          </motion.div>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: isScrolled ? '#1a237e' : 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                  sx={{
                    backgroundColor: isActivePage(page) ? 'rgba(26, 35, 126, 0.1)' : 'transparent',
                  }}
                >
                  <Typography textAlign="center" color="#1a237e">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <AcUnitIcon sx={{ mr: 1, color: isScrolled ? '#1a237e' : 'white' }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: isScrolled ? '#1a237e' : 'white',
                textDecoration: 'none',
              }}
            >
              WIN WIN
            </Typography>
          </Box>

          {/* Desktop Menu Items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <AnimatePresence>
              {pages.map((page) => (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button
                    component={Link}
                    to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                    onClick={handleCloseNavMenu}
                    sx={{
                      mx: 2,
                      color: isScrolled ? '#1a237e' : 'white',
                      display: 'block',
                      fontWeight: 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: isActivePage(page) ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: isScrolled ? '#1a237e' : 'white',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {page}
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>

          {/* Contact Button */}
          <Box sx={{ flexGrow: 0 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant={isScrolled ? 'contained' : 'outlined'}
                component={Link}
                to="/contact"
                startIcon={<PhoneIcon />}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  bgcolor: isScrolled ? '#1a237e' : 'transparent',
                  color: isScrolled ? 'white' : 'white',
                  borderColor: 'white',
                  '&:hover': {
                    bgcolor: isScrolled ? '#0d47a1' : 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'white',
                  },
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
