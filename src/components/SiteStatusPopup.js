// src/components/SiteStatusPopup.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const ACCENT = '#6e3fff';                          // same as Contact button

/* ----- static keyframes injected once ----- */
const styleTag = document.createElement('style');
styleTag.innerHTML = `
@keyframes wave {
  0%,60%,100% { transform:rotate(0deg); }
  30%         { transform:rotate(18deg); }
}
.react-word:hover{
  background: linear-gradient(90deg,#6e3fff 0%,#d36fff 100%);
  -webkit-background-clip:text;
  color:transparent;
}
`;
document.head.appendChild(styleTag);

/* ----- inline style map ----- */
const S = {
  overlay:{
    position:'fixed',inset:0,background:'rgba(0,0,0,.75)',
    display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999,
  },
  card:{
    width:'min(92vw,480px)',background:'#111',border:`2px solid ${ACCENT}`,
    borderRadius:'20px',padding:'48px 32px 40px',color:'#fff',
    fontFamily:"'Chivo',sans-serif",textAlign:'center',
    transform:'scale(.9)',opacity:0,animation:'fadeIn .4s forwards',
  },
  heading:{fontSize:'1.85rem',margin:'0 0 18px'},
  hand:{display:'inline-block',animation:'wave 2.4s infinite',transformOrigin:'70% 70%'},
  body:{fontSize:'1.1rem',lineHeight:1.6,color:'#ccc',marginBottom:28},
  btnPrimary:{
    padding:'12px 26px',border:'none',borderRadius:'28px',
    background:ACCENT,color:'#fff',fontWeight:600,fontSize:'1rem',cursor:'pointer',
  },
  btnGhost:{
    marginTop:18,padding:'9px 24px',border:`1px solid ${ACCENT}`,
    borderRadius:'24px',background:'transparent',color:ACCENT,
    fontWeight:500,fontSize:'.95rem',cursor:'pointer',
  },
};

/* fade keyframe (inline to avoid extra file) */
const fadeTag = document.createElement('style');
fadeTag.innerHTML = `@keyframes fadeIn{to{opacity:1;transform:scale(1);}}`;
document.head.appendChild(fadeTag);

const SiteStatusPopup = () => {
  const [open,setOpen] = useState(false);
  useEffect(()=>setOpen(true),[]);
  if(!open) return null;
  return(
    <div style={S.overlay}>
      <div style={S.card}>
        <h2 style={S.heading}>
          Hey there <span style={S.hand}>👋</span>
        </h2>
        <p style={S.body}>
          This site is still in <span style={{color:ACCENT}}>code‑mode</span>.
          Feel free to explore my work—pardon any hiccups!
          <br/><br/>
          I’m building it with&nbsp;
          <span className="react-word">React</span> to show my dev skills,
          while the visuals highlight my graphic‑design and brand experience.
        </p>

        {/* primary action → scroll to Contact, then close */}
        <Link to="contact" smooth duration={600} onClick={()=>setOpen(false)} style={{textDecoration:'none'}}>
          <button style={S.btnPrimary}>Say hi!</button>
        </Link>

        {/* spacer */}
        <div style={{height:16}}/>

        <button style={S.btnGhost} onClick={()=>setOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default SiteStatusPopup;
