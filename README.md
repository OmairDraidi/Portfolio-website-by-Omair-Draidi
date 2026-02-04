# Omair Draidi - Portfolio

Modern, responsive portfolio website showcasing projects, skills, and experience.

## 🌟 Features

- ⚡ Modern UI/UX with smooth animations (Framer Motion)
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Custom cursor and scroll progress bar
- 🎉 Interactive elements with confetti effects
- 📬 Contact form with backend integration
- 🎯 SEO optimized

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Animations:** Framer Motion
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **Build Tool:** Vite
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React, React Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/OmairDraidi/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration and deploy

## 📝 License

© 2026 Omair Draidi. All rights reserved.

## 📧 Contact

- Email: omayrd8@gmail.com
- LinkedIn: [Omair Draidi](https://www.linkedin.com/in/omair-draidi-075189235/)
- GitHub: [OmairDraidi](https://github.com/OmairDraidi)

---

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state, React Context for theme management
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (compiled via tsx for development, esbuild for production)
- **API Design**: RESTful endpoints under `/api` prefix
- **Development Server**: Vite dev server with HMR, proxied through Express

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Abstraction**: IStorage interface in `server/storage.ts` allows swapping implementations (currently MemStorage for development)

### Build System
- **Frontend Build**: Vite with React plugin, outputs to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.cjs`
- **Production**: Single Node.js process serves both API and static files

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   └── sections/ # Page sections (hero, about, etc.)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and data
│   │   └── pages/        # Route components
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migrations (Drizzle Kit)
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets/*` → `./attached_assets/*`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Drizzle Kit**: Schema migrations via `npm run db:push`

### UI Framework
- **Radix UI**: Headless component primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-built component library using Radix + Tailwind

### Key Runtime Dependencies
- **express**: Web server framework
- **drizzle-orm**: TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **zod**: Runtime type validation
- **react-hook-form**: Form state management

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Backend bundler for production
- **TypeScript**: Type checking across the codebase
- **Tailwind CSS**: Utility-first CSS framework