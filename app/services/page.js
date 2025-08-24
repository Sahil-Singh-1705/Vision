'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, } from 'lucide-react';

const Services = () => {
  return (
    <main className="bg-blacl text-whitee font-sans">

      <section
        className="h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/starred.jpg')",
        }}
      >
        <motion.h1 
         className="text-5xl md:text-7xl font-bold text-neon-green mb-4"
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p className="text-gray-300 text-lg md:text-2xl max-w-2xl"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.5 }}
        >
          Solutions that blend speed, design, and security — tailored for your business needs.
        </motion.p>
      </section>

       <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left ml-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Web Development
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Build <span className="text-red-400 font-semibold">fast</span>, 
              <span className="text-red-400 font-semibold"> responsive</span>, and 
              <span className="text-red-400 font-semibold"> scalable</span> web applications with cutting-edge technologies like React and Next.js.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-gray-900 p-2 rounded-2xl shadow-lg hover:shadow-red-600/50 transition hover:scale-105">
              <img
                src="/images/redworld.avif"
                alt="Web Development"
                className="w-105 h-80 object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="bg-gray-900 p-2 rounded-2xl shadow-lg hover:shadow-red-600/50 transition hover:scale-105">
              <img
                src="/images/section6.jpg"
                alt="UI/UX Design"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              UI/UX Design
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We craft <span className="text-red-400 font-semibold">beautiful</span>, 
              <span className="text-red-400 font-semibold pl-1">intuitive</span>, and
               <span className="text-red-400 font-semibold pl-1">user-centered</span> interfaces that elevate every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left ml-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security & Optimization
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ensure your product is <span className="text-red-400 font-semibold">secure</span>, 
              <span className="text-red-400 font-semibold pl-1">fast</span>, and 
              <span className="text-red-400 font-semibold pl-1">SEO-friendly</span> with our performance tuning and security-first strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-gray-900 p-2 rounded-2xl shadow-lg hover:shadow-red-600/50 transition hover:scale-105">
              <img
                src="/images/lock.jpg"
                alt="Security & Optimization"
                className="w-105 h-80 object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="text-gray-400 w-full"/>

      <section className="text-white py-20 px-6 md:px-20 bg-cover"
      style={{
        backgroundImage: "url('/images/contact-3.jpg')",
      }}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Have an idea or project in mind? We’d love to hear from you.
            </p>
  
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-800 text-white text-lg font-medium py-3 px-6 rounded-full transition duration-300 active:scale-80"
              >
                Contact Us <ArrowRight size={22} />
              </Link>
            </div>
  
            <div className="flex justify-center gap-6 flex-wrap items-center text-gray-300 mt-4">
              <div className="flex items-center gap-2">
                <Phone size={25} className="text-green-500"/>
                <span>+91 93742 56348</span>
              </div>
  
              <div className="flex items-center gap-2">
                <Mail size={26} className="text-yellow-400"/>
                <span>vision@gmail.com</span>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Services;
