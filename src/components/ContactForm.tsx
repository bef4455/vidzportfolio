import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Paramètres d'EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_y2w8ut5',      // Remplacez par votre Service ID
        'template_0c0to7d',     // Remplacez par votre Template ID
        templateParams,
        '-C458rclonC-ySIGk'     // Remplacez par votre User ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsMessageSent(true);
        // Masquer le popup après quelques secondes
        setTimeout(() => {
          setIsMessageSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative max-w-lg mx-auto p-4 md:p-0">
      {isMessageSent && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white shadow-lg rounded-md p-4 flex items-center space-x-4">
          <div className="text-green-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-700">
            Le message a bien été envoyé!
          </div>
          <button
            onClick={() => setIsMessageSent(false)}
            className="text-gray-400 hover:text-gray-800 ml-auto"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm md:text-base font-medium mb-1 md:mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm md:text-base font-medium mb-1 md:mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm md:text-base font-medium mb-1 md:mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 md:px-4 md:py-3 bg-zinc-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none text-sm md:text-base"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-neutral-300 hover:bg-blue-700 text-black font-medium py-2 md:py-3 rounded-lg transition-colors duration-200 text-sm md:text-base"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
