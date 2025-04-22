import React, { useState } from 'react';
import styles from '../styles';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out. I’ll respond faster than a loading spinner. 😉");
  };

  return (
    <section style={styles.contactContainer} id="contact">
      <h2 style={styles.contactHeader}>Let’s Connect 👋</h2>

      <form onSubmit={handleSubmit} style={styles.contactForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name (or Alias 😎)"
          value={form.name}
          onChange={handleChange}
          style={styles.contactInput}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email (I don’t spam, promise)"
          value={form.email}
          onChange={handleChange}
          style={styles.contactInput}
          required
        />
        <textarea
          name="message"
          placeholder="Drop your thoughts, ideas, or compliments 🥳"
          rows="5"
          value={form.message}
          onChange={handleChange}
          style={styles.contactInput}
          required
        ></textarea>
        <button type="submit" style={styles.contactButton} className="contact-submit">
          Send It 💌
        </button>
      </form>
    </section>
  );
};

export default Contact;
