import { Box, Typography, Container, TextField, Button, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import BedIcon from '@mui/icons-material/Bed';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Hero = () => {
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
        paddingTop: '64px', // Add padding for navbar
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '-0.5px',
              }}
            >
              Win Win Guest
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                fontWeight: 400,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                maxWidth: '800px',
              }}
            >
              Experience Luxury & Comfort at Affordable Prices
            </Typography>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Paper
            elevation={5}
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              p: { xs: 2, sm: 3 },
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 2,
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
                }}
              >
                Find Your Perfect Room
              </Typography>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ width: '100%' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <LocationOnIcon sx={{ color: '#1a237e', mr: 1 }} />
                  <TextField
                    fullWidth
                    placeholder="Location"
                    variant="outlined"
                    size="medium"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <BedIcon sx={{ color: '#1a237e', mr: 1 }} />
                  <TextField
                    fullWidth
                    select
                    label="Room Type"
                    defaultValue=""
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Select Room Type</option>
                    <option value="ac">AC Rooms</option>
                    <option value="non-ac">Non-AC Rooms</option>
                    <option value="suite">Suites</option>
                  </TextField>
                </Box>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ width: '100%' }}
              >
                <TextField
                  fullWidth
                  type="date"
                  label="Check In"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  type="date"
                  label="Check Out"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Stack>

              <Button
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
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
