# Lucas Bravo Parra - Portfolio Website

A modern, glass morphism-inspired portfolio website built with React and React Three Fiber, showcasing the work and experience of frontend developer Lucas Bravo Parra.

## 🎨 Features

### Design & UI
- **Modern Glass Morphism**: Apple-inspired glass morphism design throughout
- **Dark Theme**: Sophisticated black and graphite color scheme
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Optimized for all device sizes
- **3D Effects**: React Three Fiber powered 3D glass effects

### Sections
1. **Hero Section**: Dynamic 3D silk background with name and title
2. **About Me**: Professional profile and personal information
3. **Skills & Technologies**: Categorized technical skills with icons
4. **Featured Projects**: Filterable project showcase with categories
5. **Experience & Education**: Timeline of work history and education
6. **Contact Form**: Interactive contact form with glass morphism styling
7. **Footer**: Social links and navigation

### Interactive Features
- **Floating Music Player**: 
  - Auto-minimizes after 5 seconds
  - Hover to expand and show controls
  - Kanye West playlist (Power, Two Words, True Love)
  - Volume control and track switching
  - Glass morphism UI design

- **Smooth Scroll Navigation**: Seamless scrolling between sections
- **Project Filtering**: Filter projects by category (Web Application, Dashboard, etc.)
- **Form Validation**: Interactive contact form with submission handling
- **Responsive Interactions**: Hover effects and micro-animations

## 🛠️ Technologies Used

### Frontend
- **React 19**: Latest React version with modern hooks
- **React Three Fiber**: 3D graphics and animations
- **Three.js**: 3D rendering engine
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Navigation and routing
- **Lucide React**: Modern icon library

### 3D & Graphics
- **@react-three/drei**: Three.js helpers and utilities
- **@react-three/fiber**: React renderer for Three.js
- **maath**: Math utilities for 3D graphics

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.jsx          # Hero section with 3D background
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Skills and technologies
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Experience.jsx    # Work experience & education
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer with links
│   ├── FluidGlass.jsx        # 3D glass effect component
│   ├── GlassCard.jsx         # Reusable glass morphism card
│   └── MusicPlayer.jsx       # Floating music player
├── data/
│   └── mockData.js           # Mock data for portfolio content
├── App.js                    # Main application component
├── App.css                   # Global styles and glass morphism utilities
└── index.css                 # Tailwind CSS imports
```

## 🎵 Music Player Features

- **Auto-hide**: Minimizes to corner after 5 seconds
- **Hover interaction**: Expands on hover to show full controls
- **Playlist management**: Cycles through Kanye West tracks
- **Volume control**: Adjustable volume with mute toggle
- **Visual feedback**: Shows current playing status
- **Glass morphism**: Consistent with overall design theme

## 🎯 Mock Data Features

The portfolio uses comprehensive mock data including:
- Professional experience from Banco Cooperativo Español and Fiscales Alternative S.L.
- Educational background from C.F.P. Juan XXIII
- Technical skills categorized by type (Frontend, Backend, etc.)
- Project portfolio with real placeholder images
- Contact information and social links

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Required 3D Models**:
   - Place `lens.glb`, `cube.glb`, and `bar.glb` in `public/assets/3d/`
   - Add `figtreeblack.ttf` font to `public/assets/fonts/`

3. **Start development server**:
   ```bash
   yarn start
   ```

4. **Build for production**:
   ```bash
   yarn build
   ```

## 🎨 Design Philosophy

The portfolio follows modern Apple-inspired design principles:

- **Glass Morphism**: Translucent backgrounds with blur effects
- **Depth & Layering**: Multiple layers create visual hierarchy
- **Subtle Animations**: Smooth, purposeful micro-interactions
- **Dark Theme**: Professional black and graphite color scheme
- **Typography**: Clean, modern typography with proper hierarchy
- **Responsive**: Mobile-first approach with fluid layouts

## 🌟 Key Highlights

- **Professional Experience**: Real experience from Spanish financial and media companies
- **Technical Skills**: Comprehensive skill set including React, TypeScript, Angular, Vue.js
- **Modern Tech Stack**: Latest React 19 with Three.js integration
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Focus on usability and keyboard navigation
- **Portfolio Ready**: Complete with project showcase and contact form

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:
- **Desktop**: Full-featured layout with 3D effects
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized single-column layout

## 🎯 Future Enhancements

When backend integration is added, the following features can be implemented:
- **Contact form submission** to email/database
- **Resume download** functionality
- **Project data** from CMS or database
- **Contact information** management
- **Analytics** tracking

---

**Built with ❤️ by Lucas Bravo Parra**