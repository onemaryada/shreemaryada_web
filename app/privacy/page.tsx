'use client';

import React from 'react';
import { Container, Box, Typography } from '@mui/material';

export default function PrivacyPage() {
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
            Privacy Policy
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Box sx={{ lineHeight: 1.8, color: '#333' }}>
            <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>
              Last updated: June 2026
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Shree Maryada PMS ("we", "us", "our", or "Company") operates the website and mobile application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              2. Information Collection and Use
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Types of Data Collected:
            </Typography>
            <ul>
              <li><Typography variant="body2" sx={{ mb: 1 }}><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, Name, Phone number, Cookies and Usage Data.</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's IP address, browser type, browser version, the pages you visit, the time and date of your visit, the time spent on pages, and other diagnostic data.</Typography></li>
            </ul>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              3. Use of Data
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Shree Maryada uses the collected data for various purposes:
            </Typography>
            <ul>
              <li><Typography variant="body2" sx={{ mb: 1 }}>To provide and maintain our Service</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>To notify you about changes to our Service</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>To allow you to participate in interactive features of our Service when you choose to do so</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>To provide customer support</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>To gather analysis or valuable information so that we can improve our Service</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>To monitor the usage of our Service</Typography></li>
              <li><Typography variant="body2" sx={{ mb: 1 }}>To detect, prevent and address technical issues</Typography></li>
            </ul>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              4. Security of Data
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              5. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              6. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              If you have any questions about this Privacy Policy, please contact us by email at shreemaryada@gmail.com or by visiting this page on our website: shreemaryada.com/contact
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              7. Data Retention
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              8. Your Rights
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              You have the right to access, update, or delete your Personal Data at any time by logging into your account or contacting us. You also have the right to request that we cease processing your personal data for marketing purposes.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              9. Third-Party Services
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', mt: 4 }}>
              10. California Compliance
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              California Online Privacy Protection Act (CalOPPA) is the first state law in the nation to require commercial websites and online services to post a privacy policy. To learn more about CalOPPA, we encourage you to review our full Privacy Policy and Terms of Service.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
