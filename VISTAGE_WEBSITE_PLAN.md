# Vistage Member Profile Website - Claude Code Plan

## Project Overview

Build a **beautiful, professional, stunning** website that showcases the 10 members of a Denver Vistage peer advisory group. This website will be shared with ~70 CEOs and business owners attending a networking event in early February 2026. The goal is to help attendees understand who each member is and what they do, so they can identify potential business opportunities.

---

## Context

**What is Vistage?**
Vistage is a peer advisory organization for CEOs and business owners. This group of 10 Denver-area business leaders is hosting an event for ~70 potential clients (CEOs and business owners). The website serves as a digital introduction to each member.

**Target Audience:**
- CEOs and business owners
- They care about: "What does this person/company do?" and "How can they help me?"
- They do NOT care about: education, full work history, or generic resume content

**Design Requirements:**
- Light theme
- Beautiful, professional, stunning design
- Clean and modern aesthetic
- Easy to scan and navigate
- Mobile-responsive

---

## Data Source

The member data is provided in `vistage_members.json` with the following structure for each member:

```json
{
  "name": "Member Name",
  "title": "Job Title",
  "company": "Company Name",
  "company_url": "https://...",
  "linkedin_url": "https://linkedin.com/in/...",
  "headshot_url": "",
  "tagline": "One-liner value proposition",
  "what_we_do": "Clear explanation of services",
  "who_we_help": "Target audience description",
  "key_services": ["Service 1", "Service 2", "Service 3"],
  "differentiator": "Why choose them",
  "notable_results": "Proof/credibility",
  "cta_text": "Call to action text",
  "cta_link": "https://..."
}
```

**Note:** Headshot URLs are empty - use placeholder images or initials-based avatars.

---

## Website Structure

### Option A: Single Page (Recommended for simplicity)
1. **Hero Section**
   - Title: "Meet the [Group Name] Vistage Group" (or similar)
   - Subtitle: Brief intro about the group and the event
   - Scroll indicator

2. **Member Grid/Cards**
   - Display all 10 members as cards
   - Each card shows: Photo/avatar, Name, Title, Company, Tagline
   - Clicking a card expands to show full details OR opens a modal

3. **Footer**
   - Brief about Vistage
   - Event info if relevant

### Option B: Multi-Page
1. **Home Page** - Grid of member cards with basic info
2. **Individual Member Pages** - Full profile for each member

---

## Design Specifications

### Visual Style
- **Theme:** Light, clean, professional
- **Colors:** 
  - Primary: Deep blue or professional navy (#1a365d or similar)
  - Accent: Subtle gold, teal, or warm accent color
  - Background: White or very light gray (#f8fafc)
  - Text: Dark gray (#1f2937)
- **Typography:** 
  - Headlines: Bold, modern sans-serif
  - Body: Clean, readable sans-serif
- **Spacing:** Generous whitespace, easy to scan

### Card Layout
Each member card should display:
- **Visible by default:**
  - Photo/avatar placeholder
  - Name (prominent)
  - Title
  - Company name
  - Tagline (the hook)
  
- **On expand/click:**
  - What we do
  - Who we help
  - Key services (as pills/tags)
  - Differentiator
  - Notable results
  - CTA button linking to their website/calendar
  - LinkedIn icon/link

### Responsive Design
- Desktop: 3-4 cards per row
- Tablet: 2 cards per row
- Mobile: 1 card per row, stacked layout

---

## Technical Requirements

### Stack
- **Framework:** Next.js (preferred) or React
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel deployment

### File Structure
```
/app or /pages
  - page.tsx (or index.tsx)
  - layout.tsx
/components
  - MemberCard.tsx
  - MemberModal.tsx (if using modals)
  - Hero.tsx
  - Footer.tsx
/data
  - members.json (copy from vistage_members.json)
/public
  - placeholder images if needed
```

### Data Handling
- Import member data from JSON file
- Map over array to render cards
- Handle empty headshot_url gracefully (use initials or placeholder)

---

## Implementation Checklist

1. [ ] Set up Next.js project with Tailwind CSS
2. [ ] Copy member data JSON into project
3. [ ] Create Hero component with event intro
4. [ ] Create MemberCard component with collapsed/expanded states
5. [ ] Create grid layout for member cards
6. [ ] Add click-to-expand or modal functionality
7. [ ] Style with light theme, professional look
8. [ ] Add LinkedIn and website links
9. [ ] Make fully responsive
10. [ ] Add subtle animations/transitions for polish
11. [ ] Test on mobile viewport
12. [ ] Prepare for deployment

---

## Example Prompt for Claude Code

Copy this entire file along with `vistage_members.json` and use this prompt:

---

**Prompt:**

```
I need you to build a beautiful, professional website for a Vistage networking group. 

The website will showcase 10 business leaders and will be shared with ~70 CEOs attending an event in early February.

Please read the attached PLAN.md for full requirements and vistage_members.json for the member data.

Key requirements:
- Light theme, clean modern design
- Next.js + Tailwind CSS
- Member cards that expand to show full details
- Mobile responsive
- Professional and stunning visual design

Start by setting up the project structure, then build out each component.
```

---

## Notes

- The headshot_url fields are empty - generate avatar placeholders using initials or a service like UI Avatars
- Keep the design CEO-friendly: professional, not flashy; informative, not cluttered
- The goal is for attendees to quickly understand who each person is and how to connect with them
- Focus on clarity and scannability over complexity

---

## Success Criteria

The website is successful if a CEO can:
1. Land on the page and immediately understand what it is
2. Scan all 10 members in under 30 seconds
3. Click on someone interesting and learn what they do
4. Easily find a way to connect (website link, LinkedIn)
5. View comfortably on their phone
