'use client';

import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', py: 4, mt: 8, borderTop: '1px solid #ddd' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4, mb: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Shree Maryada PMS
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Profile Management System for Organizations
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={NextLink} href="/" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#000' } }}>
                Home
              </MuiLink>
              <MuiLink component={NextLink} href="/contact-us" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#000' } }}>
                Contact Us
              </MuiLink>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={NextLink} href="/terms-and-conditions" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#000' } }}>
                Terms & Conditions
              </MuiLink>
              <MuiLink component={NextLink} href="/privacy-policy" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#000' } }}>
                Privacy Policy
              </MuiLink>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Email: shreemaryada@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box sx={{ borderTop: '1px solid #ddd', pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#999' }}>
            © {currentYear} Shree Maryada PMS. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
