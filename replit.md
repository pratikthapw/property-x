# PropertyX Protocol - Asset Tokenization Platform

## Overview

PropertyX Protocol is a blockchain-based platform built on the Stacks network that enables tokenization of real-world assets. The platform allows users to tokenize physical assets into APT (Asset Property Tokens) and provides various DeFi features including staking, governance, and asset trading. The system includes a comprehensive frontend for asset exploration, tokenization workflows, and wallet integration with Stacks blockchain.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Routing**: Likely using React Router (implied by the component structure)
- **TypeScript Support**: Full TypeScript configuration with path aliases for clean imports

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development Setup**: Integrated Vite middleware for hot module replacement in development
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Error Handling**: Centralized error handling middleware with structured error responses

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database hosting)
- **Schema Management**: Centralized schema definition in `shared/schema.ts` with Zod validation
- **Migrations**: Automated database migrations through Drizzle Kit

### Blockchain Integration
- **Network**: Stacks blockchain for Bitcoin-secured smart contracts
- **Wallet Integration**: Stacks Connect for wallet connectivity and transaction signing
- **Transaction Handling**: Custom utilities for Clarity smart contract interactions
- **Asset Indexing**: Custom indexer for querying tokenized assets and marketplace data

### Component Architecture
- **Design System**: shadcn/ui components with custom theming for crypto/blockchain aesthetic
- **Reusable Components**: Modular component structure with consistent styling patterns
- **Form Handling**: React Hook Form with Zod resolvers for type-safe form validation
- **Toast Notifications**: Centralized notification system for user feedback

### Key Features Implementation
- **Asset Tokenization**: Forms and workflows for converting real-world assets to blockchain tokens
- **Marketplace**: Asset discovery and trading interface with detailed asset information
- **Staking System**: PXT and APT token staking with various lock-up periods
- **Governance**: Voting mechanisms for token holders to participate in protocol decisions
- **Profile Management**: User dashboard for tracking owned assets and governance participation

### Security Considerations
- **Type Safety**: Full TypeScript implementation throughout the stack
- **Input Validation**: Zod schemas for runtime type checking and validation
- **Blockchain Security**: Leveraging Stacks/Bitcoin security model for asset backing
- **Environment Variables**: Proper configuration management for sensitive data

## External Dependencies

### Blockchain Services
- **Stacks Blockchain API**: For querying blockchain data and transaction information
- **Neon Database**: PostgreSQL hosting service for application data storage
- **Stacks Connect**: Wallet integration library for user authentication and transactions

### Development Tools
- **Vite**: Build tool and development server with HMR support
- **Drizzle Kit**: Database migration and schema management tools
- **ESBuild**: Fast JavaScript bundler for production builds

### UI/UX Libraries
- **Radix UI Primitives**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **React Hook Form**: Performance-focused form library with validation

### Utility Libraries
- **Axios**: HTTP client for API communications
- **clsx/tailwind-merge**: Utility for conditional CSS class composition
- **Embla Carousel**: Touch-friendly carousel component for asset galleries