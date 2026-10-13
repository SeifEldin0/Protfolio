## 2025-05-18 - Mobile Navigation Dialog Accessibility
**Learning:** Adding `role="dialog"` and `aria-modal="true"` to a mobile overlay component that stays in the DOM when closed (using CSS opacity/pointer-events transitions) exposes inactive modal dialogs to screen readers unless `aria-hidden={!isOpen}` is explicitly set on the overlay container.
**Action:** Always pair transition-based hidden overlays with `aria-hidden={!isOpen}` or conditional rendering to prevent assistive technologies from reading closed dialog contents.

## 2025-05-19 - ARIA Tablist Keyboard Focus Management in React
**Learning:** Updating state in response to arrow key navigation in a WAI-ARIA tablist component updates roving `tabIndex` but leaves DOM focus on the unselected button element (now `tabIndex="-1"`).
**Action:** Always explicitly move DOM focus (`element.focus()`) to the newly active tab when handling keyboard arrow key events in tablists to preserve valid keyboard navigation.
