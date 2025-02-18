import { Box, Typography, Container, Button, Paper, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { motion } from 'framer-motion';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotelIcon from '@mui/icons-material/Hotel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [roomType, setRoomType] = useState('all');
  const [acType, setAcType] = useState('all');
  const navigate = useNavigate();

  const handleRoomTypeChange = (event, newRoomType) => {
    if (newRoomType !== null) {
      setRoomType(newRoomType);
    }
  };

  const handleAcTypeChange = (event, newAcType) => {
    if (newAcType !== null) {
      setAcType(newAcType);
    }
  };

  const handleSearch = () => {
    navigate(`/rooms?type=${roomType}&ac=${acType}`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&auto=format")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '4rem' },
              textAlign: 'center',
              mb: 2,
            }}
          >
            Win Win Guest
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              textAlign: 'center',
              mb: 6,
              fontWeight: 300,
            }}
          >
            Experience Luxury & Comfort at Affordable Prices
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              maxWidth: 600,
              mx: 'auto',
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: '#1a237e',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Find Your Perfect Room
              </Typography>

              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, color: '#1a237e' }}>
                  Room Type
                </Typography>
                <ToggleButtonGroup
                  value={roomType}
                  exclusive
                  onChange={handleRoomTypeChange}
                  aria-label="room type"
                  fullWidth
                >
                  <ToggleButton value="all" aria-label="all rooms">
                    <HotelIcon sx={{ mr: 1 }} /> All Rooms
                  </ToggleButton>
                  <ToggleButton value="single" aria-label="single room">
                    <HotelIcon sx={{ mr: 1 }} /> Single
                  </ToggleButton>
                  <ToggleButton value="double" aria-label="double room">
                    <HotelIcon sx={{ mr: 1 }} /> Double
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, color: '#1a237e' }}>
                  AC Preference
                </Typography>
                <ToggleButtonGroup
                  value={acType}
                  exclusive
                  onChange={handleAcTypeChange}
                  aria-label="ac type"
                  fullWidth
                >
                  <ToggleButton value="all" aria-label="all types">
                    All Types
                  </ToggleButton>
                  <ToggleButton value="ac" aria-label="ac room">
                    <AcUnitIcon sx={{ mr: 1 }} /> AC
                  </ToggleButton>
                  <ToggleButton value="non-ac" aria-label="non-ac room">
                    Non-AC
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>

              <Button
                variant="contained"
                size="large"
                onClick={handleSearch}
                sx={{
                  bgcolor: '#1a237e',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#0d47a1',
                  },
                }}
              >
                Search Rooms
              </Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
