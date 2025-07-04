# `technology-badge.tsx`

## TechnologyBadge

**Purpose:** Renders a badge with technology name and icon using react-icons.

**Parameters:**

- `technology` (string) - The technology name (must match TECH_ICONS keys)
- `size` (string, optional) - Badge size: "sm", "md", "lg". Defaults to "md"
- `showIcon` (boolean, optional) - Whether to show the icon. Defaults to true
- `className` (string, optional) - Additional CSS classes

**Returns:** React component displaying technology badge

**Usage:**

```tsx
<TechnologyBadge technology="React" />
<TechnologyBadge technology="Next.js" size="lg" />
<TechnologyBadge technology="TypeScript" showIcon={false} />
```

---

## TechnologiesList

**Purpose:** Renders a list of technology badges in a flex container.

**Parameters:**

- `technologies` (string[]) - Array of technology names
- `size` (string, optional) - Badge size for all badges. Defaults to "md"
- `showIcon` (boolean, optional) - Whether to show icons on all badges. Defaults to true
- `className` (string, optional) - Container CSS classes. Defaults to "flex flex-wrap gap-2"

**Returns:** React component displaying multiple technology badges

**Usage:**

```tsx
<TechnologiesList technologies={["React", "Next.js", "TypeScript"]} />
<TechnologiesList technologies={["Python", "Flask"]} size="sm" />
```

---

## getTechIcon

**Purpose:** Retrieves icon configuration for a specific technology.

**Parameters:**

- `techName` (string) - The technology name

**Returns:** TechConfig object or null if not found

**Usage:**

```tsx
const reactConfig = getTechIcon("React");
// Returns: { icon: SiReact, color: "#61DAFB" }
```

---

## getAllTechNames

**File:** `components/shared/technology-badge.tsx`

**Purpose:** Gets all available technology names.

**Parameters:** None

**Returns:** Array of all technology names

**Usage:**

```tsx
const allTechs = getAllTechNames();
// Returns: ["React", "Next.js", "Vue.js", ...]
```

**Notes:**

- Supports 27+ technologies with icons and colors
- Uses react-icons/si for consistent iconography
- Technologies without icons display as text-only badges
- Includes hover effects and responsive sizing
- Components can be used directly or helper functions for custom implementations
