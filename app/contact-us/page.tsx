'use client';

import { Metadata } from 'next';
import React, { useState } from 'react';

export const dynamic = 'force-dynamic';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      const contactRef = collection(db, 'contacts');
      await addDoc(contactRef, {
        ...formData,
        timestamp: new Date().toISOString(),
      });

      setSuccessMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'An error occurred while sending your message. Please try again.'
      );
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ backgroundColor: '#f5f5f5', py: 4 }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 2 }} component="h1">
            Contact Us
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '1.1rem' }} variant="body1">
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <form onSubmit={handleSubmit}>
            {successMessage && (
              <Alert severity="success" sx={{ mb: 3 }}>
                {successMessage}
              </Alert>
            )}

            {errorMessage && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {errorMessage}
              </Alert>
            )}

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                disabled={loading}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={loading}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                disabled={loading}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                disabled={loading}
              />
            </Box>

            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={5}
              placeholder="Please describe your inquiry..."
              disabled={loading}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ py: 1.5, px: 5, fontWeight: 'bold' }}
            >
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  Sending...
                </Box>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>

          <Box sx={{ mt: 6, backgroundColor: '#f5f5f5', p: 4, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              Other Ways to Reach Us
            </Typography>
            <Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Email
                </Typography>
                <Typography variant="body2">shreemaryada@gmail.com</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                  Phone
                </Typography>
                <Typography variant="body2">+91 (123) 456-7890</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
