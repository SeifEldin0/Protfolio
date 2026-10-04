## 2025-05-18 - Mobile Navigation Dialog Accessibility
**Learning:** Adding `role="dialog"` and `aria-modal="true"` to a mobile overlay component that stays in the DOM when closed (using CSS opacity/pointer-events transitions) exposes inactive modal dialogs to screen readers unless `aria-hidden={!isOpen}` is explicitly set on the overlay container.
**Action:** Always pair transition-based hidden overlays with `aria-hidden={!isOpen}` or conditional rendering to prevent assistive technologies from reading closed dialog contents.
