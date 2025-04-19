### Features and Setup Guide

This portfolio website is a modern, responsive web application designed to showcase your development projects and professional services. Let me walk you through its features, the technologies used, and how to run the code.

## Features

### 1. Responsive Design

- Fully responsive layout that works seamlessly across mobile, tablet, and desktop devices
- Adaptive navigation that transforms into a hamburger menu on smaller screens


### 2. Interactive UI Elements

- Animated navigation with hover effects and active state indicators
- Smooth scroll animations and page transitions using Framer Motion
- Interactive project cards with hover effects
- Animated section reveals as you scroll down the page


### 3. Multiple Pages

- **Home Page**: Features a hero section, project showcase, services offered, and a call-to-action
- **Projects Page**: Displays a grid of your portfolio projects with details and links
- **About Page**: Presents your personal story, values, and skills with visual progress bars
- **Contact Page**: Includes a contact form, personal information, and an embedded Google Map


### 4. Project Showcase

- Displays featured projects with images, descriptions, and links
- Each project card has a consistent design with hover animations
- Projects include: Weathery, Catan Coffee, Albumoto, Wonder Game, and Data Tracker


### 5. Services Section

- Highlights your key services with icons and descriptions
- Services include: Web Development, Responsive Design, Performance Optimization, and API Integration


### 6. Contact Form

- Functional contact form with input validation
- Contact information display with icons


### 7. About Section

- Personal introduction and story
- Skills visualization with progress bars
- Core values presentation with icons


## Technologies Used

### Frontend Framework

- **Next.js 13+**: React framework with App Router for file-based routing and server components


### UI and Styling

- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library
- **shadcn/ui**: Component library built on Radix UI


### Development Tools

- **TypeScript**: For type safety and better developer experience
- **ESLint**: For code linting and maintaining code quality


## How to Run the Code

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager


### Local Development

1. **Clone the repository**

```shellscript
git clone <repository-url>
cd portfolio-site
```


2. **Install dependencies**

```shellscript
npm install
# or
yarn install
```


3. **Run the development server**

```shellscript
npm run dev
# or
yarn dev
```


4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website


### Building for Production

1. **Create a production build**

```shellscript
npm run build
# or
yarn build
```


2. **Start the production server**

```shellscript
npm run start
# or
yarn start
```




## Deployment on Vercel

The easiest way to deploy this website is using Vercel, the platform created by the makers of Next.js:

1. **Create a Vercel account** at [vercel.com](https://vercel.com) if you don't have one
2. **Install Vercel CLI** (optional)

```shellscript
npm install -g vercel
```


3. **Deploy using Vercel CLI**

```shellscript
vercel
```

Or simply connect your GitHub repository to Vercel for automatic deployments.


4. **Environment Variables**

1. No environment variables are required for this project





## Customization

### Updating Projects

- Edit the `projects` array in `app/page.tsx` and `app/projects/page.tsx` to add or modify your projects


### Changing Colors

- The primary color scheme uses green (`#4ade80`) and navy blue (`#1a3b5d`)
- You can modify these colors in `tailwind.config.ts` under the `theme.extend.colors` section


### Adding New Pages

- Create new files in the `app` directory following Next.js App Router conventions
- Update the navigation links in `components/animated-navbar.tsx`


### Updating Personal Information

- Edit the contact information in `app/contact/page.tsx`
- Update your personal story and skills in `app/about/page.tsx`


## File Structure

- `app/`: Contains all page components and layouts
- `components/`: Reusable UI components
- `public/`: Static assets like images
- `lib/`: Utility functions
