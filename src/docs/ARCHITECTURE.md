# MoE Project Architecture

## Overview

This document outlines the architecture of the Portfolio project, a Next.js application with TypeScript, featuring a modular component structure and comprehensive styling system.

## Project Structure

### Root Directory

```
├── .github/workflows/     # CI/CD pipeline configurations
├── .next/                # Next.js build output
├── .vercel/              # Vercel deployment configuration
├── node_modules/         # Dependencies
├── public/               # Static assets
├── src/                  # Source code
├── styles/               # Global styles
├── types/                # TypeScript type definitions
└── Configuration files
```

## Core Architecture Components

### 1. Source Code Structure (`src/`)

#### Application Layer (`src/app/`)

- **Purpose**: Next.js App Router structure
- **Components**:
  - `about/` - About page route
  - `contact/` - Contact page route
  - `projects/` - Projects page route with dynamic routing
    - `[slug]/` - Dynamic project pages
      - `loading.tsx` - Loading UI for project pages
      - `not-found.tsx` - 404 page for invalid projects
      - `page.tsx` - Individual project page component
    - `loading.tsx` - Loading UI for projects listing
  - `favicon.ico` - Portfolio favicon
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component

#### Component Architecture (`src/components/`)

The component system follows a hierarchical structure:

##### Layout Components (`src/components/layout/`)

- **Purpose**: Structural components for page layout
- **Responsibility**: Handles page structure, navigation, and common UI elements

##### Shared Components (`src/components/shared/`)

- **Purpose**: Reusable components across the application
- **Responsibility**: Common functionality and UI patterns

##### UI Components (`src/components/ui/`)

- **Purpose**: Atomic design system components **exclusively using [shadcn/ui](https://ui.shadcn.com/)**.

- **Note**: This folder is **reserved for shadcn components only**. Custom or non-shadcn components should be placed in `src/components/` or other appropriate directories.
- **Components**:
  - `Badge.tsx` - Badge/tag components
  - `Breadcrumb.tsx` - Navigation breadcrumbs
  - `Button.tsx` - Button variants and states
  - `Card.tsx` - Card container components
  - `Carousel.tsx` - Image/content carousel
  - `Input.tsx` - Form input components
  - `Textarea.tsx` - Multi-line text input

### 2. Documentation (`src/docs/`)

- **ARCHITECTURE.md** - This documentation file. Core documentation.
- **Purpose**: Project documentation and architectural decisions
- Detailed documentation of each files can be found in their respective subfolders within this directory.
- **Note:** Documentation markdown files (.md) will use kebab-case naming, converting any camelCase filenames to kebab-case for consistency.

### 3. Utilities (`src/hooks/` & `src/lib/`)

#### Custom Hooks (`src/hooks/`)

- `useBodyBackground.ts` - Body background management
- `useRoughNotation.ts` - Rough notation animations
- **Purpose**: Reusable React hooks for common functionality

#### Utility Library (`src/lib/`)

- `api.ts` - API utility functions
- `fonts.ts` - Font loading and management
- `gsap-animation.ts` - GSAP animation utilities
- **Purpose**: Pure functions and utility classes

## Type System (`types/`)

### TypeScript Definitions

- `experience.ts` - Work experience data types
- `metadata.ts` - Page metadata types
- `page.ts` - Page-specific types
- `project.ts` - Project data types

**Purpose**: Centralized type definitions for type safety and consistency

## Styling Architecture (`styles/`)

### Global Styles

- `globals.css` - Global CSS variables and base styles
- `main.css` - Main application styles
- `medias.css` - Media queries and responsive design

**Architecture Pattern**: CSS-in-CSS with utility classes and component-specific styles

## Configuration Layer

### Development & Build Configuration

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Component library configuration
- `package.json` - Project dependencies and scripts
- `postcss.config.mjs` - PostCSS configuration

### Code Quality

- `.eslintrc.js` - ESLint configuration
- `.prettierrc` - Prettier formatting rules
- `.gitignore` - Git ignore patterns

### Deployment

- `.env.local` - Environment variables
- `.releasercjson` - Release configuration
- `package-lock.json` - Dependency lock file

## Data Flow Architecture

### 1. Page-Level Data Flow

```
Route → Page Component → Layout → UI Components
```

#### Dynamic Route Handling

```
/projects → Projects List Page
/projects/[slug] → Individual Project Page
```

- **Loading States**: Implemented at both list and detail levels
- **Error Handling**: Custom 404 pages for invalid project slugs
- **Data Fetching**: Project data resolved based on slug parameter

### 2. Component Communication

- **Props**: Parent-to-child data flow
- **Custom Hooks**: Shared state and logic
- **Context**: Global state management (implied by layout structure)

### 3. Asset Management

```
public/ → Static Assets → Components
```

## Key Architectural Patterns

### 1. Atomic Design System

- **Atoms**: Basic UI components (`Button`, `Input`, `Badge`)
- **Molecules**: Composed components (`Card`, `Breadcrumb`)
- **Organisms**: Complex components (`Carousel`, layout components)
- **Templates**: Layout components
- **Pages**: Route-level components

### 2. Separation of Concerns

- **Presentation**: UI components and styling
- **Logic**: Custom hooks and utilities
- **Data**: Type definitions and API utilities
- **Configuration**: Build and deployment settings

### 3. Modular Architecture

- **Feature-based organization**: Each major feature has its own route
- **Reusable components**: Shared UI library
- **Utility functions**: Centralized helper functions

## Technology Stack

### Core Technologies

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: CSS with PostCSS
- **Animation**: GSAP, Rough Notation
- **Deployment**: Vercel

### Development Tools

- **Linting**: ESLint
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions
- **Package Management**: npm

## Performance Considerations

### 1. Next.js Optimizations

- App Router for improved performance
- Dynamic routing with `[slug]` parameters
- Loading UI components for better UX during data fetching
- Custom error boundaries and 404 pages
- Static asset optimization
- Built-in image optimization (implied by public folder structure)

### 2. Code Splitting

- Route-based code splitting
- Component-level lazy loading potential

### 3. Asset Management

- Static assets in public folder
- Font optimization through lib/fonts.ts

## Development Workflow

### 1. Component Development

```
Create component → Add to ui/ → Export from shared/ → Use in pages/
```

### 2. Feature Development

```
Create route → Add page component → Implement UI → Add types → Style
```

#### Dynamic Route Development

```
Create [slug] folder → Add page.tsx → Implement loading.tsx → Add not-found.tsx → Connect to project data
```

### 3. Deployment Pipeline

```
Code → GitHub → CI/CD → Vercel
```

## Future Scalability

### 1. Component Library

- Expandable UI component system
- Consistent design patterns
- Reusable across projects

### 2. Type Safety

- Comprehensive TypeScript coverage
- Centralized type definitions
- API contract enforcement

### 3. Performance

- Bundle optimization
- Code splitting strategies
- Progressive enhancement

## Maintenance Guidelines

### 1. Code Organization

- Keep components small and focused
- Use TypeScript for all new code
- Follow existing naming conventions

### 2. Documentation

- Update this architecture doc for major changes
- Document complex components
- **Note:** Detailed documentation of each files can be found in their respective subfolders within this directory.

### 3. Testing Strategy

- Component testing (framework to be implemented)
- Type checking with TypeScript
- Build validation through CI/CD

---

_This architecture documentation should be updated as the project evolves and new patterns emerge._
