import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center">CONTACT</h2>
        <ContactForm />
      </div>
    </section>
  );
}