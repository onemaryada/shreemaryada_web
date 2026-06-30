'use client';

import React from 'react';
import { Container, Box, Typography } from '@mui/material';

export default function TermsPage() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
            }}
          >
            Terms & Conditions
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Box sx={{ lineHeight: 1.8, color: '#333' }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              By accessing and using Shree Maryada PMS, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              2. License
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Shree Maryada grants you a limited, non-exclusive, non-transferable license to access and use the Service for your personal, non-commercial use only, in accordance with these terms.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              3. User Responsibilities
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Users are responsible for maintaining the confidentiality of their account information and password. Users agree to accept responsibility for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              4. Prohibited Activities
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Users shall not, in the use of Shree Maryada PMS, violate any applicable laws or regulations, or infringe upon the rights of others. Specifically, users shall not:
            </Typography>
            <ul>
              <li><Typography variant="body2" sx={{ mb: 1 }}>Harass or cause distress or discomfort to any person</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>Offend based on race, religion, disability, age, sex, sexual preference, or national origin</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>Transmit obscene or offensive content</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>Disrupt the normal flow of dialogue within our website</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>Attempt to gain unauthorized access to the system</Typography></li>
            </ul>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              5. Limitation of Liability
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Shree Maryada and its suppliers assume no responsibility or liability for any errors or omissions in the content of the Service. In no event shall Shree Maryada or its suppliers be liable for any damages (including, without limitation, consequential, incidental, indirect, special or punitive damages, lost profits or lost data) arising out of or in connection with the use of or inability to use the materials or services, even if advised of the possibility of such damages.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              6. Data Privacy
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Your use of Shree Maryada PMS is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              7. Modification of Terms
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Shree Maryada reserves the right to modify these terms and conditions at any time. Users will be notified of any changes, and your continued use of the Service constitutes acceptance of the updated terms.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              8. Termination
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Shree Maryada reserves the right to terminate or suspend your account and access to the Service at any time, for any reason, without notice, at Shree Maryada&apos;s sole discretion.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              9. Governing Law
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              10. Contact Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              If you have any questions about these Terms and Conditions, please contact us at shreemaryada@gmail.com.
            </Typography>

            <Typography variant="body2" sx={{ mt: 6, color: '#999' }}>
              Last updated: June 2026
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
