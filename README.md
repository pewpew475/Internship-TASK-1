# IELTS Mastery - Professional IELTS Preparation Platform

A modern, responsive Next.js application designed to help students achieve their target IELTS band scores through AI-powered practice, expert mentorship, and comprehensive study materials.

## 🚀 Features

- **AI-Powered Learning**: Instant feedback on speaking and writing tasks
- **Expert Mentorship**: 1:1 sessions with certified IELTS trainers
- **Real Mock Tests**: Cambridge-style practice tests with detailed analytics
- **Personalized Study Plans**: Tailored learning paths based on individual needs
- **Progress Tracking**: Comprehensive analytics and band score predictions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Development**: TypeScript, ESLint, Turbopack

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ielts-mastery
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (buttons, cards, etc.)
│   ├── Hero.tsx          # Hero section with main CTA
│   ├── Features.tsx      # Key features showcase
│   ├── Stats.tsx         # Success statistics
│   ├── HowItWorks.tsx    # 4-step methodology
│   ├── Testimonials.tsx  # Student success stories
│   ├── Pricing.tsx       # Pricing plans
│   ├── Contact.tsx       # Contact form and information
│   ├── FinalCTA.tsx      # Final call-to-action
│   ├── Navbar.tsx        # Navigation header
│   └── Footer.tsx        # Footer with links
└── visual-edits/         # Visual editing system
    ├── VisualEditsMessenger.tsx
    └── component-tagger-loader.js
```

## 🎨 Design Choices & Philosophy

### Color Scheme
- **Primary Green**: `#16a34a` (green-600) - Represents growth, success, and achievement
- **Neutral Grays**: Professional, trustworthy appearance
- **Accent Colors**: Subtle highlights for important elements

### Typography
- **Font Family**: Geist Sans - Modern, readable, and professional
- **Hierarchy**: Clear heading structure (h1-h6) for better SEO and accessibility
- **Readability**: Optimized line heights and spacing for comfortable reading

### Layout & Spacing
- **Container Width**: Max-width of 7xl (1280px) for optimal reading experience
- **Consistent Spacing**: 16px (py-16) and 20px (py-20) vertical rhythm
- **Grid System**: Responsive grid layouts that adapt to different screen sizes

### Component Design
- **Card-Based Layout**: Clean, organized information presentation
- **Progressive Disclosure**: Information revealed progressively to avoid overwhelming users
- **Visual Hierarchy**: Clear distinction between primary and secondary content

### User Experience
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Fast Loading**: Optimized images and efficient code splitting
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation
- **Conversion-Focused**: Strategic placement of CTAs and trust indicators

### Content Strategy
- **Student-Centric**: Language and examples that resonate with IELTS aspirants
- **Social Proof**: Real testimonials and success statistics
- **Clear Value Proposition**: Specific benefits and outcomes
- **Urgency & Scarcity**: Limited-time offers and free trials

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Image Optimization

The project uses Next.js Image optimization with Unsplash as the image source. All images include proper `sizes` attributes for optimal performance.

### Custom Loader

The project includes a custom webpack loader (`component-tagger-loader.js`) for visual editing capabilities. This is configured in `next.config.ts`.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting (if configured)
- **Conventional Commits**: Follow conventional commit message format

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is protected by copyright and is licensed under a non-copy and no-use without consent license. 

**All rights reserved.** This software and its documentation are proprietary and confidential. No part of this project may be copied, distributed, modified, or used without explicit written consent from the copyright owner.

For licensing inquiries, please contact: legal@ieltsmastery.com



## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- [Unsplash](https://unsplash.com/) for high-quality images

---