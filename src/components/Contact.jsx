import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
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
              mb: 6,
              fontWeight: 700,
              color: '#1a237e',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Contact Us
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Send us a Message
                </Typography>
                <form>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      bgcolor: '#1a237e',
                      '&:hover': {
                        bgcolor: '#0d47a1',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Contact Information
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOnIcon sx={{ color: '#1a237e', mr: 2, fontSize: 30 }} />
                    <Typography variant="body1">
                      123 Hotel Street, City Name, State, Country
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon sx={{ color: '#1a237e', mr: 2, fontSize: 30 }} />
                    <Typography variant="body1">
                      +1 234 567 8900
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon sx={{ color: '#1a237e', mr: 2, fontSize: 30 }} />
                    <Typography variant="body1">
                      info@winwinguest.com
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 4, color: '#1a237e' }}>
                  Business Hours
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Monday - Sunday: 24/7
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our reception desk is always open to serve you
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
