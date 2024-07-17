import React, { useState } from 'react';




const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form  onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-secondary p-[5rem]  rounded-2xl shadow">
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold text-primary mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold text-primary mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block font-semibold text-primary mb-2">Subject: </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-semibold text-primary mb-2">Message: </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
      </div>
      <div className="flex justify-center ">
      <button type="submit" className="w-60 p-3  font-semibold bg-primary text-black hover:bg-secondaryAccent border-4 rounded">
        Send Message
      </button>
      </div>
    </form>
  );
};

export default ContactForm;