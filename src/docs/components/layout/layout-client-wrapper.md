# LayoutClientWrapper

**File:** `components/layout/LayoutClientWrapper.tsx`

**Purpose:** Client-side wrapper component that conditionally renders a loader based on the current route.

**Parameters:**

- `children` (ReactNode) - The child components to render

**Returns:** React component that wraps children with conditional loader

**Usage:**

```tsx
<LayoutClientWrapper>
  <YourPageContent />
</LayoutClientWrapper>
```

**Notes:**

- Uses Next.js `usePathname` hook to detect current route
- Excludes loader on routes starting with `/projects` or `/about` (slug routes)
- Wraps Loader component in Suspense with null fallback
- Must be a client component due to `usePathname` usage
- Renders children after conditional loader logic
