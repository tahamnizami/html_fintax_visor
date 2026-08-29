# Build a Complete Responsive US Tax & Business Consulting Website

You are an expert frontend developer and UI/UX designer.

Build a complete, production-quality, responsive website for a **US Tax & Business Consulting company** using **HTML5, CSS3, and vanilla JavaScript**.

## IMPORTANT: FOLLOW THE SPECIFICATION FILE

There is a project specification file named:

`US_Tax_Business_Consulting_Website_Spec.md`

**Read this file first and use it as the primary source of truth for:**

- Website sitemap
- Pages
- Page sections
- Content
- Services
- Packages
- Blog
- FAQs
- CTAs
- Design direction
- SEO requirements
- Responsive requirements
- Component structure
- Content rules

Do not ignore or simplify the specification.

If the specification conflicts with your assumptions, follow the specification.

---

# 1. TECH STACK

Use:

- HTML5
- CSS3
- Vanilla JavaScript

Do NOT use:

- React
- Vue
- Angular
- Bootstrap
- Tailwind
- jQuery
- Any frontend framework

The goal is a clean, maintainable HTML/CSS/JS website.

Use semantic HTML5 elements:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

---

# 2. EXISTING BRAND ASSETS

The project contains the company's logo.

Use the existing logo rather than recreating it.

The logo colors are:

- Yellow: `#FBCD3C`
- White: `#FFFFFF`
- Dark Navy: `#1A2C3A`

If the logo file exists in the project, locate it and use it appropriately.

There is also a **US flag image** available.

You may use the US flag image where it improves the design, especially in:

- Hero section
- About section
- US business services section
- Decorative background elements

However:

**Do not overuse the US flag.**

This is a professional financial/business consultancy website, not a political or patriotic website.

The flag should be subtle and tasteful.

---

# 3. BRAND COLOR SYSTEM

Use the following color system throughout the website.

## Primary

Deep Navy:

`#1A2C3A`

Use for:

- Header
- Footer
- Hero backgrounds
- Dark sections
- Main headings
- Navigation
- Important UI elements

## Accent

Brand Yellow:

`#FBCD3C`

Use for:

- Primary CTA buttons
- Icons
- Highlights
- Small decorative elements
- Active states
- Important numbers
- Hover accents

Do NOT use yellow excessively.

## White

`#FFFFFF`

Use for:

- Main backgrounds
- Text on dark backgrounds
- Cards
- Navigation text
- Clean content areas

## Supporting Colors

Light background:

`#F7F8FA`

Borders:

`#E5E7EB`

Main text:

`#17212B`

Muted text:

`#64748B`

---

# 4. COLOR BALANCE

The website should approximately feel like:

- 50–60% white/light backgrounds
- 25–30% deep navy
- 5–10% yellow
- Remaining colors from neutral grays

The yellow is an accent, NOT the dominant website color.

The website should feel:

- Premium
- Trustworthy
- Professional
- Modern
- Clean
- Financial
- Approachable

---

# 5. DESIGN STYLE

Take inspiration from the reference websites mentioned in the specification, but DO NOT copy their:

- Layouts
- Branding
- Text
- Images
- Logos
- Exact UI

Create an original design.

The visual quality should be comparable to a modern professional financial consulting website.

Use:

- Large typography
- Strong visual hierarchy
- Generous whitespace
- Clean cards
- Subtle borders
- Soft shadows
- Rounded corners
- Professional icons
- High-quality spacing
- Strong CTA placement
- Subtle animations

Avoid:

- Excessive gradients
- Excessive animations
- Clutter
- Huge blocks of text
- Cheap-looking stock templates
- Excessive glassmorphism
- Overuse of yellow
- Generic bootstrap-style layouts

---

# 6. WEBSITE STRUCTURE

Implement the sitemap from:

`US_Tax_Business_Consulting_Website_Spec.md`

The main pages are:

```text
/
├── about
├── services
│   ├── company-formation
│   ├── tax-legal-services
│   ├── ein-itin
│   ├── business-bank-account
│   ├── trademark-registration
│   ├── bookkeeping
│   ├── payroll
│   ├── irs-notice-resolution
│   ├── tax-refunds
│   └── legal-reports-certificates
├── packages
├── blog
├── faqs
├── contact
└── book-consultation
```

If building this as a static HTML project, create separate `.html` pages and connect them correctly.

Example:

```text
index.html
about.html
services.html
company-formation.html
tax-legal-services.html
ein-itin.html
business-bank-account.html
trademark-registration.html
bookkeeping.html
payroll.html
irs-notice-resolution.html
tax-refunds.html
legal-reports-certificates.html
packages.html
blog.html
faqs.html
contact.html
book-consultation.html
```

Use clean relative links between pages.

---

# 7. SHARED COMPONENTS

Maintain consistency across all pages.

Create reusable patterns for:

- Header
- Navigation
- Mobile navigation
- Buttons
- Hero sections
- Section headings
- Service cards
- Problem cards
- Package cards
- FAQ accordion
- Blog cards
- CTA sections
- Footer

Since this is vanilla HTML, consistency can be achieved through shared CSS classes and carefully structured markup.

---

# 8. HEADER

Create a professional sticky header.

Desktop:

```text
LOGO

Home
About
Services
Packages
Blog
FAQs
Contact

[Book a Consultation]
```

Use the actual company logo.

Header:

- Background: `#1A2C3A`
- Navigation: white
- CTA: `#FBCD3C`
- CTA text: `#1A2C3A`

The header should remain clean and compact.

On mobile:

- Logo
- Hamburger button
- Mobile navigation drawer/dropdown
- Consultation CTA

Make the mobile menu smooth and accessible.

---

# 9. HOMEPAGE

Follow the homepage structure from the specification exactly.

Required order:

```text
Header
Hero
Trust / Service Strip
Services Overview
What We Fix
Why Choose Us
Who We Help
How It Works
Packages Preview
Testimonials
FAQ Preview
Final CTA
Footer
```

---

# 10. HERO DESIGN

Create a premium hero section.

Headline:

**Start, Manage & Grow Your US Business With Confidence**

Supporting text:

**From company formation and tax services to bookkeeping, payroll, banking, and IRS support, we help you handle the essential parts of your US business from one place.**

Buttons:

**Book a Consultation**

**Explore Our Services**

Possible visual composition:

Left:
- Headline
- Supporting text
- CTA buttons

Right:
- Professional business visual
- Subtle US flag imagery
- Decorative financial/business elements

Do not make the flag cover the entire hero.

Use the navy background:

`#1A2C3A`

Use yellow strategically.

Hero heading should be white.

CTA should use yellow.

---

# 11. SERVICES

Create a premium service card grid.

Services:

1. Company Formation
2. Tax & Legal Services
3. EIN & ITIN
4. Business Bank Account Setup
5. Trademark Registration
6. Bookkeeping Services
7. Payroll Processing
8. IRS Notice Resolution
9. Tax Refunds
10. Legal Reports and Certificates

Each card should have:

- Icon
- Service name
- Short description
- Learn More link

Cards should have subtle hover effects.

On hover:

- Slight upward movement
- Slight shadow increase
- Accent element changes to yellow

---

# 12. WHAT WE FIX

Create six cards:

- Messy or Delayed Books
- Missed Tax Benefits
- Payroll & Compliance Gaps
- Unclear Financial Reporting
- IRS or State Notices
- Disconnected Systems

This section should visually communicate that the company solves business problems, not simply sells services.

---

# 13. WHY CHOOSE US

Create a strong dark navy section.

Background:

`#1A2C3A`

Include:

- End-to-End Support
- Clear Communication
- Compliance-Focused
- Practical Solutions
- Transparent Packages
- Ongoing Support

Use yellow icons/accent elements.

---

# 14. WHO WE HELP

Create four cards:

- Startups
- International Founders
- Small Businesses
- Growing Companies

Use appropriate professional imagery/icons.

---

# 15. HOW IT WORKS

Create a four-step process:

```text
01
Tell Us What You Need

02
Get a Clear Plan

03
We Handle the Work

04
Stay on Track
```

Use a horizontal timeline on desktop.

Convert to vertical timeline on mobile.

---

# 16. PACKAGES

Create four professional pricing cards:

### Starter

For new entrepreneurs.

### Growth

For growing small businesses.

### Professional

For established businesses.

### Premium

For businesses wanting comprehensive support.

Do NOT invent actual prices.

Use:

`Custom Pricing`

unless pricing exists in the project.

The Professional or Growth package can be visually highlighted as:

**Most Popular**

Use yellow carefully.

---

# 17. TESTIMONIALS

Only use testimonials if they are supplied by the client.

Do NOT create fake testimonials.

If no testimonials exist:

Either hide the section or replace it with:

**Why Businesses Choose Us**

---

# 18. FAQ

Implement an accessible accordion.

Questions should come from the specification.

The accordion should:

- Open/close smoothly
- Support keyboard navigation
- Have accessible buttons
- Use `aria-expanded`
- Use appropriate semantic markup

---

# 19. FINAL CTA

Create a strong final conversion section.

Background:

`#1A2C3A`

Heading:

**Ready to Get Your US Business on Track?**

Text:

**Whether you're starting a company, catching up on your books, preparing for tax season, or dealing with an IRS notice, we're here to help.**

CTA:

**Book a Consultation**

---

# 20. SERVICE PAGES

Create individual pages for every service.

Each service page should use the same structure:

```text
Header
Breadcrumb
Hero
Problem / Context
What We Provide
Benefits
How It Works
Who It's For
FAQ
Related Services
CTA
Footer
```

Use the actual content from:

`US_Tax_Business_Consulting_Website_Spec.md`

Do not replace the service content with generic filler.

For **Legal Reports and Certificates**, include:

- H1: **Legal Reports and Certificates for Your Business**
- Problem / Context card explaining requests for reports, certificates, and official records.
- Services may include card listing business status reports, certificates of good standing where available, certificate and filing record requests, business information summaries, compliance and renewal documentation, and document organization support.
- Benefits, process, who it's for, FAQ, related services, consultation CTA, and the general legal/tax disclaimer.
- Do not guarantee document availability, approval, or processing times because requirements vary by jurisdiction and issuing authority.

---

# 21. PACKAGES PAGE

Create a dedicated packages page with:

- Starter
- Growth
- Professional
- Premium

Each card should contain:

- Package name
- Best for
- Description
- Features
- CTA

Use:

`Custom Pricing`

until the client provides actual prices.

---

# 22. BLOG

Create:

`blog.html`

Use a modern blog grid.

Each card:

- Image
- Category
- Title
- Short excerpt
- Date
- Read More

Use the blog topics from the specification.

Create an article template if practical.

---

# 23. CONTACT PAGE

Create a professional contact form.

Fields:

- Full Name
- Email
- Phone
- Country
- Business Name
- Service Needed
- Message

Service dropdown:

```text
Company Formation
Tax & Legal Services
EIN / ITIN
Business Bank Account
Trademark Registration
Bookkeeping
Payroll
IRS Notice Resolution
Tax Refunds
Legal Reports and Certificates
Other
```

Include:

**Submit Request**

The form should have proper validation.

Since this is a static frontend:

- Implement client-side validation.
- Clearly structure the form so a backend/API can be connected later.
- Do not pretend the form actually sends data unless a backend is configured.

---

# 24. BOOK CONSULTATION

Create:

`book-consultation.html`

This should be a conversion-focused page.

Include:

- Strong headline
- Short explanation
- Consultation form
- Business type
- Business stage
- Service required
- Contact information
- Preferred consultation time
- Message

CTA:

**Book My Consultation**

Leave a clear integration point for a future scheduling service.

---

# 25. FOOTER

Create a large professional footer.

Columns:

### Company

- About
- Services
- Packages
- Blog
- FAQs
- Contact

### Services

- Company Formation
- Tax Services
- EIN & ITIN
- Banking
- Trademark
- Bookkeeping
- Payroll
- IRS Resolution
- Tax Refunds
- Legal Reports and Certificates

### Contact

Use placeholders if real client information isn't available.

### Legal

- Privacy Policy
- Terms of Service
- Disclaimer

Footer background:

`#1A2C3A`

Links:

`#FFFFFF`

Hover:

`#FBCD3C`

---

# 26. RESPONSIVE DESIGN

The website must be fully responsive.

Design for:

- 1440px+
- 1200px
- 992px
- 768px
- 576px
- 375px

Do not simply shrink the desktop design.

Actually redesign layouts for mobile.

Examples:

Desktop:

```text
[Card] [Card] [Card]
```

Mobile:

```text
[Card]

[Card]

[Card]
```

Desktop navigation becomes mobile navigation.

Horizontal process becomes vertical.

Multi-column package cards become stacked cards.

Hero content should remain readable and visually balanced.

---

# 27. ACCESSIBILITY

Follow good accessibility practices.

Include:

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Keyboard navigation
- Visible focus states
- Accessible forms
- Accessible mobile menu
- Sufficient color contrast
- `aria-label` where needed

Do not use text inside images when HTML text can be used.

---

# 28. ANIMATIONS

Use subtle CSS/JS animations.

Examples:

- Fade-up sections
- Card hover
- Button hover
- Header transitions
- Mobile menu animation
- FAQ expansion

Keep animations professional.

Do NOT overanimate the website.

Respect:

`prefers-reduced-motion`

---

# 29. SEO

Every page should include:

- Unique `<title>`
- Meta description
- Canonical URL placeholder
- Open Graph metadata
- Proper H1
- H2/H3 hierarchy
- Descriptive image alt attributes

Use descriptive URLs.

Example:

```text
/services/company-formation.html
/services/bookkeeping.html
/services/payroll.html
```

Add appropriate structured data where useful.

---

# 30. PERFORMANCE

Optimize for fast loading.

Use:

- Optimized images
- Lazy loading for below-the-fold images
- Minimal JavaScript
- Efficient CSS
- No unnecessary libraries
- Proper image dimensions
- Avoid huge unoptimized assets

Use:

```html
loading="lazy"
```

for appropriate images.

Do not lazy-load the primary hero image if it is important to the initial viewport.

---

# 31. FILE STRUCTURE

Use a clean structure similar to:

```text
/
├── index.html
├── about.html
├── services.html
├── company-formation.html
├── tax-legal-services.html
├── ein-itin.html
├── business-bank-account.html
├── trademark-registration.html
├── bookkeeping.html
├── payroll.html
├── irs-notice-resolution.html
├── tax-refunds.html
├── packages.html
├── blog.html
├── faqs.html
├── contact.html
├── book-consultation.html
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── logo.*
│   ├── us-flag.*
│   └── ...
│
└── README.md
```

Adjust this structure if the existing project already has an established structure.

Do not unnecessarily overwrite existing project files.

---

# 32. IMPORTANT CONTENT RULES

Never invent:

- Company credentials
- Certifications
- Awards
- Years of experience
- Client numbers
- Office locations
- Team members
- Client testimonials
- Pricing
- Licenses
- Partnerships
- Guarantees

If information is missing, use an obvious placeholder such as:

`Fintax Visor`

or:

`+1 505 528 3808`

Do not publish fake information.

---

# 33. TAX / LEGAL CONTENT SAFETY

This is a financial/tax/business website.

Do not use guarantees such as:

- Guaranteed tax refund
- Guaranteed IRS resolution
- Guaranteed bank approval
- Guaranteed EIN approval
- Guaranteed trademark approval
- Guaranteed tax savings

Use professional language such as:

- "We help"
- "We assist"
- "We provide guidance"
- "We review"
- "We support"

Where appropriate, include disclaimers that information is general and individual tax/legal circumstances may vary.

---

# 34. USER EXPERIENCE

The website should answer these questions quickly:

### Within 5 seconds:

**What does this company do?**

US business, tax, accounting, payroll, and compliance services.

### Within 15 seconds:

**Who is it for?**

Entrepreneurs, international founders, startups, small businesses, and growing companies.

### Within 30 seconds:

**What problems can they solve?**

Business formation, tax, EIN/ITIN, banking, bookkeeping, payroll, IRS notices, refunds, and trademark support.

### Throughout the website:

**What should I do next?**

Book a consultation.

---

# 35. FINAL QUALITY CHECK

Before considering the website complete, verify:

- [ ] All pages from the sitemap exist
- [ ] All navigation links work
- [ ] All CTA links work
- [ ] Logo is used correctly
- [ ] US flag image is used tastefully
- [ ] Color palette is consistent
- [ ] Website is responsive
- [ ] Mobile navigation works
- [ ] FAQ accordion works
- [ ] Forms validate correctly
- [ ] No fake testimonials
- [ ] No fake pricing
- [ ] No invented company information
- [ ] No broken images
- [ ] No broken links
- [ ] No horizontal scrolling on mobile
- [ ] Semantic HTML is used
- [ ] Images have appropriate alt text
- [ ] SEO metadata exists
- [ ] Accessibility basics are covered
- [ ] Animations are subtle
- [ ] Website loads quickly
- [ ] Every service page has a consultation CTA

# FINAL INSTRUCTION

First read:

`US_Tax_Business_Consulting_Website_Spec.md`

Then inspect the existing project files and available images.

Use the actual company logo and US flag asset if available.

Build the website **page by page**, starting with the homepage and shared design system.

Do not stop at creating a basic landing page.

The goal is a complete, polished, responsive multi-page website suitable for a real US tax and business consulting company.

After implementation, review the entire site for consistency, responsiveness, broken links, missing sections, accessibility issues, and visual quality.