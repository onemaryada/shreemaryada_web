# Shree Maryada PMS - Landing Web

A modern, responsive landing page built with Next.js, TypeScript, Material-UI, and Firebase for the Shree Maryada PMS application.

## Features

- 🎨 Beautiful, responsive design using Material-UI (MUI)
- 📱 Fully responsive across mobile, tablet, and desktop devices
- 🔗 Multi-page application with routing for Home, Terms & Conditions, Privacy Policy, and Contact Us
- 📧 Contact form with Firebase Firestore integration
- ⚡ Built with Next.js 16 for optimal performance
- 🔐 TypeScript for type safety
- 📦 Easy to deploy on Vercel or other hosting platforms

## Pages

### Home (`/`)
- Hero section showcasing the application
- Application logo and branding
- Features section highlighting key benefits
- Call-to-action sections

### Contact Us (`/contact`)
- Contact form with name, email, phone, subject, and message fields
- Form validation
- Firebase Firestore integration to store submissions
- Success/error messaging

### Terms & Conditions (`/terms`)
- Comprehensive terms and conditions for the application

### Privacy Policy (`/privacy`)
- Detailed privacy policy explaining data collection and usage

## Getting Started

### Prerequisites

- Node.js 22.11.0 or higher
- npm or yarn package manager
- Firebase project with Firestore enabled

### Installation

1. Navigate to the project directory:
```bash
cd shreemaryada_web
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase configuration:
   - Copy `.env.local.example` to `.env.local`
   - Add your Firebase project credentials to `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
shreemaryada_web/
├── app/
│   ├── layout.tsx          # Root layout with Navigation and Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── contact/
│   │   └── page.tsx        # Contact page with form
│   ├── terms/
│   │   └── page.tsx        # Terms & Conditions page
│   └── privacy/
│       └── page.tsx        # Privacy Policy page
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   └── Footer.tsx          # Footer component
├── lib/
│   └── firebase.ts         # Firebase configuration
├── theme/
│   └── theme.ts            # MUI theme configuration
├── public/
│   └── logo.png            # Application logo
└── package.json
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel settings
5. Deploy

### Other Hosting

The application can be deployed to any Node.js hosting platform. Make sure to:
1. Set environment variables
2. Run `npm run build`
3. Run `npm start` to start the server

## Firebase Setup

### Enable Firestore Database

1. Go to your Firebase Console
2. Create a Firestore database in production mode
3. Create a collection named `contacts` for storing contact form submissions

### Security Rules

Add these security rules to your Firestore database:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow create: if request.auth == null;
      allow read, write: if false;
    }
  }
}
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type-safe JavaScript
- **Material-UI (MUI)** - UI component library
- **Firebase** - Backend services
- **Firestore** - Cloud database

## Customization

### Update Application Name and Details

Edit the following files to customize:
- `app/layout.tsx` - Update metadata
- `components/Navigation.tsx` - Update branding
- `components/Footer.tsx` - Update contact information
- `app/page.tsx` - Update home page content

### Update Logo

Replace the logo file at `public/logo.png` with your desired logo.

### Modify Theme

Edit `theme/theme.ts` to customize colors, typography, and component styles.

## Performance

- Optimized images with Next.js Image component
- Lazy loading for components
- Responsive design to reduce CSS overhead
- Production-ready build optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Shree Maryada PMS.

## Support

For support, email: info@shreemaryada.com

## Future Enhancements

- [ ] Blog section
- [ ] FAQ section
- [ ] Newsletter signup
- [ ] Team showcase
- [ ] Testimonials section
- [ ] Pricing page
- [ ] Multi-language support
# shreemaryada_web
