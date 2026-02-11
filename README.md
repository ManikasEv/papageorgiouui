# Papageorgiou Foundation Engineering Website

A modern, responsive website for a foundation engineering company built with React, Vite, and Tailwind CSS.

## 📁 Project Structure

```
src/
├── components/           # All React components
│   ├── Hero.jsx         # Hero section with 4 dynamic content buttons
│   ├── Team.jsx         # Team members showcase section
│   ├── Contact.jsx      # Contact section wrapper
│   ├── ContactForm.jsx  # Contact form component
│   ├── Map.jsx          # Google Maps embed component
│   └── Footer.jsx       # Footer with social media, links, and contact info
│
├── data/                # Data files for content management
│   ├── heroData.js      # Hero section content (4 different states)
│   ├── teamData.js      # Team members information
│   ├── contactData.js   # Contact form configuration
│   └── footerData.js    # Footer links and social media
│
├── App.jsx              # Main app component
├── App.css              # Custom styles and animations
├── index.css            # Tailwind CSS imports
└── main.jsx             # App entry point
```

## 🎨 Design Philosophy

- **Mobile-First**: All components are designed for mobile first, then enhanced for desktop with `md:` breakpoints
- **Responsive**: Uses Tailwind CSS responsive utilities for seamless adaptation across devices
- **Component-Based**: Clean separation of concerns with reusable components
- **Data-Driven**: Content stored in separate data files for easy updates

## 🚀 Features

### Hero Section
- 4 interactive buttons on the left (mobile: horizontal scroll, desktop: vertical stack)
- Dynamic content that changes based on button selection
- Smooth transitions and animations
- Call-to-action button

### Team Section
- Responsive grid layout (1 column mobile, 2-4 columns desktop)
- Team member cards with images, names, positions, and descriptions
- Hover effects with smooth transitions

### Contact Section
- Contact form with validation
- Google Maps embed showing company location
- Side-by-side layout on desktop, stacked on mobile
- Success message on form submission

### Footer
- **Left**: Social media icons (Facebook, LinkedIn, Instagram, Twitter)
- **Middle**: Quick links with animated hover effects
- **Right**: Complete contact information with icons
- Fully responsive layout

## 🛠️ Technologies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## 📱 Responsive Breakpoints

- Mobile: `< 768px` (default)
- Desktop: `md: >= 768px`

## 🎯 Usage

All content can be easily updated by modifying the data files in `src/data/`:
- Update hero content: `heroData.js`
- Update team members: `teamData.js`
- Update contact info: `contactData.js`
- Update footer links: `footerData.js`

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- The map uses Google Maps embed (you may want to add a proper API key for production)
- Images use Unsplash placeholders - replace with actual team photos
- Contact form currently simulates submission - integrate with backend as needed
# papageorgiouui
