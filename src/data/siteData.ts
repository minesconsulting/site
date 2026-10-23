/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { teamBlank, teamBrooke, teamRish, teamTyler } from "../config/images";

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'MSCC',
  tagline: 'Mines Software Consulting Club',
  description:
    'Our mission is to provide pro-bono software engineering consulting services to academic and engineering clients by bringing together software and business students at Mines.',
  url: 'https://example.com',
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'Lic# 123456',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'hello@example.com',
  phoneForTel: '555-867-5309',
  phoneFormatted: '(555) 867-5309',
  address: {
    lineOne: '123 Main Street',
    lineTwo: 'Suite 100',
    city: 'Denver',
    state: 'CO',
    zip: '80206',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/example',
  },
  hours: [
    { days: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 2:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  emergencyService: '24/7 Emergency Service Available',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Team', href: '/team' },
    { label: 'Portfolio', href: '/reviews' },
    { label: 'Processes', href: '/blog' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'Full-Stack Applications',
      description:
        'We build robust, scalable web applications tailored to your business needs. From front-end interfaces to back-end APIs, we handle the full stack with modern technologies and best practices.',
    },
    {
      title: 'Data Processing & Analysis',
      description:
        'We help you make sense of your data with powerful analysis and visualization tools. From simple reports to complex machine learning models, we provide actionable insights to drive your business forward.',
    },
    {
      title: 'Custom Tools & Plugins',
      description:
        'We create custom tools and plugins to extend the functionality of your existing systems. Whether you need a simple automation script or a complex integration, we have the expertise to deliver.',
    },
    {
      title: 'Specialized AI Development',
      description:
        'We develop custom AI solutions to address your unique business challenges. From natural language processing to computer vision, we leverage the latest advancements in artificial intelligence to create powerful, scalable applications.',
    },
    {
      title: 'Cloud Solutions & Backend Systems',
      description:
        'We design and implement cloud-based solutions, distributed systems, and backend architectures that are reliable, scalable, and secure. Our expertise in cloud platforms and backend technologies ensures your applications perform optimally under any load.',
    }
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "They showed up on time, explained everything clearly, and finished the job faster than expected. Best service experience we've had.", name: 'Sarah M.', location: 'Denver, CO', rating: 5 },
    { quote: "Honest pricing and top-notch work. I've used them for three different projects now and they never disappoint.", name: 'James R.', location: 'Aurora, CO', rating: 5 },
    { quote: 'Our emergency call was answered in minutes. They had the problem fixed before dinner. Truly dependable.', name: 'Linda K.', location: 'Lakewood, CO', rating: 5 },
    { quote: 'The remodel turned out even better than we imagined. Professional, clean, and on budget. We couldn\'t be happier.', name: 'Tom & Beth P.', location: 'Boulder, CO', rating: 5 },
    { quote: 'Great communication from start to finish. They sent photos of the progress and cleaned up perfectly when done.', name: 'Anita W.', location: 'Littleton, CO', rating: 5 },
    { quote: "I appreciate the upfront pricing — no hidden fees or surprise charges. That's rare these days. Highly recommend.", name: 'Marcus D.', location: 'Arvada, CO', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'What started as a one-person operation has grown into a trusted local team. For over 15 years, we\'ve served homeowners and businesses with reliable, high-quality work — and we plan to keep doing just that for decades to come.',
      'Every member of our crew is licensed, insured, and background-checked. We treat your property with the same care we\'d give our own, and we stand behind every job with a satisfaction guarantee.',
    ],
    team: {
      executive: [
        { name: 'Rish Bector', role: 'Founder & President', image: teamRish },
        { name: 'Tyler Collingridge', role: 'Founder & VP of Business', image: teamTyler },
        { name: 'Brooke Fiedler', role: 'Founder & VP of Marketing', image: teamBrooke },
        { name: 'Austin Zuber', role: 'Founder & VP of Member Development', image: teamBlank },
        { name: 'Pratik Asarpota', role: 'VP of Product', image: teamBlank },
        { name: 'Trisha Varadaraj', role: 'VP of Outreach', image: teamBlank },
        { name: 'Garrison White', role: 'VP of Recruitment', image: teamBlank },
      ],
      consultants: [
        { name: 'Grant Anderson', role: 'Consultant', image: teamBlank },
        { name: 'Mark Duffalo', role: 'Consultant', image: teamBlank },
        { name: 'Rhys Cadwallader', role: 'Consultant', image: teamBlank },
        { name: 'Jack Canonico', role: 'Consultant', image: teamBlank },
        { name: 'Danial Aghassi', role: 'Consultant', image: teamBlank },
        { name: 'Xavier Adams', role: 'Consultant', image: teamBlank },
        { name: 'Garrison White', role: 'Consultant', image: teamBlank },
        { name: 'Ben Ferguson', role: 'Consultant', image: teamBlank },
        { name: 'Gary Lewis', role: 'Consultant', image: teamBlank },
        { name: 'Ryan Koch', role: 'Consultant', image: teamBlank },
        { name: 'Konrad Quam', role: 'Consultant', image: teamBlank },
        { name: 'Matthew Johnson', role: 'Consultant', image: teamBlank },
        { name: 'Carter Bartkiewicz', role: 'Consultant', image: teamBlank },
        { name: 'John Bradley', role: 'Consultant', image: teamBlank },
        { name: 'Jiah Spector', role: 'Consultant', image: teamBlank },
        { name: 'Evan Chai', role: 'Consultant', image: teamBlank },
        { name: 'Aadesh Bhattarai', role: 'Consultant', image: teamBlank },
      ],
      alumni: [],
    },
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Full-Stack Applications' },
    { label: 'Data Processing & Analysis' },
    { label: 'Custom Tools & Plugins' },
    { label: 'Specialized AI Development' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
