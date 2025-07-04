# `lib/gsap-animation.ts`

## IntroAnimationRefs

**Purpose:** TypeScript interface for intro animation element references.

**Properties:**

- `logo` (HTMLElement | null, optional) - Logo element reference
- `tagLine` (HTMLElement | null, optional) - Tag line element reference
- `name` (HTMLElement | null, optional) - Name element reference
- `desc` (HTMLElement | null, optional) - Description element reference
- `cloud` (HTMLElement | null, optional) - Cloud element reference
- `intro` (HTMLElement | null, optional) - Intro container element reference

**Usage:**

```tsx
const refs: IntroAnimationRefs = {
  logo: logoRef.current,
  tagLine: tagLineRef.current,
  name: nameRef.current,
};
```

---

## gsapAnimations.intro

**Purpose:** Orchestrates a complex intro animation sequence with multiple elements.

**Parameters:**

- `refs` (IntroAnimationRefs) - Object containing element references to animate

**Returns:** GSAP timeline object

**Usage:**

```tsx
import { gsapAnimations } from "@/lib/gsap-animation";

const timeline = gsapAnimations.intro({
  logo: logoRef.current,
  tagLine: tagLineRef.current,
  name: nameRef.current,
  desc: descRef.current,
});
```

---

## gsapAnimations.fadeIn

**Purpose:** Fades in a single element with optional delay and Y offset.

**Parameters:**

- `el` (HTMLElement | null | undefined) - Element to animate
- `delay` (number, optional) - Delay in seconds. Defaults to 0
- `y` (number, optional) - Starting Y offset. Defaults to 50

**Returns:** Void

**Usage:**

```tsx
import { gsapAnimations } from "@/lib/gsap-animation";

gsapAnimations.fadeIn(elementRef.current);
gsapAnimations.fadeIn(elementRef.current, 0.5, 100);
```

---

## gsapAnimations.staggerFadeIn

**Purpose:** Animates multiple elements with staggered fade-in effect.

**Parameters:**

- `elements` (Array<HTMLElement | null | undefined> | null) - Array of elements to animate
- `stagger` (number, optional) - Stagger duration in seconds. Defaults to 0.2

**Returns:** Void

**Usage:**

```tsx
import { gsapAnimations } from "@/lib/gsap-animation";

const elements = [ref1.current, ref2.current, ref3.current];
gsapAnimations.staggerFadeIn(elements);
gsapAnimations.staggerFadeIn(elements, 0.3);
```

**Notes:**

- Client-side only (uses "use client" directive)
- Automatically handles null/undefined element references
- Kills existing animations before starting new ones
- Uses power2.out easing for smooth animations
- Intro animation includes complex timeline with background positioning
- All animations are optimized for performance and accessibility
