---
'@redotlabs/ui': minor
---

Select: migrate to Radix UI primitives while keeping the design-system look. The trigger and items now render the `Button` component via Radix `asChild`, `size` (sm/md/lg) propagates from `<Select size>` through context, and dropdown size tokens are sourced from a single place in `select.variants.ts`. Adds `SelectGroup`, `SelectLabel`, `SelectSeparator`, `SelectScrollUpButton`, and `SelectScrollDownButton` exports.
