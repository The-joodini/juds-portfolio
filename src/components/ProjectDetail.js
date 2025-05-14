// src/components/ProjectDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cls from './ProjectDetail.module.css';

/* ------------------------------------------------------------------ */
/*  Project data – add or edit freely                                 */
/* ------------------------------------------------------------------ */
const projectData = {
  'camp-fever': {
    title: 'Camp Fever Shirt',
    desc:  'Custom shirt design for a summer youth retreat brand, using bold, vibrant visuals.',
    images: ['/gallery/campFeverShirt.webp'],
    services: 'Branding · Visual Design',
    tools:    ['photoshop', 'illustrator'],
    value:    'Energetic visuals that connect with youth',
    timeline: '2 weeks'
  },
  'coke-can': {
    title: 'Coke Can Concept',
    desc:  'Minimal, bold red re‑imagining of a classic brand icon.',
    images: ['/gallery/cokeCan.webp', '/gallery/cokeMockup.webp'],
    services: 'Product Concept',
    tools:    ['illustrator', 'figma'],
    value:    'Modern shelf impact',
    timeline: '1 week'
  },
  'threatlocker-race': {
    title: 'ThreatLocker Race Campaign',
    desc:  'High‑speed cybersecurity event branding, motion assets and on‑site screen content.',
    images: [
      '/gallery/ThreatlockerRace1.webp',
      '/gallery/ThreatlockerRace2.webp',
      '/gallery/ThreatlockerRace3.webp'
    ],
    services: 'Campaign Branding · Motion',
    tools:    ['illustrator', 'aftereffects'],
    value:    'Event engagement & visibility ↑38 %',
    timeline: '2 weeks'
  }
  /* ---- add the rest of your projects here ---- */
};

/* pattern that defines tile sizes (lg / wide / tall / sm) */
const sizePattern = ['lg', 'sm', 'wide', 'tall', 'sm'];

const ProjectDetail = () => {
  const { id } = useParams();
  const nav    = useNavigate();
  const data   = projectData[id];

  if (!data) return <div className={cls.notFound}>Project not found.</div>;

  return (
    <section className={cls.projectSection}>
      <button className={cls.backBtn} onClick={() => nav(-1)}>← Back</button>

      {/* ───────────────── Hero Row ───────────────── */}
      <header className={cls.hero}>
        <div className={cls.headText}>
          <h1 className={cls.title}>{data.title}</h1>
          <p className={cls.desc}>{data.desc}</p>
        </div>

        <aside className={cls.meta}>
          <Meta label="Services"  value={data.services} />
          <Meta label="Tools"     value={data.tools?.join(', ')} iconList={data.tools} />
          <Meta label="Value"     value={data.value} />
          <Meta label="Timeline"  value={data.timeline} />
        </aside>
      </header>

      {/* ───────────────── Bento Grid ──────────────── */}
      <div className={cls.bento}>
        {data.images.map((src, i) => (
          <div
            key={i}
            className={`${cls.tile} ${cls[sizePattern[i % sizePattern.length]]}`}
          >
            <img
              src={src}
              alt={`${data.title} ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
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
