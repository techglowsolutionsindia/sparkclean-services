SparkClean Services — Project Documentation

1. Project Overview

- Project Number: 8
- Project Name: SparkClean Services
- Website Type: Professional Home Cleaning & Maintenance — Single-Page Landing Website
- Developer: TechGlow Solutions
- Original Completion Date: 29 October 2026
- Original Publication Date: 30 October 2026
- Local Project Folder: D:\web-projects\sparkclean-services\
- Frontend Technologies: HTML5, CSS3, Vanilla JavaScript (no frontend frameworks)
- Frontend Hosting: GitHub Pages
- Enquiry Backend: Google Apps Script
- Enquiry Storage: Google Sheets
- Email Integration: Owner notification and customer confirmation emails
- Website Objective: Present home cleaning and maintenance services and collect free-quote enquiries.
- Current Status (8 November 2026): Latest quote-form update committed and pushed; documentation and refreshed Google Drive backup pending.

2. GitHub and Hosting
   GitHub Repository: https://github.com/techglowsolutionsindia/sparkclean-services/

Live Website: https://techglowsolutionsindia.github.io/sparkclean-services/

Frontend Hosting: GitHub Pages.

Main Git Working Folder: D:\web-projects\sparkclean-services\

Use this existing folder for Git; do not create a duplicate GitHub project folder.

Latest Confirmed Git Push: Commit c2a67a3 on branch main, 8 November 2026 — Fix quote form status messages and reset behavior.

Git Status After Push: Up to date with origin/main; working tree clean.

Latest Live Verification: Earlier published website and SVG footer logo were visually verified on GitHub Pages. The latest 3-second quote-message changes were tested locally with Live Server; independent testing of that revision on GitHub Pages was intentionally skipped. 3. Project Structure
Project Root: D:\web-projects\sparkclean-services\
Main HTML Page

- index.html — Single-page landing website, including the quote form and footer.
  Confirmed CSS Files
- assets/css/variables.css
- assets/css/base.css
- assets/css/layout.css
- assets/css/header.css
- assets/css/footer.css
- assets/css/landing-page.css
  Additional component CSS files have been used in project development; verify the current folder contents before documenting exact paths.
  Confirmed JavaScript Files
- assets/js/header.js — Header/navigation behavior.
- assets/js/hero-slideshow.js — Hero before/after slideshow.
- assets/js/gallery.js — Gallery behavior.
- assets/js/testimonials.js — Testimonials behavior.
- assets/js/quote-form.js — Quote form handling and status messages.
  Other Important Files and Assets
- assets/images/logo/sparkclean-logo.svg — Branded SVG used in the navbar and footer.
- assets/images/ — Website images (primarily WebP).
- .gitattributes — Git attributes (observed in VS Code).
- PROJECT-DOCUMENTATION.md — This file; must be saved in the project root.
  The former assets/images/logo/sparkclean-logo.webp was deleted in the approved logo update. Confirm any other SEO/configuration files (robots.txt, sitemap.xml, .gitignore, etc.) against the actual repository before listing them as present.

4. Website Sections and SEO
   Main Landing-Page Sections
1. Hero
1. Service Benefits
1. Our Cleaning & Maintenance Services
1. About
1. Why Choose
1. How It Works
1. Pricing
1. Before & After Gallery
1. Our Service Commitment
1. Testimonials
1. FAQs
1. Request a Free Quote
1. Final CTA Banner
   SEO Configuration
   SEO title, description, canonical, Open Graph/Twitter metadata, structured data, robots directives, favicon references, XML sitemap and crawler configuration should be verified against the current index.html and repository before recording them as complete. Do not assume that files from Roamora Travels exist in this single-page project.

Preferred live website URL: https://techglowsolutionsindia.github.io/sparkclean-services/ 5. Application Architecture

- Frontend: Static HTML5/CSS3/vanilla JavaScript hosted by GitHub Pages.
- Interactivity: Header navigation, hero slideshow, gallery, testimonials and quote form.
- Backend: Google Apps Script receives quote submissions.
- Storage: Google Sheets records enquiries.
- Email: Apps Script sends owner notifications and customer confirmations.
- No confirmed Node.js, Render or Brevo backend for SparkClean Services.
  Do not replace the working Google Apps Script integration merely to implement cosmetic form behavior.

6. Free Quote Form Integration
   Relevant files: index.html and assets/js/quote-form.js.

Purpose: Collect enquiries for cleaning and maintenance services.
Form Fields

- Full Name — required
- Phone Number — required; default +91 prefix
- Email Address — required
- Service Required — required
- Service Location — required
- Preferred Service Date — shown on form; exact required/optional validation should be checked in source
- Additional Requirements — optional
  Confirmed Latest Behavior
- Shows Submitting your inquiry... for 3 seconds.
- Shows Submission successful! for 3 seconds after a confirmed successful submission.
- Each message automatically disappears after its own display period.
- On successful submission, clears entered form data while restoring the +91 phone prefix.
- Does not mention email delivery in the customer-facing success message.
- Existing Google Sheets and email-delivery integration is preserved.
  Evidence: Owner-provided Live Server screenshots on 8 November 2026 showed the submission and success states, form reset and disappearance of the message. The exact timing is owner-reported/tested, not independently measured from screenshots.

Important: A frontend success message alone is not proof of server delivery; verify the sheet and both emails for end-to-end tests. 7. Google Sheets and Google Apps Script
Google Spreadsheet

- Spreadsheet Name: Free-Quote (visible in the supplied screenshot).
- Worksheet: Form-Data.
- Spreadsheet ID: Not recorded in this documentation.
- Google Account: Verify which account owns the spreadsheet and Apps Script deployment; do not assume it is the same as another project.
  Confirmed Worksheet Columns

1. Timestamp
2. Full Name
3. Phone Number
4. Email Address
5. Service Required
6. Service Location
7. Preferred Service Date
8. Additional Requirements
9. Email Status
   The 8 November test enquiry appeared in the worksheet with Sent under Email Status.
   Google Apps Script

- Project Name: Not independently confirmed.
- Deployment Version/Date: Not independently confirmed.
- Web App Endpoint: Obtain from the active assets/js/quote-form.js configuration; do not copy Roamora Travels' endpoint.
- Script Permissions: Not independently inspected.
  Email Functions
- Owner receives a new quote enquiry notification.
- Customer receives a confirmation email containing submitted enquiry details.
- Both messages were shown in the owner's Gmail screenshots for the 8 November test.
  Do not include API credentials, private tokens, confidential customer data or sensitive Apps Script settings in this public project document.

8. Cleaning and Maintenance Services
   The website presents services including regular home cleaning, deep cleaning, home maintenance and customized cleaning. The form also demonstrated a general home maintenance selection. Check the current HTML for the complete service-option list and pricing details before publishing business claims.

Primary CTA: Get a Free Quote.

Secondary CTA: Explore Our Services. 9. Hero Before/After Slideshow
The hero uses the approved automatic before/after crossfade slideshow (Option 1). The project includes seven home areas: living room, kitchen, bathroom, bedroom, balcony, dining area and home office. Each pair is designed to show the same room from a consistent viewpoint. The previously approved behavior should remain unchanged unless a new change is requested.

Relevant script: assets/js/hero-slideshow.js. 10. Branding and Other Integrations
Branding

- Primary: #087f8c
- Primary Hover: #066975
- Secondary: #16b8a6
- Secondary Soft: #e9f8f6
- Text Primary: #183342
- Heading Font: Poppins
- Body Font: Inter
- Logo: assets/images/logo/sparkclean-logo.svg
  The SVG logo was visually confirmed in the navbar and footer on the live website after the logo update. The favicon's current reference should be checked separately in index.html.
  Other Integrations
  No separate newsletter subscription, payment processing, Render backend or Brevo service has been confirmed for this project.

11. Form Validation and Security

- Validate required fields, phone number and email before submitting; exact implemented rules require a current source review.
- Prevent accidental repeated submissions while a request is in progress; verify behavior in current JavaScript.
- Validate and sanitize inputs on the Apps Script side; backend implementation has not been independently audited.
- Restrict Google Sheet access to authorized accounts.
- Review Apps Script deployment permissions and abuse/spam safeguards.
- Do not commit credentials or confidential customer records.
- Keep customer details out of public documentation and sample code.
  Backend security status: Not independently inspected in this documentation pass.

12. Configuration and Secrets
    Frontend Endpoint
    The active Apps Script endpoint is configured or referenced in the frontend implementation; its exact location and value should be checked in assets/js/quote-form.js and related HTML before updating it.
    Environment Variables
    No project-specific environment variable names have been verified for this static site.
    Git Exclusions
    Check the actual .gitignore (if present) before claiming specific exclusion patterns. Never commit .env secrets, credentials, private keys, or customer records.
13. Local Website Setup
14. Open D:\web-projects\sparkclean-services\ in VS Code.
15. Start Live Server.
16. Open index.html.
17. Verify the header and footer SVG logos and anchor links.
18. Test desktop, tablet and mobile layout.
19. Check hero slideshow and gallery interactions.
20. Submit a controlled quote-form test.
21. Confirm the form status messages and reset behavior.
22. Verify the new Google Sheets row and both emails.
23. Check browser console and network errors.
    No Node.js installation is needed for the confirmed static frontend.
24. Frontend Deployment — GitHub Pages
    Repository: https://github.com/techglowsolutionsindia/sparkclean-services/
    Procedure
25. Save and test approved changes locally.
26. Review git status and git diff --check.
27. Review unwanted or unused files and their dependencies; obtain approval before deletion.
28. Stage only intended files.
29. Commit changes from D:\web-projects\sparkclean-services\.
30. Push to origin main.
31. Verify GitHub Pages publishes the changes when live verification is required.
32. Update PROJECT-DOCUMENTATION.md and the Google Drive backup.
    Latest Confirmed Git Update

- Commit: c2a67a3
- Commit Message: Fix quote form status messages and reset behavior
- Branch: main
- Push: Successful on 8 November 2026.
- Final Status: Working tree clean and synchronized with origin/main.
  The prior logo/form commit was 202d18f (Fix SparkClean SVG logo and improve quote form handling).

15. Google Apps Script Deployment
    Backend: Google Apps Script.

Current Version: Not documented; verify in the Apps Script dashboard.
Maintenance Procedure

1. Open https://script.google.com/home.
2. Locate the SparkClean quote-form script by checking its linked spreadsheet/deployment.
3. Confirm the active deployment and permissions.
4. Verify the destination Free-Quote spreadsheet and Form-Data worksheet.
5. Review owner and customer email functions.
6. Submit controlled test data.
7. Verify the worksheet row, Email Status and both messages.
8. Change the frontend endpoint only when a new deployment explicitly requires it.
9. Testing History
   Completed or Owner-Confirmed

- Original website completed 29 October 2026 and published 30 October 2026.
- GitHub Pages deployment completed.
- Google Sheets enquiry integration working.
- Owner notification email received during 8 November test.
- Customer confirmation email received during 8 November test.
- New enquiry row recorded in Free-Quote / Form-Data, with Email Status Sent.
- SVG logo visible in navbar and footer on published website.
- Quote form default +91 prefix retained after reset.
- Local Live Server screenshots showed the revised submission/success messages and automatic clearing.
- Latest quote-form change committed and pushed as c2a67a3.
- Git working tree clean after push.
  Pending or Not Independently Verified
- Exact Apps Script deployment version and endpoint details.
- Backend security review.
- Exact 3-second message durations via timed measurement (screenshots show sequence).
- Live GitHub Pages retest of the latest quote-message revision (intentionally skipped).
- Updated Google Drive backup after the latest Git push.
- Commit and push this documentation file.

17. Maintenance and Known Limitations
    Email Delivery
    Successful test messages do not guarantee that future messages always reach the recipient's inbox. Monitor spam classification and delivery issues as necessary.
    Google Apps Script
    Deployment, authorization or endpoint changes may interrupt submissions. Preserve the currently working integration and retest after backend changes.
    Future Custom Domain
    If migrating to a custom domain, review canonical URLs, asset paths, sitemap/robots references (if present), Apps Script access and the live quote form. Retest Google Sheets and both emails.
    Content and Services
    Confirm pricing, availability, service coverage and marketing claims before using this portfolio demonstration as a commercial service.
18. GitHub and Google Drive Backup
    GitHub
    Repository: https://github.com/techglowsolutionsindia/sparkclean-services/

Latest Confirmed Push: c2a67a3, 8 November 2026.
Google Drive
Backup Account: TechGlow Solutions — techglowsolutionsindia@gmail.com (previously reported).

Original Project Backup: Previously reported completed.

Backup Including Latest 8 November Changes: Pending confirmation.
Backup Requirements
Include current HTML, CSS, JavaScript, images, SVG logos, relevant repository configuration, SEO files if present, and PROJECT-DOCUMENTATION.md. Exclude secrets and confidential customer information. 19. Common Service Details — TechGlow Solutions
GitHub

- Repository: https://github.com/techglowsolutionsindia/sparkclean-services/
- Hosting: GitHub Pages.
  Google Apps Script
- Dashboard: https://script.google.com/home
- Project/Deployment: Verify active SparkClean project and version.
  Google Sheets
- Dashboard: https://sheets.google.com/
- Spreadsheet: Free-Quote
- Worksheet: Form-Data
- Owning Account: Verify in Google Sheets.
  Google Drive
- Dashboard: https://drive.google.com/
- Backup Account: techglowsolutionsindia@gmail.com (owner-reported).
  Render and Brevo
  No project-specific Render or Brevo integration is confirmed for SparkClean Services. Do not copy settings from other TechGlow projects.

20. Final Project Closure Checklist

- [x] Website developed and originally completed 29 October 2026
- [x] Original GitHub Pages publication completed 30 October 2026
- [x] Single-page landing sections created
- [x] Hero before/after slideshow implemented
- [x] Google Apps Script and Google Sheets quote form working
- [x] Owner notification email tested
- [x] Customer confirmation email tested
- [x] SVG navbar and footer logos visually verified
- [x] +91 default phone prefix retained after successful reset
- [x] Revised quote-form messages tested locally
- [x] Latest code changes committed and pushed (c2a67a3)
- [x] Git working tree clean after push
- [x] Project documentation drafted
- [ ] Save PROJECT-DOCUMENTATION.md in project root
- [ ] Verify project-specific endpoint and Apps Script deployment details for documentation
- [ ] Review unused files and dependencies before any cleanup
- [ ] Commit and push documentation file
- [ ] Update Google Drive backup with latest code and documentation
- [ ] Confirm final documentation and backup completion
      Documentation Last Updated: 8 November 2026

Original Project Completion Date: 29 October 2026

Original Publication Date: 30 October 2026

Documentation Status: Draft prepared using the Roamora Travels 20-section reference structure, SparkClean project history and owner-provided screenshots/terminal output. Unverified details are explicitly identified.

Final Project Status: Website published and latest code pushed; documentation installation and updated backup remain pending.
