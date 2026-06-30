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

### Contact Us (`/contact-us`)
- Contact form with name, email, phone, subject, and message fields
- Form validation
- Firebase Firestore integration to store submissions
- Success/error messaging

### Terms & Conditions (`/terms-and-conditions`)
- Comprehensive terms and conditions for the application

### Privacy Policy (`/privacy-policy`)
- Detailed privacy policy explaining data collection and usage

## Getting Started

The application is built with Next.js and Material-UI for a modern, responsive experience. Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
shreemaryada_web/
├── app/
│   ├── layout.tsx                    # Root layout with Navigation and Footer
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles
│   ├── contact-us/
│   │   └── page.tsx                  # Contact page with form
│   ├── terms-and-conditions/
│   │   └── page.tsx                  # Terms & Conditions page
│   └── privacy-policy/
│       └── page.tsx                  # Privacy Policy page
├── components/
│   ├── Navigation.tsx                # Top navigation bar
│   ├── Footer.tsx                    # Footer component
│   └── ThemeRegistry.tsx             # MUI theme setup
├── lib/
│   └── firebase.ts                   # Firebase configuration
├── theme/
│   └── theme.ts                      # MUI theme configuration
├── public/
│   └── logo.png                      # Application logo
└── package.json
```


## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type-safe JavaScript
- **Material-UI (MUI)** - UI component library
- **Firebase** - Backend services
- **Firestore** - Cloud database

## Customization

To customize the application, edit the following files:
- `app/layout.tsx` - Update metadata and page title
- `components/Navigation.tsx` - Update navigation branding
- `components/Footer.tsx` - Update footer content and contact information
- `app/page.tsx` - Update home page content
- `public/logo.png` - Replace with your desired logo
- `theme/theme.ts` - Customize colors, typography, and component styles

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

