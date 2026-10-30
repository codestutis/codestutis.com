# Halloween Lightning and Jumpscare

## Objective

Add a one-time Halloween easter egg that begins a few seconds after a page loads, turns the site into a flashlight-lit blackout, and triggers a dramatic scare after a randomized delay. It must work across routes, stay out of other seasonal themes, and avoid trapping visitors in a dark or moving interface.

## Assumptions

- The visitor gets five seconds to explore with the flashlight before a further randomized one-to-five-second wait ends in the scare.
- The sequence runs once per page load while the Halloween theme is active.
- The lightning crash is visual and tactile (screen shake); no sound plays without a user gesture because browsers restrict autoplay.
- The scare is unsettling and high contrast, with no graphic gore.

## Animation plan

| Phase | Timing | Visual and interaction |
|---|---:|---|
| Settle | 0–1.4 s | Let the normal Halloween page breathe. Start the timer only after the client has applied the Halloween theme. |
| Lightning | 1.4–2.12 s | Two cold white-blue strikes: a very short precursor flash, a dark gap, then a brighter jagged flash. Add a brief page jolt and a fading afterimage so the strike feels physical. |
| Blackout | 2.12–4.12 s | Hold the entire page at near-total black after the lightning to give the strike more breathing room. Keep scrolling and page navigation available. |
| Light flicker | 4.12–4.92 s | Flicker the beam on over the dark page, then leave the flashlight active. |
| Explore | 5 s | Track the pointer with a slightly eased beam so the visitor can look around anywhere. The rest of the page remains black. `Escape` restores the page. |
| Random wait | 1–5 s | Continue the flashlight exploration while a random delay counts down. The scare is not tied to pointer position, clicks, or a particular page element. |
| Jumpscare | ~2.0 s | Slam an original cracked porcelain phantom mask toward the viewer from the darkness, add a sharp white flash and two fast camera jolts, then snap the face away into black. Keep the flashlight mode active afterward so the visitor can keep exploring. |

The scare artwork should be a cracked porcelain phantom mask, custom to this site, readable in a fraction of a second, and composed for a transparent overlay. Keep the horror non-graphic: no blood, exposed flesh, wounds, or decay. Its animation should use transform and opacity where possible, with a restrained glitch/noise pass for an analog-horror feel. The face should fill much of the viewport during the lunge but remain contained on small screens.

## Project fit

- Theme orchestration belongs in `app/_components/seasonal-decorations.tsx`, which already applies `data-theme` from the root layout.
- Overlay, beam, shake, blackout, and scare keyframes belong in `app/globals.css`.
- Keep the visual isolated in one Halloween-only overlay component or its existing seasonal component; do not add a dependency.

## Accessibility and device behavior

- Honor `prefers-reduced-motion` by skipping the sequence entirely.
- Support mouse, pen, and touch pointer movement to aim the beam; the scare is timer-based on every device.
- `Escape` exits immediately. Do not automatically restore the page; keep flashlight mode for the rest of the session.
- Do not leave focus behind a permanently obscured page. Keep the overlay non-semantic and make its keyboard exit available while active.
- Prevent the flashlight cursor from being hidden outside the page and clear all listeners, timers, and animation state on unmount or theme change.

## Success criteria

- Only the Halloween theme starts the sequence, roughly three seconds after it becomes active.
- The sequence visibly moves through lightning, a 2-second blackout, and pointer-following flashlight in that order.
- The visitor can explore anywhere for five seconds after the flashlight appears; a one-to-five-second random delay then triggers one scare per load, regardless of pointer position.
- The scare plays once, then leaves the visitor in flashlight mode.
- Scrolling and navigation remain available while the effect is active; Escape restores the normal page and cursor.
- Reduced-motion users never enter the sequence; touch users can explore by moving their finger.
- Other themes and all routes continue rendering normally.
- `npm run lint`, `npm run build`, and manual browser checks pass for desktop, touch emulation, and reduced-motion mode.

## Commands and current test setup

- Lint: `npm run lint`
- Production build: `npm run build`
- Browser verification: run the app with `npm run dev` and inspect the sequence in a real browser.
- The package currently has no automated unit or browser-test script. Add focused automated coverage only if a suitable existing test setup is found during implementation; do not introduce a new dependency just for this easter egg.

## Boundaries

- Always: keep it Halloween-only, one-shot, escapable, keyboard operable, and respectful of reduced motion.
- Ask first: adding autoplay audio, explicit gore, or a user-facing toggle that changes the default experience.
- Never: trap the visitor in darkness, animate other seasonal themes, or start the sequence during server rendering.

## Open questions

- The scare is triggered by a randomized timer, never by a screen location.
- Keep the lightning silent; sound can be added later behind a deliberate user gesture.
