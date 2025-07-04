# createPageMetadata

**File:** `lib/metadata.ts`

**Purpose:** Creates standardized metadata objects for Next.js pages.

**Parameters:**

- `title` (string) - The page title
- `description` (string) - The page description
- `siteName` (string, optional) - Site name, defaults to "Biella | Portfolio"

**Returns:** Next.js `Metadata` object with formatted title and description

**Usage:**

```typescript
const metadata = createPageMetadata("Home", "Welcome to our homepage");
// Returns: { title: "Home | Biella", description: "Welcome to our homepage" }
```

**Notes:**

- Title is automatically formatted as `${title} | ${siteName}`
- If description is empty, falls back to `${title} page`
