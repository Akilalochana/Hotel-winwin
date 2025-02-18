import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1a237e',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Win Win Guest
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Experience luxury and comfort at its finest. Your perfect stay awaits at Win Win Guest.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/rooms" color="inherit" display="block" sx={{ mb: 1 }}>
              Rooms
            </Link>
            <Link href="/gallery" color="inherit" display="block" sx={{ mb: 1 }}>
              Gallery
            </Link>
            <Link href="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              24/7 Room Service
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Free WiFi
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Restaurant & Bar
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Spa & Wellness
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              123 Hotel Street
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              City Name, State
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +1 234 567 8900
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: info@winwinguest.com
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Win Win Guest. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
