# BackgroundHalos Component

A React component that displays animated halos in the background with smooth color transitions and breathing animations.

## Features

- **Animated Halos**: Three positioned halos with smooth color transitions
- **Breathing Animation**: CSS-based breathing animation with complex timing
- **Color Interpolation**: Smooth color transitions using react-spring
- **Performance Optimized**: GPU-accelerated animations with proper layering
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Proper ARIA attributes and keyboard navigation support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes for the container |
| `breathingEnabled` | `boolean` | `false` | Enable breathing animation for halos |
| `gradientEnabled` | `boolean` | `false` | Enable color gradient transitions |

## Usage

```tsx
import { BackgroundHalos } from './BackgroundHalos';

// Static halos (no animation) - optimal for performance
<BackgroundHalos />

// With breathing animation only
<BackgroundHalos breathingEnabled={true} />

// With gradient transitions only
<BackgroundHalos gradientEnabled={true} />

// With both animations
<BackgroundHalos breathingEnabled={true} gradientEnabled={true} />
```

## Animation Details

### Breathing Animation
- **Duration**: 8 seconds per cycle
- **Easing**: `cubic-bezier(0.25,0.46,0.45,0.94)`
- **Pattern**: Complex scaling with pauses at different stages
- **Performance**: CSS-based for optimal performance

### Gradient Transitions
- **Duration**: 3 seconds per transition
- **Method**: Color interpolation using linear interpolation
- **Timing**: Random intervals between 5-10 seconds
- **Colors**: Unique random starting colors for each halo

## Performance Considerations

- **Animations disabled by default** to save resources
- **CSS animations preferred** over JavaScript for better performance
- **GPU acceleration** with proper CSS properties
- **Memoized components** to prevent unnecessary re-renders
- **Optimized color interpolation** for smooth transitions

## Technical Implementation

### Architecture
- **Modular Design**: Each functionality in separate files
- **Type Safety**: Full TypeScript support
- **Performance**: React.memo for component optimization
- **Layering**: Proper z-index and isolation for GPU acceleration

### Files Structure
```
BackgroundHalos/
├── BackgroundHalos.tsx      # Main component
├── Halo.tsx                 # Individual halo component
├── useGradientTransition.ts # Color transition hook
├── BackgroundHalos.module.css # Animation styles
├── constants.ts             # Position and configuration constants
├── types.ts                 # TypeScript type definitions
├── utils.ts                 # Utility functions
└── README.md               # This documentation
```

### Key Features
- **Unique Colors**: Each halo starts with a different random color
- **Smooth Transitions**: React-spring for interpolated color changes
- **GPU Optimization**: Hardware acceleration with proper CSS properties
- **Responsive Design**: Viewport-relative sizing
- **Accessibility**: Proper ARIA attributes and screen reader support

## Browser Support

- Modern browsers with CSS Grid and CSS Custom Properties support
- React 18+ with hooks support
- TypeScript 4.5+ for type safety

## Dependencies

- `@react-spring/web`: For smooth color interpolation
- `react`: For component lifecycle and hooks
- `typescript`: For type safety

## Customization

The component can be customized through:
- CSS custom properties for colors and timing
- Props for enabling/disabling specific animations
- CSS modules for styling overrides
- Configuration constants for positions and colors

## Best Practices

1. **Enable animations sparingly** - they consume CPU/GPU resources
2. **Use static mode by default** for better performance
3. **Test on mobile devices** to ensure smooth performance
4. **Consider user preferences** for reduced motion
5. **Monitor performance** in production environments 