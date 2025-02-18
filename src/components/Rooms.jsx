import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Chip, Button, Stack } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import KingBedIcon from '@mui/icons-material/KingBed';
import { motion } from 'framer-motion';

const rooms = [
  {
    id: 1,
    name: 'AC Room',
    image: '/room1.jpg',
    price: 'Rs.5000',
    hasAC: true,
    description: 'Spacious room with modern amenities and city view',
    amenities: ['King Size Bed', 'Free WiFi', 'Mini Bar', 'Room Service'],
    size: '400 sq ft',
    maxOccupancy: '2 Adults + 1 Child',
  },
  {
    id: 2,
    name: 'Non-AC Room',
    image: '/room3.jpg',
    price: '₹1,500',
    hasAC: false,
    description: 'Comfortable room with essential amenities',
    amenities: ['Queen Size Bed', 'Free WiFi', 'Room Service'],
    size: '300 sq ft',
    maxOccupancy: '2 Adults',
  },
  {
    id: 3,
    name: 'AC Suite',
    image: '/room4.jpg',
    price: '₹3,500',
    hasAC: true,
    description: 'Luxury suite with separate living area and premium amenities',
    amenities: ['King Size Bed', 'Free WiFi', 'Mini Bar', 'Room Service', 'Living Area'],
    size: '600 sq ft',
    maxOccupancy: '2 Adults + 2 Children',
  },
  {
    id: 4,
    name: 'Family Non-AC Room',
    image: '/room5.jpg',
    price: '₹2,000',
    hasAC: false,
    description: 'Spacious room perfect for families',
    amenities: ['2 Double Beds', 'Free WiFi', 'Room Service'],
    size: '450 sq ft',
    maxOccupancy: '4 Adults',
  },
];

const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case 'Free WiFi':
      return <WifiIcon />;
    case 'Room Service':
      return <RoomServiceIcon />;
    case 'Mini Bar':
      return <LocalBarIcon />;
    case 'King Size Bed':
    case 'Queen Size Bed':
    case '2 Double Beds':
      return <KingBedIcon />;
    default:
      return null;
  }
};

const Rooms = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: '#1a237e',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our Rooms
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Choose from our selection of comfortable and luxurious rooms
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {rooms.map((room, index) => (
            <Grid item xs={12} md={6} key={room.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={room.image}
                    alt={room.name}
                    sx={{
                      position: 'relative',
                    }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" component="div" sx={{ fontWeight: 600, color: '#1a237e' }}>
                        {room.name}
                      </Typography>
                      {room.hasAC && (
                        <AcUnitIcon sx={{ color: '#1a237e' }} />
                      )}
                    </Box>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      {room.description}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 3 }}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Size
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          {room.size}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Max Occupancy
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          {room.maxOccupancy}
                        </Typography>
                      </Box>
                    </Stack>
                    <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                      {room.price} <Typography component="span" variant="body2">/ night</Typography>
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {room.amenities.map((amenity, i) => (
                        <Chip
                          key={i}
                          label={amenity}
                          icon={getAmenityIcon(amenity)}
                          size="small"
                          sx={{ mr: 1, mb: 1, bgcolor: '#e8eaf6' }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 2,
                        bgcolor: '#1a237e',
                        '&:hover': {
                          bgcolor: '#0d47a1',
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Rooms;
