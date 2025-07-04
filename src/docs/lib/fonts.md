# karla

**File:** `lib/fonts.ts`

**Purpose:** Configures Karla Google Font with multiple weights and styles.

**Parameters:** None (configured with Next.js font options)

**Returns:** Next.js font object with CSS variable `--font-karla`

**Usage:**

```tsx
import { karla } from '@/lib/fonts';

// In component
<div className={karla.className}>Text with Karla font</div>

// Or use CSS variable
<div className="font-karla">Text with Karla font</div>
```

---

# kottaOne

**File:** `lib/fonts.ts`

**Purpose:** Configures Kotta One Google Font for decorative text.

**Parameters:** None (configured with Next.js font options)

**Returns:** Next.js font object with CSS variable `--font-kotta-one`

**Usage:**

```tsx
import { kottaOne } from '@/lib/fonts';

// In component
<h1 className={kottaOne.className}>Decorative heading</h1>

// Or use CSS variable
<h1 className="font-kotta-one">Decorative heading</h1>
```

---

# stangith

**File:** `lib/fonts.ts`

**Purpose:** Configures local Stangith font from public/fonts directory.

**Parameters:** None (configured with Next.js localFont options)

**Returns:** Next.js font object with CSS variable `--font-stangith`

**Usage:**

```tsx
import { stangith } from '@/lib/fonts';

// In component
<div className={stangith.className}>Text with Stangith font</div>

// Or use CSS variable
<div className="font-stangith">Text with Stangith font</div>
```

**Notes:**

- Karla: Sans-serif font with 8 weights (200-800) and italic variants
- Kotta One: Decorative serif font for headings and emphasis
- Stangith: Custom local font with serif fallback
- All fonts use `display: "swap"` for better performance
- CSS variables can be used in Tailwind config for global font classes
