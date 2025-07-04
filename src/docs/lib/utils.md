# cn

**File:** `lib/utils.ts`

**Purpose:** Combines class names with clsx and merges Tailwind classes with tailwind-merge.

**Parameters:**

- `...inputs` (ClassValue[]) - Class values to combine (strings, conditionals, arrays, etc.)

**Returns:** Merged and deduplicated class string

**Usage:**

```typescript
const className = cn("text-lg", "font-bold", { "text-red-500": isError });
// Returns: "text-lg font-bold text-red-500" (if isError is true)
```

**Notes:**

- Uses `clsx` for conditional class handling
- Uses `tailwind-merge` to resolve conflicting Tailwind classes
- Commonly used in shadcn/ui components
