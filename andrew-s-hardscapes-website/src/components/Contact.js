import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br /><br />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}

export default Contact;