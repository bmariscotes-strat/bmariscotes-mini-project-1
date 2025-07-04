## useBodyBackground

**File:** `hooks/useBodyBackground.ts`

**Purpose:** Custom hook that adds a CSS class to the document body and removes it on component unmount.

**Parameters:**

- `className` (string) - The CSS class name to add to the body element

**Returns:** Void

**Usage:**

```tsx
import { useBodyBackground } from "@/hooks/useBodyBackground";

function MyComponent() {
  useBodyBackground("bg-dark-theme");

  return <div>Component content</div>;
}
```

**Notes:**

- Client-side only (uses "use client" directive)
- Automatically cleans up by removing the class when component unmounts
- Re-runs effect when className changes
- Useful for page-specific body styling (backgrounds, themes, etc.)
- Prevents memory leaks by properly removing classes on cleanup
