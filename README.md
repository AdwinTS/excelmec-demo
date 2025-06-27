# ExcelMEC 2025 - Technical Symposium Website

A modern, futuristic website for ExcelMEC 2025 technical symposium featuring stunning animations, responsive design, and a sleek pink-black aesthetic.

![ExcelMEC 2025](https://img.shields.io/badge/ExcelMEC-2025-pink?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### ✨ **Visual Effects**
- **Shooting Stars Animation** - Dynamic cosmic background effects
- **Animated Globe** - Interactive 3D-style globe with orbital rings
- **Particle System** - Twinkling stars and floating particles
- **Gradient Backgrounds** - Smooth black-to-pink gradients
- **Corner Decorations** - Futuristic border elements

### 📱 **Responsive Design**
- **Mobile-First Approach** - Optimized for all screen sizes
- **Touch-Friendly Navigation** - Dropdown menu for mobile devices
- **Adaptive Layouts** - Grid systems that work on any device
- **Performance Optimized** - Fast loading on all devices

### 🎨 **Modern UI/UX**
- **shadcn/ui Components** - High-quality, accessible components
- **Dark Theme** - Sleek black and pink color scheme
- **Smooth Transitions** - Hover effects and animations
- **Typography** - Clean, readable fonts with proper hierarchy

### 📄 **Pages**
- **Home** - Hero section with animated globe and features
- **Events** - Comprehensive event listings with details
- **About** - Mission, vision, and statistics
- **Contact** - Contact form and information

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom CSS animations + Tailwind
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/AdwinTS/excelmec-demo.git
   cd excelmec-2025
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
excelmec-2025/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── events/           # Events page
├── components/
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── label.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json
\`\`\`

## 🎨 Customization

### Colors
The website uses a pink and black theme. To customize colors, edit `tailwind.config.ts`:

\`\`\`typescript
colors: {
  primary: {
    DEFAULT: "#ec4899", // Pink-500
    foreground: "#000000",
  },
  pink: {
    300: "#f9a8d4",
    400: "#f472b6", 
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
  },
}
\`\`\`

### Animations
Shooting star animations are defined in `app/globals.css`. Customize timing and effects:

\`\`\`css
.shooting-star-1 {
  animation: shooting-star 3s linear infinite;
}
\`\`\`

### Content
- **Event Data**: Update events array in `app/events/page.tsx`
- **About Content**: Modify content in `app/about/page.tsx`
- **Contact Info**: Update contact details in `app/contact/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy automatically with zero configuration

### Other Platforms
\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components
\`\`\`bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]
\`\`\`

## 🐛 Troubleshooting

### Common Issues

**Animations not working?**
- Ensure `app/globals.css` includes the shooting star animations
- Check that Tailwind CSS is properly configured

**Build errors?**
- Make sure all required components are installed
- Verify TypeScript types are correct

**Mobile navigation issues?**
- Clear browser cache
- Test on different devices/browsers

### Performance Tips
- Images are optimized with Next.js Image component
- Animations use CSS transforms for better performance
- Components are tree-shaken automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure mobile responsiveness
- Test animations across browsers
- Maintain accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform



<div align="center">
  <strong>Built with ❤️ for ExcelMEC 2025</strong>
  <br>
  <em>Where Innovation Meets Excellence</em>
</div>
