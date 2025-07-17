# UI Components

This directory contains shadcn/ui components that have been added to the project. These components are built on top of Radix UI primitives and styled with Tailwind CSS.

## Available Components

### Button

A versatile button component with multiple variants and sizes.

**Location:** `src/components/ui/button.tsx`

**Exports:**
- `Button` - The main button component
- `buttonVariants` - Variant function for custom styling

**Variants:**
- `default` - Standard button with shadow and hover effects
- `noShadow` - Button without shadow effects
- `neutral` - Secondary background with shadow effects
- `reverse` - Reverse shadow direction on hover

**Sizes:**
- `default` - Standard size (h-10 px-4 py-2)
- `sm` - Small size (h-9 px-3)
- `lg` - Large size (h-11 px-8)
- `icon` - Square icon button (size-10)

**Usage:**
```tsx
import { Button } from '@/components/ui';

<Button variant="default" size="default">
  Click me
</Button>
```

### Card

A flexible card component with multiple sub-components for structured content.

**Location:** `src/components/ui/card.tsx`

**Exports:**
- `Card` - Main card container
- `CardHeader` - Card header section
- `CardTitle` - Card title component
- `CardDescription` - Card description component
- `CardContent` - Card content section
- `CardFooter` - Card footer section
- `CardAction` - Action area in card header

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

## Adding New Components

When adding new shadcn/ui components:

1. Install the component using the shadcn CLI:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. Update this README with:
   - Component description
   - Available exports
   - Variants/sizes (if applicable)
   - Usage example

3. Update the `src/components/ui/index.ts` file to export the new component

## Dependencies

These components rely on:
- **Radix UI** - For accessible primitives
- **Tailwind CSS** - For styling
- **class-variance-authority** - For variant management
- **clsx/tailwind-merge** - For class name utilities

## Styling

All components use the project's custom Tailwind theme defined in `tailwind.config.js`. The components follow the design system with:
- Custom color palette (main, secondary, background, etc.)
- Consistent spacing and typography
- Custom border radius (`rounded-base`)
- Shadow system with hover effects
