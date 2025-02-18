import { Box, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format',
    title: 'Hotel Exterior',
  },
  {
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format',
    title: 'Luxury Suite',
  },
  {
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format',
    title: 'Restaurant',
  },
  {
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format',
    title: 'Swimming Pool',
  },
  {
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format',
    title: 'Gym',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format',
    title: 'Conference Room',
  },
  {
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format',
    title: 'Spa',
  },
  {
    img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&auto=format',
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
