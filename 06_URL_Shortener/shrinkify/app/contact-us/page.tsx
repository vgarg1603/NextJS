'use client'
import React, { useState } from 'react';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to an API
    console.log({ name, email, message });
    setSubmitted(true);
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <div className="mx-auto my-4 max-w-7xl px-4">
      <h1 className="text-center text-3xl font-bold text-purple-900">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-purple-100 p-6 rounded-lg shadow-md mt-6">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-purple-50 border border-purple-300 text-purple-900 placeholder-purple-400 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 w-full p-3"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-purple-50 border border-purple-300 text-purple-900 placeholder-purple-400 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 w-full p-3"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-purple-50 border border-purple-300 text-purple-900 placeholder-purple-400 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 w-full p-3"
            rows={4}
            required
          />
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Send Message
          </button>
        </div>
      </form>
      {submitted && <p className="mt-4 text-green-600 text-center">Thank you for your message!</p>}
    </div>
  );
};

export default ContactUsPage;