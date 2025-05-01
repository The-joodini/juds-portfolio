// ProjectDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../components/ProjectDetail.module.css';

const projectData = {
  'camp-fever': {
    title: 'Camp Fever Shirt',
    description: 'Custom shirt design for a summer youth retreat brand, using bold, vibrant visuals.',
    image: '/gallery/campFeverShirt.jpg',
    services: 'Branding, Visual Design',
    tools: 'Photoshop, Illustrator',
    value: 'Engaging youth with energetic visuals',
    timeline: '2 weeks',
  },
  'coke-can': {
    title: 'Coke Can Design',
    description: 'Concept can design exploring minimalism and bold red branding for Coca-Cola.',
    image: '/gallery/cokeCan.png',
    services: 'Product Design',
    tools: 'Illustrator, Figma',
    value: 'Bold modern brand refresh',
    timeline: '1 week',
  },
  'mom-fries': {
    title: 'Mom’s Fries Ad',
    description: 'Ad series for a fictional food brand, focused on nostalgia and crisp textures.',
    image: '/gallery/momFries.jpg',
    services: 'Advertising Design',
    tools: 'Photoshop, InDesign',
    value: 'Nostalgic appeal & craveability',
    timeline: '3 days',
  },
  'cheesesteak': {
    title: 'Cheesesteak Poster',
    description: 'Promotional poster design for a Philly cheesesteak pop-up event.',
    image: '/gallery/cheesesteak.png',
    services: 'Poster & Print Design',
    tools: 'Figma, Photoshop',
    value: 'Street-style brand awareness',
    timeline: '1 week',
  },
  'threatlocker-steps': {
    title: 'Threatlocker 12-Step',
    description: 'Internal visual roadmap design outlining core cybersecurity workflows.',
    image: '/gallery/Threatlocker_12step.jpg',
    services: 'Infographic & Internal Comms',
    tools: 'Illustrator, Figma',
    value: 'Clarity for team workflow',
    timeline: '4 days',
  },
  'threatlocker-race': {
    title: 'Threatlocker Race Campaign',
    description: 'Marketing campaign materials for a high-speed cybersecurity event.',
    image: '/gallery/ThreatlockerRace.png',
    services: 'Campaign Branding',
    tools: 'Illustrator, After Effects',
    value: 'Event engagement and visibility',
    timeline: '2 weeks',
  },
  'moms-fuego': {
    title: 'Mom’s Fuego Branding',
    description: 'Complete identity for a fiery food truck — logo, ads, and packaging.',
    image: '/gallery/MomsFuego.jpg',
    services: 'Full Branding Package',
    tools: 'Photoshop, Illustrator, Figma',
    value: 'Spicy & strong food identity',
    timeline: '3 weeks',
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) {
    return <div className={styles.projectSection}>Project not found.</div>;
  }

  return (
    <div className={styles.projectSection}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className={styles.headerRow}>
        <div className={styles.headerTextLeft}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>

        <div className={styles.projectMetaRight}>
          <div className={styles.metaBlock}>
            <strong>Services</strong>
            <p>{project.services}</p>
          </div>
          <div className={styles.metaBlock}>
            <strong>Tools</strong>
            <p>{project.tools}</p>
          </div>
          <div className={styles.metaBlock}>
            <strong>Value</strong>
            <p>{project.value}</p>
          </div>
          <div className={styles.metaBlock}>
            <strong>Timeline</strong>
            <p>{project.timeline}</p>
          </div>
        </div>
      </div>

      <div className={styles.projectImageContainer}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', borderRadius: '20px' }}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
