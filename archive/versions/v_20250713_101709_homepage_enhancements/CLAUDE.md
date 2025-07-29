# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FoundersFleet is a comprehensive founder support platform that provides structured guidance, community, and tools for early-stage entrepreneurs. The application helps founders navigate their startup journey with missions, progress tracking, community events, and essential business tools.

## Architecture

This is a **Next.js 15** application with TypeScript, using modern React patterns and a comprehensive UI component library. The project is structured as follows:

### Main Application Structure

- **foundersfleet-app/**: Primary Next.js application
  - **app/**: App Router pages and layouts (Next.js 13+ structure)
  - **components/**: React components organized by feature
  - **lib/**: Utility functions and configuration
  - **hooks/**: Custom React hooks
  - **public/**: Static assets

### Key Pages

**Core Application Pages:**
- `/` - Control Dashboard (main dashboard)
- `/flightplan` - Founder journey roadmap
- `/missions` - Structured founder challenges
- `/dispatch` - Public founder profile
- `/drops` - Social feed for founder updates
- `/signals` - Market trend monitoring
- `/hangar` - Community hub and events
- `/terminal` - Demo environment and deployment
- `/vault` - File and document management

**Settings Pages:**
- `/settings` - Settings hub with profile as default
- `/settings/[section]` - Dynamic settings sections (profile, account, billing, security, notifications, workspace, integrations, privacy)

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React + emoji system
- **Forms**: React Hook Form with Zod validation
- **State Management**: React useState/useContext
- **Fonts**: Inter (Google Fonts)

### Design System

**Color Scheme**: 
- **Dark Theme**: Black to gray-900 gradient background
- **Primary**: Blue-600 (#3b82f6)
- **Secondary**: Gray-800 cards with gray-700 borders
- **Text**: White primary, gray-400 secondary
- **Accents**: Various colors for status indicators

**Component Patterns**:
- Cards with rounded-2xl borders
- Gradient backgrounds for premium features
- Hover states with scale and color transitions
- Mobile-first responsive design

## Common Development Tasks

### Development Commands
```bash
cd foundersfleet-app
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linting
```

### Adding New Features
1. Create component in `components/` directory
2. Add page in `app/` directory if needed
3. Update navigation in `components/sidebar.tsx`
4. Add to product tracker for tracking

### Component Development
- Use TypeScript interfaces for props
- Follow shadcn/ui patterns for consistency
- Use Tailwind for styling
- Implement proper mobile responsiveness

## Key Features Implemented

### Core Platform Features
- **Control Dashboard**: Metrics, KPIs, and platform overview
- **Flightplan**: Founder journey tracking with stages
- **Missions**: Structured challenges and progress tracking
- **Dispatch**: Public founder profile management
- **Drops**: Social feed for milestone sharing
- **Signals**: Market trend monitoring and analysis
- **Hangar**: Community events and expert advisors
- **Terminal**: Demo environment and deployment tools
- **Vault**: File management and cloud integrations

### Settings & Management
- **Profile Management**: Complete profile editing with photo upload
- **Account Settings**: Security, verification, data export
- **Billing System**: Subscription management and payment methods
- **Notification Preferences**: Granular notification controls
- **Workspace Management**: Multi-workspace support

## File Structure Notes

### Component Organization
```
components/
├── ui/              # shadcn/ui base components
├── [feature]-content.tsx  # Page-specific content components
├── sidebar.tsx      # Main navigation
├── mobile-menu-button.tsx
└── theme-provider.tsx
```

### Page Structure
```
app/
├── layout.tsx       # Root layout
├── page.tsx         # Dashboard home
├── [feature]/
│   └── page.tsx     # Feature pages
└── settings/
    ├── page.tsx     # Settings hub
    └── [section]/
        └── page.tsx # Dynamic settings sections
```

## Development Workflow

1. **Feature Development**: 
   - Create/update components in `components/`
   - Add pages in `app/` directory
   - Update navigation and routing as needed

2. **Product Tracking**: 
   - Use the product tracker (`product/docs/index.html`) to manage features and stories
   - Update story status as features are implemented

3. **Version Control**:
   - Use git for version control and collaboration
   - Create feature branches for significant changes

4. **Testing**:
   - Test responsive design on mobile and desktop
   - Verify TypeScript compilation
   - Check accessibility and user experience

## Current Implementation Status

✅ **Completed Features:**
- All core pages and navigation
- Complete settings system with 8 sections
- Responsive design and mobile support
- TypeScript setup and component structure
- Modern UI with shadcn/ui components

🚧 **Next Development Priorities:**
- Authentication system integration
- Real-time data connections
- Mission progress tracking
- File upload functionality
- Social engagement features

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.