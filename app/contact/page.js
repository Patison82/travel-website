"use client"; // Directive for Next.js to handle client-side rendering

import React from "react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion"; // Framer Motion for animations
import Image from "next/image"; // Next.js Image component for optimized image handling

// Array of team members with their details
const teamMembers = [
  {
    name: "Patrycja Wozniewicz",
    email: "pati.13@gmail.com",
    phone: "+123456789",
    image: "/team_images/pati.png",
  },
  {
    name: "Anastasios Antinidis",
    email: "anastasios@hotmail.com",
    phone: "+987654321",
    image: "/team_images/anastasios.png",
  },
  {
    name: "Viktoriia Kaliberda",
    email: "viki@gmail.com",
    phone: "+1122334455",
    image: "/team_images/viki.png",
  },
  {
    name: "Ali Hossaini",
    email: "ali@hotmail.com",
    phone: "+5566778899",
    image: "/team_images/ali.png",
  },
  {
    name: "Samira Hosseini",
    email: "samira@gmail.com",
    phone: "+9988776655",
    image: "/team_images/samira.png",
  },
  {
    name: "Andreas Stroianetki",
    email: "andreas@hotmail.com",
    phone: "+4433221100",
    image: "/team_images/andreas.png",
  },
];

const ContactPage = () => {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-center text-3xl font-bold text-black mt-[6rem] mb-8">
          Contact Us
        </h1>
        <p className="text-center text-2xl text-primary mb-8">
          If you have any questions or need assistance, feel free to contact us
          using the form below or reach out to one of our team members directly.
          Your PAVASA Team!
        </p>

        {/* ContactForm Section */}
        <div className=" rounded-2xl p-6 shadow-lg mb-8">
          <ContactForm />
        </div>

        {/* PAVASA Team Section */}
        <div className="team-section mt-8">
          <h2 className="text-2xl font-bold text-center text-black mb-4">
            PAVASA Team
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <motion.li
                key={index}
                className="bg-secondary p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                {/* Team member image */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-30 h-30 object-cover rounded-full border-4 border-primary"
                  />
                </div>
                <strong className="block text-lg text-primary text-center">
                  {member.name}
                </strong>
                <span className="block text-primary text-xl text-center">
                  E-mail:{" "}
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:underline"
                  >
                    {member.email}
                  </a>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="bg-secondary rounded-2xl p-6 shadow-lg mt-[4rem] text-center">
          <h2 className="text-2xl font-bold text-black mb-8">Contact Us:</h2>

          <div className="grid grid-cols-3 ml-[8rem] mb-4">
            {/* Mail */}
            <div className="flex items-center">
              <span
                className="text-primary text-2xl font-semibold mr-2"
                role="img"
                aria-label="Mail Icon"
              >
                📧
              </span>
              <div className="text-primary text-l font-semibold">
                <p className="mb-0">Mail:</p>
                <a
                  href="mailto:pavasa-team@gmail.com"
                  className="ml-1 hover:underline"
                >
                  pavasa-team@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <span
                className="text-primary text-2xl font-semibold mr-2"
                role="img"
                aria-label="Phone Icon"
              >
                📞
              </span>
              <div className="text-primary text-l font-semibold">
                <p className="mb-0">Phone:</p>
                <a href="tel:+491733868411" className="ml-1 hover:underline">
                  +49 (0) 173 3868 411
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center">
              <span
                className="text-primary text-2xl font-semibold mr-0.5"
                role="img"
                aria-label="Address Icon"
              >
                🏢
              </span>
              <div className="text-primary text-l font-semibold">
                <p className="mb-0">Address:</p>
                <p className="ml-1 display flex">
                  Simsseestraße 6, 81549 Munich, Germany
                </p>
              </div>
            </div>
          </div>

          <p className="text-primary text-lg font-semibold mt-8">
            We are available from Monday to Friday from 10am to 4pm
          </p>
        </div>
        {/* Map Section */}
        <div className="map-section mt-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.964299903417!2d11.623651015891122!3d48.10368057922006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf5c29c6f42f%3A0x8484f9a6dc927ff2!2sSimsseestra%C3%9Fe%206%2C%2081549%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1687005827081!5m2!1sen!2sus"
            width="600"
            height="450"
            className="border-0 w-full h-96"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Footer Section */}
        <footer className="bg-primary text-white font-bold text-center p-5 mt-8">
          © 2024 | PAVASA Team Services
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
