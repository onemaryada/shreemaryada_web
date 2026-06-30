'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';

export default function Home() {
  const features = [
    {
      icon: <PhoneIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
      title: 'Mobile & Web',
      description: 'Access your management system from anywhere, on any device with our responsive applications.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
      title: 'Secure',
      description: 'Enterprise-grade security to keep your data safe and protected at all times.',
    },
    {
      icon: <StorageIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
      title: 'Scalable',
      description: 'Grow your business without worrying about system limitations or performance issues.',
    },
  ];

  const benefits = [
    'Streamlined workflow management',
    'Real-time data synchronization',
    'Comprehensive reporting tools',
    'Team collaboration features',
    'Intuitive user interface',
    'Reliable customer support',
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, alignItems: 'center' }}>
            <Box>
              <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold' }}>
                Shree Maryada PMS
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 300, opacity: 0.95 }}>
                Profile Management System to streamline your business operations and enhance productivity.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button sx={{ backgroundColor: 'white', color: '#667eea', py: 1.5, px: 4, fontWeight: 'bold', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    Get Started
                  </Button>
                </Link>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', py: 1.5, px: 4, fontWeight: 'bold', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'white' } }}>
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            Why Choose Shree Maryada PMS?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
            {features.map((feature, index) => (
              <Card key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ textAlign: 'center', pt: 3 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Key Benefits Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            Key Benefits
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
            {benefits.map((benefit, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <CheckCircleIcon sx={{ color: '#1976d2', flexShrink: 0, mt: 0.5 }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: '#1976d2', color: 'white', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Ready to Transform Your Business?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.95 }}>
            Join thousands of organizations using Shree Maryada PMS to manage their operations efficiently.
          </Typography>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button sx={{ backgroundColor: 'white', color: '#1976d2', py: 1.5, px: 5, fontWeight: 'bold', fontSize: '1rem', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              Contact Us Today
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
