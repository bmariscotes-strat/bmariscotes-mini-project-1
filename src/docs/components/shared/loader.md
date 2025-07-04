# Loader

**File:** `components/shared/Loader.tsx`

**Purpose:** Full-screen loading component that shows during route transitions with smooth fade animations.

**Parameters:** None

**Returns:** React component displaying animated loading screen or null

**Usage:**

```tsx
import Loader from "@/components/Loader";

function Layout() {
  return (
    <>
      <Loader />
      <main>Your content</main>
    </>
  );
}
```

**Notes:**

- Client-side only (uses "use client" directive)
- Automatically triggers on pathname or search params changes
- Shows for 500ms then fades out over 300ms
- Uses fixed positioning with z-index 9999 for full overlay
- Features centered logo with spinning border animation
- Logo image: `/brand/logo-w.png` (64x64px, priority loading)
- Background uses `bg-primary` Tailwind class
- Smooth opacity transitions for better UX
- Returns null when not loading to avoid unnecessary renders
