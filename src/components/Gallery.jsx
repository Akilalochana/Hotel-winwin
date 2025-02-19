import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const galleryImages = [
  {
    img: '/room6.jpg',
    title: 'Luxury Room',
  },
  {
    img: '/room7.jpg',
    title: 'Modern Bathroom',
  },
  {
    img: '/room8.jpg',
    title: 'Deluxe Room',
  },
  {
    img: '/room9.jpg',
    title: 'Hotel Restaurant',
  },
  {
    img: '/room10.jpg',
    title: 'Suite Room',
  },
  {
    img: '/room11.jpg',
    title: 'Swimming Pool',
  },
  {
    img: '/room5.jpg',
    title: 'Hotel Lobby',
  },
  {
    img: '/room4.jpg',
    title: 'Standard Room',
  },
  {
    img: '/room2.jpg',
    title: 'Dining Area',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: '#1a237e',
            fontWeight: 700,
            mb: 1,
          }}
        >
          Our Gallery
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: '#666',
            mb: 6,
            fontWeight: 300,
          }}
        >
          Experience the beauty and comfort of our hotel
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Grid container spacing={3}>
          {galleryImages.map((item, index) => (
            <Grid item xs={12} sm={6} key={item.img}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={() => handleImageClick(item, index)}
                  sx={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    height: '100%',
                    '&:hover': {
                      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.img}
                      alt={item.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                  </motion.div>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Modal
        open={Boolean(selectedImage)}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      >
        <AnimatePresence>
          {selectedImage && (
            <Box
              sx={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                outline: 'none',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImage.img}
                src={selectedImage.img}
                alt={selectedImage.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: 0,
                  color: 'white',
                }}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: -60,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: -60,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          )}
        </AnimatePresence>
      </Modal>
    </Container>
  );
};

export default Gallery;
