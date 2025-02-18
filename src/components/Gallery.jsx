import { Box, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';

const itemData = [
  {
    img: '/room6.jpg',
    title: 'Hotel Exterior',
  },
  {
    img: '/room7.jpg',
    title: 'Luxury Suite',
  },
  {
    img: '/room8.jpg',
    title: 'Restaurant',
  },
  {
    img: '/room9.jpg',
    title: 'Swimming Pool',
  },
  {
    img: '/room10.jpg',
    title: 'Gym',
  },
  {
    img: '/room11.jpg',
    title: 'Conference Room',
  },
  {
    img: '/room3.jpg',
    title: 'Spa',
  },
  {
    img: '/room1.jpg',
    title: 'Garden View',
  },
];

const Gallery = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#fff' }}>
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
              mb: 6,
              fontWeight: 700,
              color: '#1a237e',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our Gallery
          </Typography>
        </motion.div>

        <ImageList
          sx={{ width: '100%', height: 'auto' }}
          variant="quilted"
          cols={4}
          rowHeight={200}
          gap={16}
        >
          {itemData.map((item, index) => (
            <ImageListItem
              key={item.img}
              cols={index % 3 === 0 ? 2 : 1}
              rows={index % 3 === 0 ? 2 : 1}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </motion.div>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default Gallery;
