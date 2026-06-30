# Shree Maryada PMS Web - Setup Guide

## Quick Start

### 1. Prerequisites
- Node.js 22.11.0 or higher installed
- Firebase project created (with Firestore enabled)

### 2. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select an existing one
3. Create a Firestore database:
   - Go to Firestore Database
   - Create database in production mode
   - Create a collection named `contacts`

4. Get your Firebase credentials:
   - Go to Project Settings (gear icon)
   - Navigate to "Service Accounts" tab
   - Click "Generate new private key" and copy the configuration
   - Or go to "General" tab and scroll down to find your Web App credentials

### 3. Environment Setup

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your Firebase credentials in `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Test the Application

- Visit the home page to see the landing page
- Click "Get Started" or "Contact Us" to visit the contact form
- Fill out the contact form and submit to test Firestore integration
- Check your Firestore database to verify the data was saved
- Browse through Terms & Conditions and Privacy Policy pages

## Firestore Security Rules

For production, add these security rules to your Firestore database:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      // Allow anyone to create new contacts (no auth required)
      allow create: if request.auth == null;
      // Deny read and write (only your backend should read these)
      allow read, write: if false;
    }
  }
}
```

## Project Structure

```
shreemaryada_web/
├── app/
│   ├── layout.tsx          # Root layout with global setup
│   ├── page.tsx            # Home/landing page
│   ├── globals.css         # Global styles
│   ├── contact/
│   │   └── page.tsx        # Contact form page with Firestore integration
│   ├── terms/
│   │   └── page.tsx        # Terms & Conditions page
│   └── privacy/
│       └── page.tsx        # Privacy Policy page
├── components/
│   ├── Navigation.tsx      # Top navigation with mobile menu
│   ├── Footer.tsx          # Footer with links and info
│   └── ThemeRegistry.tsx   # MUI Theme provider wrapper
├── lib/
│   └── firebase.ts         # Firebase configuration and initialization
├── theme/
│   └── theme.ts            # MUI theme configuration
└── public/
    └── logo.png            # Application logo
```

## Key Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Contact form with Firebase Firestore integration  
✅ Terms & Conditions page  
✅ Privacy Policy page  
✅ Sticky navigation with mobile menu  
✅ Beautiful footer with links  
✅ TypeScript for type safety  
✅ Material-UI components  
✅ Production-ready build  

## Customization

### Update Company Information
Edit these files to update company name, email, phone:
- `components/Footer.tsx` - Line 22, 25, 28
- `components/Navigation.tsx` - Line 20
- `app/page.tsx` - Various sections

### Change Logo
Replace `public/logo.png` with your own logo

### Update Colors
Edit `theme/theme.ts` to change the primary and secondary colors:
```typescript
palette: {
  primary: {
    main: '#your_color',
  },
  secondary: {
    main: '#your_color',
  },
}
```

### Add Contact Information
Update in `app/contact/page.tsx`:
- Email address (line 106)
- Phone number (line 113)

## Build for Production

```bash
npm run build
npm start
```

The application will be optimized and ready to deploy.

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
The application can be deployed to any Node.js hosting:
- AWS Amplify
- Heroku
- DigitalOcean
- Google Cloud Run
- Azure App Service

## Troubleshooting

### Firebase Connection Issues
- Verify all environment variables are set correctly
- Check Firebase project settings
- Ensure Firestore database is created and in correct region
- Verify security rules allow POST requests for contacts collection

### Build Errors
- Clear `.next` folder and try again: `rm -rf .next && npm run build`
- Ensure Node.js version is 22.11.0 or higher
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Contact Form Not Saving
- Check browser console for errors
- Verify Firestore collection name is `contacts`
- Check Firebase security rules allow create operation
- Verify `.env.local` has correct Firebase credentials

## Support

For issues or questions:
- Email: info@shreemaryada.com
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Firebase documentation](https://firebase.google.com/docs)
- Check the [MUI documentation](https://mui.com/docs)

## Next Steps

After setup:
1. Test all pages thoroughly
2. Update branding/colors to match your brand
3. Add analytics (Google Analytics, Mixpanel, etc.)
4. Set up domain and SSL certificate
5. Configure email notifications for contact form submissions
6. Monitor Firestore for incoming contact messages

---

**Last Updated:** June 2026
