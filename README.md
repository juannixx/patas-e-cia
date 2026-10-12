# Patas & Cia: Landing Page

🇧🇷 [Leia em português](./README.pt-BR.md)

Landing page for a fictional neighborhood pet shop, built with plain HTML, CSS and JavaScript as part of the Introduction to Front-End and Back-End Programming course (SCTEC / SENAI-SC).

## About the project

Patas & Cia is a fictional brand I created for this challenge: a neighborhood pet shop in Florianópolis offering grooming, vet appointments, pet boarding and a small store. I built the page as if it were for a real client, thinking about how someone would land on it from a phone or a computer and decide whether to book an appointment.

The business goal is simple: present the services, build trust through the numbers in the "About us" section and the customer testimonials, and lead visitors to the contact form or WhatsApp. That is why the two main calls to action in the hero and the floating WhatsApp button show up throughout the page, not only at the top.

The visual concept uses burnt orange and cream, with dark brown text instead of pure black, to feel warm and local rather than corporate. The fonts follow the same idea: Baloo 2 for headings (rounded and friendly) and Nunito for body text (clean and easy to read).

## Techniques used

- **Semantic HTML5:** `header`, `nav`, `main`, `section`, `footer`, `figure`/`figcaption`, `blockquote`, and a form with a `label` for every field
- **CSS Grid:** About section, animated stats, service cards and contact section
- **Flexbox:** header, hero and call-to-action buttons
- **`position: relative/absolute`:** layered hero image (background circle, photo and badge) controlled with `z-index`
- **`aspect-ratio`:** service card icons and the hero image container, so the layout does not distort across screen sizes
- **Vanilla JavaScript:** hamburger menu with `classList`, counters animated with `setInterval` and triggered on scroll via `getBoundingClientRect`, service cards rendered from an array of objects, a testimonial carousel with index wrapping, and form validation without regular expressions
- **Responsive design:** media queries at 768px and 1024px
- **Accessibility:** reviewed color contrast, `aria-label` on icon buttons, `aria-expanded` on the menu button and `aria-hidden` on decorative SVGs

## Running it

No build step or dependencies. Open `index.html` in any modern browser. Fonts are loaded from Google Fonts.

## Structure

```
patas-e-cia/
├── index.html
├── css/style.css
├── js/script.js
└── img/
```

Images in `img/` were generated with AI.
