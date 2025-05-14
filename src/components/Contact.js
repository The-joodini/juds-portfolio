import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef       = useRef(null);
  const [sending,setSending] = useState(false);
  const [toast,setToast]     = useState(null);
  const [burst,setBurst]     = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      formRef.current,
      { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC }
    )
    .then(() => {
      setToast({ ok:true, msg:'Message delivered — thank you!' });
      setBurst(true);
      formRef.current.reset();
      setTimeout(()=> setBurst(false), 3500);
    })
    /* ★ show real error so you know WHAT failed */
    .catch((err) => {
      console.error('EmailJS error:', err);
      setToast({
        ok:false,
        msg:
          err?.text?.includes('User ID')
            ? 'Public key is wrong / missing.'
            : err?.text?.includes('template')
            ? 'Template ID not found.'
            : 'Couldn’t send — check console.'
      });
    })
    .finally(()=> setSending(false));
  };

  /* --------------- JSX unchanged below --------------- */
  return (
    <section className="contact-section" id="contact">
      <h2>Let’s Connect 👋</h2>

      <form ref={formRef} onSubmit={sendEmail} className="contact-card">
        <input name="user_name"  type="text"  placeholder="Your Name (or Alias 😎)" className="contact-input" required/>
        <input name="user_email" type="email" placeholder="Email (I don’t spam, promise)" className="contact-input" required/>
        <textarea name="message" rows="5" placeholder="Drop your thoughts, ideas, or compliments 🥳" className="contact-input" required/>
        <button type="submit" className="contact-submit" disabled={sending} aria-busy={sending}>
          {sending ? 'Sending…' : 'Send It 💌'}
          <span className="ripple"/>
        </button>
      </form>

      {toast && <p className={`toast ${toast.ok?'success':'error'}`}>{toast.msg}</p>}

      {burst && (
        <>
          <div className="confetti-wrapper">
            {[...Array(26)].map((_,i)=> <span key={i} className="confetti" style={{'--index':i}} />)}
          </div>
          <div className="star-flare"/>
        </>
      )}
    </section>
  );
};

export default Contact;
