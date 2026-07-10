# @redotlabs/ui

## 1.10.0

### Minor Changes

- 22d72ba: Button에 `color` prop 추가. 기존 컴포넌트(Badge, Callout)와 동일한 시맨틱 색상 세트(`default | secondary | info | success | warning | danger`)를 지원하며, `contained | outlined | text` 모든 variant와 조합된다. 기본값은 `default`(primary)로 기존 동작과 동일하다.

## 1.9.0

### Minor Changes

- 40d6ea7: Select: migrate to Radix UI primitives while keeping the design-system look. The trigger and items now render the `Button` component via Radix `asChild`, `size` (sm/md/lg) propagates from `<Select size>` through context, and dropdown size tokens are sourced from a single place in `select.variants.ts`. Adds `SelectGroup`, `SelectLabel`, `SelectSeparator`, `SelectScrollUpButton`, and `SelectScrollDownButton` exports.

### Patch Changes

- 8ef815f: DatePicker: disable the calendar trigger button when `disabled` is set so the popover can no longer be opened in the disabled state.
- 696860e: Pagination: add `aria-current="page"` to the active page button so assistive technologies announce the current page.
- 8d2cda8: Textarea: remove the conflicting `bg-transparent` class so the intended `bg-white` background is no longer dropped by tailwind-merge.
- de31051: Remove the unused `framer-motion` dependency from the ui package — it is no longer imported by any component.

## 1.8.2

### Patch Changes

- chore: rebuild with patched build toolchain (vite, storybook, rollup, tar, handlebars 등 dev 의존성 보안 패치 적용 후 재빌드). 런타임 의존성 변경 없음.
- Updated dependencies
  - @redotlabs/themes@1.1.1
  - @redotlabs/tokens@1.0.2
  - @redotlabs/utils@1.0.1

## 1.8.1

### Patch Changes

- 5eb76d3: add asChild prop for button component

## 1.8.0

### Minor Changes

- f104065: add tabs component and add ButtonProps type
- 25ea1e8: add callout component

### Patch Changes

- f1a97c1: set default size variant for checkbox component

## 1.7.0

### Minor Changes

- 8c74bd8: add textarea component

### Patch Changes

- 59192de: fix for failed select test case
- f6b7ef3: fix document not found in toaster component when SSR

## 1.6.0

### Minor Changes

- 4aed1a3: add Table component with Pagination component

### Patch Changes

- 34f8204: remove input selection background color
- 33062a2: enable button cursor-not-allowd when button is disabled
- d320949: add datepicker component with calendar, popover component

## 1.5.0

### Minor Changes

- fc6f2d9: add checkbox, radio component

## 1.4.1

### Patch Changes

- 30b255d: fix logo component import error

## 1.4.0

### Minor Changes

- 54ca1f6: enhancement logo component

## 1.3.0

### Minor Changes

- 29fa40f: Add Select component

## 1.2.0

### Minor Changes

- ee3aaa1: Add logo component
