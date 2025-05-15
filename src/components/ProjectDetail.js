/* ──────────────────────────────────────────────────────────────── */
/*  src/components/ProjectDetail.js                                 */
/*  Full file – includes:                                           */
/*    • complete projectData object                                 */
/*    • Challenge Addressed block (left‑aligned, purple accent)     */
/*    • Masonry gallery                                             */
/*    • Lightbox with steady purple arrows / close icon             */
/*    • Keyboard navigation                                         */
/*    • Video support (.mp4 / .webm)                                */
/* ──────────────────────────────────────────────────────────────── */

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cls from './ProjectDetail.module.css';

/* ------------------------------------------------------------------ */
/*  Project data – add or edit freely                                 */
/* ------------------------------------------------------------------ */
const projectData = {
  /* ───────── Existing entries ───────── */
  'camp-fever': {
    title: 'Camp Fever Shirt',
    desc:
      'Custom shirt design for a summer youth retreat brand, using bold, vibrant visuals.',
    images: ['/gallery/campFeverArt.jpg',
      '/gallery/campFeverPoster.jpg',
      '/gallery/campFeverShirt.jpg',
      '/gallery/Buddys1.jpg','/gallery/Buddys2.jpg',
      '/gallery/Buddys3.jpg','/gallery/Buddys4.jpg',
      '/gallery/Buddys5.jpg',
      '/gallery/Buddys6.jpg',
      '/gallery/Buddys7.jpg',],
    services: 'Branding · Visual Design',
    tools: ['photoshop', 'illustrator'],
    value: 'Energetic visuals that connect with youth',
    timeline: '2 weeks',
  },
  // 'coke-can': {
  //   title: 'Coke Can Concept',
  //   desc: 'Minimal, bold red re‑imagining of a classic brand icon.',
  //   images: ['/gallery/cokeCan.webp', '/gallery/cokeMockup.webp'],
  //   services: 'Product Concept',
  //   tools: ['illustrator', 'figma'],
  //   value: 'Modern shelf impact',
  //   timeline: '1 week',
  // },
  'threatlocker-race': {
    title: 'ThreatLocker Race Campaign',
    desc:
      'High‑speed cybersecurity event branding, motion assets and on‑site screen content.',
    images: [
      '/gallery/ThreatlockerRace1.webp',
      '/gallery/ThreatlockerRace2.webp',
      '/gallery/ThreatlockerRace3.webp',
    ],
    services: 'Campaign Branding · Motion',
    tools: ['illustrator', 'aftereffects'],
    value: 'Event engagement & visibility ↑38 %',
    timeline: '2 weeks',
  },

  /* ───────── New entries ───────── */

  'charleys-cheesesteak': {
    title: 'Charleys Cheesesteak Poster',
    desc:
      'High‑contrast poster promoting a limited‑time cheesesteak flavour.',
    images: ['/gallery/cheesesteak1.png','/gallery/cheesesteak2.jpg','/gallery/cheesesteak3.jpg','/gallery/cheesesteak4.jpg','/gallery/cheesesteak5.jpg'],
    services: 'Print Design',
    tools: ['illustrator', 'indesign'],
    value: 'Franchise traffic lift during promo week',
    timeline: '1 week',
  },
  'threatlocker-steps': {
    title: 'ThreatLocker 12‑Step Series',
    desc:
      'Educational infographic series that simplifies ThreatLocker’s security process.',
    images: ['/gallery/Threatlocker_12step.webp'],
    services: 'Infographic · Illustration',
    tools: ['illustrator', 'figma'],
    value: 'Training completion rate +24 %',
    timeline: '10 days',
  },
  'moms-fuego': {
    title: 'Mom’s Fuego Branding',
    desc:
      'Spicy sauce line identity with hand‑drawn peppers and bold typography.',
    images: ['/gallery/MomsFuego.jpg','/gallery/momFries.jpg'],
    services: 'Brand Identity',
    tools: ['illustrator', 'photoshop'],
    value: 'Shelf appeal that stands out',
    timeline: '2 weeks',
  },
  'threatlocker-ads': {
    title: 'ThreatLocker Ads Series',
    desc: 'Paid media banners & motion ads driving MSP lead gen.',
    images: ['/gallery/TL_Fin_240x400.gif','/gallery/TL_Fin_580x400.gif','/gallery/TL_Fin_930x180.gif'],
    services: 'Digital Ads · Motion',
    tools: ['aftereffects', 'photoshop'],
    value: 'Cost‑per‑lead ↓32 %',
    timeline: '3 weeks',
  },
  'daves-hot-chicken': {
    title: 'Dave’s Hot Chicken Concept',
    desc:
      'Menu revamp concept highlighting heat levels with dynamic color coding.',
    images: [
      '/gallery/DavesSando.jpg',
      '/gallery/DavesSoda.JPG',
      '/gallery/DavesRemakeVideo.mp4',
    ],
    services: 'Menu Design · UI',
    tools: ['figma', 'illustrator'],
    value: 'Streamlined ordering flow',
    timeline: '1.5 weeks',
  },
  buddys: {
    title: 'Buddy’s Campaign',
    desc:
      'Integrated campaign for Buddy’s pet food featuring playful mascots.',
    images: ['/gallery/buddys.webp'],
    services: 'Campaign · Illustration',
    tools: ['photoshop', 'aftereffects'],
    value: 'Brand awareness ↑40 %',
    timeline: '4 weeks',
  },
  darko: {
    title: 'Darko Design System',
    desc:
      'Reusable component library and style guide for a SaaS dashboard.',
    images: [
      '/gallery/DarkoBrand.png',
      '/gallery/DarkoBrandin1.jpg',
      '/gallery/DarkoBrandin2.jpg',
      '/gallery/DarkoBrandin3.jpg',
      '/gallery/DarkoIphone.png',
      '/gallery/darko colored logo.jpg',
      '/gallery/campaigns.png',
    ],
    services: 'Design System · UI/UX',
    tools: ['figma'],
    value: 'Dev hand‑off time ↓50 %',
    timeline: '3 weeks',
  },
  'threatlocker-australia': {
    title: 'ThreatLocker Australia Campaign',
    desc:
      'Localized launch campaign introducing ThreatLocker to the AU market.',
    images: ['/gallery/TLAUArt1.jpg','/gallery/TLAUArt3.jpg','/gallery/TLWildAU1.png','/gallery/TLWildAU2.png',
      '/gallery/TLAUBill1.png','/gallery/TLAUBill2.png','/gallery/TLAUBill3.png','/gallery/TLAUBill5.png',

    ],
    services: 'Campaign · Digital & Print',
    tools: ['illustrator', 'photoshop'],
    value: '150+ qualified leads in first month',
    timeline: '2 weeks',
  },
  'threatlocker-ucf': {
    title: 'ThreatLocker × UCF Stadium Activation',
    desc:
      'In‑stadium LED animations and promo materials for UCF football games.',
    images: ['/gallery/TLUCF1.jpg','/gallery/TLUCF2.jpg','/gallery/TLUCF3.jpg','/gallery/TLUCF4.jpg',],
    services: 'Live Event Graphics · Motion',
    tools: ['aftereffects', 'illustrator'],
    value: 'Audience reach 45 k per game',
    timeline: '2 weeks',
  },
  'threatlocker-orlando-city': {
    title: 'ThreatLocker Orlando City Partnership',
    desc:
      'Sponsorship creative across Jumbotron loops, social bites, and pitch‑side LEDs.',
    images: ['/gallery/TLOrlandoCArt.gif','/gallery/TLOrlandoC1.png','/gallery/TLOrlandoC2.png','/gallery/OrlandoCity.mp4'],
    services: 'Sponsorship Creative · Motion',
    tools: ['aftereffects', 'photoshop'],
    value: 'Social engagement ↑27 %',
    timeline: '2 weeks',
  },
  'threatlocker-microsoft-extension': {
    title: 'ThreatLocker Microsoft Edge Extension',
    desc:
      'UI design & iconography for a browser extension that surfaces real‑time policy alerts.',
    images: [
      '/gallery/TLweb1.png',
      '/gallery/TLweb2.png',
      '/gallery/TLweb3.png',
      '/gallery/TLweb4.png',
      '/gallery/TLwebsmall.png',
      '/gallery/TLwebTitle.png',
    ],
    services: 'Product UI · Icon Design',
    tools: ['figma', 'illustrator'],
    value: 'User adoption 3 k installs first quarter',
    timeline: '5 weeks',
  },
};

/* pattern that defines tile sizes (lg / wide / tall / sm) */
const sizePattern = ['lg', 'sm', 'wide', 'tall', 'sm'];

const ProjectDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const data = projectData[id];

  /* ───────── Lightbox state & keyboard nav ───────── */
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const keyHandler = useCallback(
    (e) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight')
        setLightboxIdx((i) => (i + 1) % data.images.length);
      if (e.key === 'ArrowLeft')
        setLightboxIdx((i) => (i - 1 + data.images.length) % data.images.length);
    },
    [lightboxIdx, data?.images.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  }, [keyHandler]);

  if (!data) return <div className={cls.notFound}>Project not found.</div>;

  /* helper: detect video vs image */
  const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

  return (
    <section className={cls.projectSection}>
      <button className={cls.backBtn} onClick={() => nav(-1)}>
        ← Back
      </button>

      {/* ───────── Hero Row ───────── */}
      <header className={cls.hero}>
        <div className={cls.headText}>
          <h1 className={cls.title}>{data.title}</h1>
          <p className={cls.desc}>{data.desc}</p>

          {/* Challenge Addressed – purple accent bar */}
          <p className={cls.challenge}>
            <strong>Challenge&nbsp;Addressed&nbsp;→</strong>&nbsp;{data.value}
          </p>
        </div>

        <aside className={cls.meta}>
          <Meta label="Services" value={data.services} />
          <Meta
            label="Tools"
            value={data.tools?.join(', ')}
            iconList={data.tools}
          />
          <Meta label="Impact" value={data.value} />
          <Meta label="Timeline" value={data.timeline} />
        </aside>
      </header>

      {/* ───────── Masonry Grid ───────── */}
      <div className={cls.bento}>
        {data.images.map((src, i) => (
          <div
            key={i}
            className={`${cls.tile} ${
              cls[sizePattern[i % sizePattern.length]]
            }`}
            onClick={() => setLightboxIdx(i)}
          >
            {isVideo(src) ? (
              <video
                src={src}
                controls
                style={{ width: '100%', borderRadius: 'inherit' }}
              />
            ) : (
              <img
                src={src}
                alt={`${data.title} ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        ))}
      </div>

      {/* ───────── Lightbox Overlay ───────── */}
      {lightboxIdx !== null && (
        <div className={cls.lightbox}>
          <button
            className={`${cls.lightboxBtn} ${cls.prev}`}
            onClick={() =>
              setLightboxIdx(
                (lightboxIdx - 1 + data.images.length) % data.images.length
              )
            }
            aria-label="Previous"
          >
            ‹
          </button>

          {isVideo(data.images[lightboxIdx]) ? (
            <video
              className={cls.lightboxImg}
              src={data.images[lightboxIdx]}
              controls
              autoPlay
            />
          ) : (
            <img
              className={cls.lightboxImg}
              src={data.images[lightboxIdx]}
              alt={`${data.title} view`}
            />
          )}

          <button
            className={`${cls.lightboxBtn} ${cls.next}`}
            onClick={() =>
              setLightboxIdx((lightboxIdx + 1) % data.images.length)
            }
            aria-label="Next"
          >
            ›
          </button>

          <button
            className={cls.close}
            onClick={() => setLightboxIdx(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

/* small helper for the meta column */
const Meta = ({ label, value, iconList = [] }) => (
  <div className={cls.metaBlock}>
    <strong>{label}</strong>
    {iconList.length ? (
      <div className={cls.iconRow}>
        {iconList.map((tool) => (
          <img key={tool} src={`/tools/${tool}.png`} alt={tool} title={tool} />
        ))}
      </div>
    ) : (
      <p>{value}</p>
    )}
  </div>
);

export default ProjectDetail;
