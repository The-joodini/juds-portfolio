import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef                     = useRef(null);
  const [sending, setSending]       = useState(false);
  const [toast, setToast]           = useState(null);   // { ok,msg }
  const [burst, setBurst]           = useState(false);  // confetti flag

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        formRef.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC }
      )
      .then(() => {
        setToast({ ok: true, msg: 'Message delivered—thank you!' });
        setBurst(true);
        formRef.current.reset();
        setTimeout(() => setBurst(false), 3500);
      })
      .catch(() =>
        setToast({ ok: false, msg: 'Something went wrong. Try again?' })
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Let’s Connect 👋</h2>

      <form ref={formRef} onSubmit={sendEmail} className="contact-card">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name (or Alias 😎)"
          className="contact-input"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email (I don’t spam, promise)"
          className="contact-input"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Drop your thoughts, ideas, or compliments 🥳"
          className="contact-input"
          required
        />
        <button
          type="submit"
          className="contact-submit"
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? 'Sending…' : 'Send It 💌'}
          <span className="ripple" />
        </button>
      </form>

      {/* slide‑in toast */}
      {toast && (
        <p className={`toast ${toast.ok ? 'success' : 'error'}`}>{toast.msg}</p>
      )}

      {/* confetti + flare */}
      {burst && (
        <>
          <div className="confetti-wrapper">
            {[...Array(26)].map((_, i) => (
              <span key={i} className="confetti" style={{ '--index': i }} />
            ))}
          </div>
          <div className="star-flare" />
        </>
      )}
    </section>
  );
};

export default Contact;
