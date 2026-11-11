# Apna Mobile Care – Business Website

A fast, responsive, static website for **Apna Mobile Care**, a mobile repairing shop and accessories store.
Tagline: *"Your Mobile, Our Responsibility."*

Built with plain **HTML5, CSS3 and vanilla JavaScript**. There is no framework, backend, database, login or booking system.

## Features

- Sticky navigation with a hamburger menu on mobile and a "Call Now" button
- Hero section, About Us, Products (9 categories), Repair Services (12 services)
- Highlighted **Doorstep Pickup & Drop** section (service area: within 8–12 km) with a WhatsApp button
- Our Work gallery with a lightbox
- Why Choose Us, customer testimonials (placeholders), Contact section and footer
- Smooth scrolling, active menu link, back-to-top button and scroll animations
- Local SEO: semantic HTML, meta description, keywords, alt/aria labels and LocalBusiness structured data

## Project Structure

```
apna-mobile-care/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/     (dummy .jpg images – replace with real photos)
    ├── icons/
    └── logo/
```

## Run Locally

1. Open the `apna-mobile-care` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

You can also double-click `index.html` to open it in a browser.
An internet connection is needed for Google Fonts and Font Awesome icons.

## What to Edit

All editable spots are marked with `EDIT` comments in `index.html`.

| What | Where in `index.html` |
|---|---|
| Phone number | Every `tel:+91XXXXXXXXXX` link (nav, contact) and the structured data in `<head>` |
| WhatsApp number | Every `https://wa.me/91XXXXXXXXXX` link (use country code + number, no `+` or spaces) |
| Address, phone and opening hours text | Contact section and footer |
| Google Maps | Replace the `<div class="map">` placeholder with your embed iframe (see below) |
| Directions link | The "Get Directions" button's `href` |
| Testimonials | The three `<blockquote class="tm">` blocks |
| Social media links | Footer `.soc` links (replace `#`) |
| City / business details for SEO | The JSON-LD block in `<head>` |

### Adding the Google Maps embed

In Google Maps, choose **Share → Embed a map**, copy the `src` URL and use:

```html
<div class="map">
  <iframe src="YOUR_MAP_EMBED_URL" loading="lazy" allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
```

## Replacing Images

Dummy images are in `assets/images/`. To use your own photos, save them with the **same file names**. No code changes are needed.

| File | Used for |
|---|---|
| `hero.jpg` | Hero background |
| `about.jpg` | About section (shop or technician) |
| `covers.jpg`, `earphones.jpg`, `earbuds.jpg`, `chargers.jpg`, `cables.jpg`, `glass.jpg`, `batteries.jpg`, `displays.jpg`, `components.jpg` | Product cards |
| `pickup.jpg` | Pickup & Drop section |
| `work-repair.jpg`, `work-board.jpg`, `work-cpu.jpg`, `work-display.jpg`, `work-acc.jpg`, `work-shop.jpg` | Our Work gallery |

Tips: use JPG or WebP, keep each image under about 300 KB, and use about 1600 px wide for the hero and about 800 px wide for the rest.

## Theme Colors

Change these in `css/style.css` under `:root`:

| Variable | Color | Use |
|---|---|---|
| `--g1` | `#2E7D32` | Primary dark green |
| `--g2` | `#4CAF50` | Secondary green |
| `--tx` | `#212121` | Text |
| `--alt` | `#f4f6f4` | Alternate section background |

## Deploying

Because the site is fully static, you can upload the whole folder to any host:

- **Your domain host (e.g. GoDaddy hosting):** upload the folder contents to `public_html` using File Manager or FTP, with `index.html` at the top level.
- **Free options:** Netlify, GitHub Pages or Cloudflare Pages.

After going live, add your shop to **Google Business Profile** for local search visibility.

## Troubleshooting

- **Page looks unstyled:** check that `css/style.css` and `js/script.js` are in their folders, and that your browser is opening the project folder you meant to.
- **Layout looks stale after edits:** hard refresh with `Ctrl + Shift + R`.
- **Icons missing:** you are offline or the Font Awesome CDN is blocked.

## License

Created for Apna Mobile Care. Edit and use it freely for the business.
