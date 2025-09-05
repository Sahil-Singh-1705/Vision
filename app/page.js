"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Rocket, MonitorSmartphone, ShieldCheck, Palette, Code2, Smartphone, ChevronDown, Code, Paintbrush, Mail, Phone, } from 'lucide-react';

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="text-white min-h-screen font-sans">
      <section
       className="h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat"
       style={{
         backgroundImage: "url('/images/herored.jpg')",
       }}>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         Welcome to Vision
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg md:text-2xl mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Build modern apps with speed and style.
        </motion.p>
        <motion.button
          className="bg-red-600 text-black px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 transition flex items-center gap-1 cursor-pointer hover:bg-red-700 active:scale-90 active:bg-red-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link href="/">Get Started</Link><ArrowRight />
        </motion.button>
      </section>

      <section className="py-20 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neon-green mb-6">About Us</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
           At <span className="text-white font-semibold">Vision</span>, we’re dedicated to building high-performance, beautifully designed, and secure web experiences. Our mission is to empower developers and businesses with tools that scale, impress, and perform at their best — whether you&apos;re building a portfolio or a product at scale.
          </p> 
          <Link href="/about" className="flex justify-center">
            <button className="bg-red-600 text-black font-semibold px-6 py-3 rounded-full text-lg gap-1 transition flex items-center cursor-pointer hover:scale-105 hover:bg-red-700 active:bg-red-800 active:scale-90">
              Know More<ArrowRight />
            </button>
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-black text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-gray-400 mt-3">Explore what we offer to boost your web presence.</p>
        </div>
      
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg flex flex-col justify-between hover:shadow-lg hover:shadow-red-600/50">
            <div>
              <div className="flex justify-center mb-4">
                <Code size={40}/>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Web Development</h3>
              <p className="text-gray-300 text-center mb-6">
                Build fast, scalable, and modern web apps with optimized performance.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <button className="mt-auto bg-red-600 hover:bg-red-700 text-black font-semibold px-5 py-2 rounded-full text-sm cursor-pointer flex items-center gap-1 transition active:scale-90">
                  Learn More <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
      
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg flex flex-col justify-between hover:shadow-lg hover:shadow-red-600/50">
            <div>
              <div className="flex justify-center mb-4">
                <Paintbrush size={40}/>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">UI/UX Design</h3>
              <p className="text-gray-300 text-center mb-6">
                Create beautiful, intuitive, and responsive interfaces tailored to your users.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <button className="mt-auto bg-red-600 hover:bg-red-700 text-black font-semibold px-5 py-2 rounded-full text-sm cursor-pointer flex items-center gap-1 transition active:scale-90">
                  Learn More <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
      
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg flex flex-col justify-between hover:shadow-lg hover:shadow-red-600/50">
            <div>
              <div className="flex justify-center mb-4">
                <ShieldCheck size={40}/>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Security & Optimization</h3>
              <p className="text-gray-300 text-center mb-6">
                Protect your apps and enhance speed with best-in-class practices.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <button className="mt-auto bg-red-600 hover:bg-red-700 text-black font-semibold px-5 py-2 rounded-full text-sm cursor-pointer flex items-center gap-1 transition active:scale-90">
                  Learn More <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-black text-white">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-400 mt-3">Empowering your vision with innovation, trust, and results that matter.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Rocket size={40}/>,
              title: "Fast Performance",
              desc: "Lightning-fast speeds optimized for performance."
            },
            {
              icon: <MonitorSmartphone size={40} />,
              title: "Modern UI/UX",
              desc: "Sleek and intuitive design for an engaging experience."
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Secure & Scalable",
              desc: "Built with best practices in mind."
            },
            {
              icon: <Palette size={40}/>, 
              title: "Customizable Themes",
              desc: "Easily switch between light, dark, or neon themes with full design flexibility."
            },
            {
              icon: <Code2 size={40}/>, 
              title: "Developer Friendly",
              desc: "Clean code, modular components, and full documentation for fast integration."
            },
            {
              icon: <Smartphone size={40}/>, 
              title: "Responsive Design",
              desc: "Looks great on all devices — from mobile to desktop, always pixel-perfect."
            }          

          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-red-800 rounded-xl p-6 shadow-lg hover:scale-105 transition hover:shadow-lg hover:shadow-gray-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <div className="flex justify-center mb-3">
               {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2"> {item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-white text-center">
       <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Built With</h2>
        <p className="mt-3 text-gray-400">Built with modern tech and smart design for speed, reliability, and a seamless experience.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {[
            { name: "React.js", icon: "images/ReactLogo.svg" },
            { name: "Tailwind CSS", icon: "images/tail-2.png" },
            { name: "Node.js", icon: "images/node-1.png" },
            { name: "Express.js", icon: "images/ex2.webp" },
            { name: "Next.js", icon: "images/next-2.png" },
            { name: "Framer Motion", icon: "images/motion-1.png" },
            { name: "Lucide Icons", icon: "images/lucide-1.png" },
            { name: "Vercel", icon: "images/Logo-Vercel.png" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3 hover:scale-110 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Image src={`/${tech.icon}`} alt={tech.name} width={70} height={70} className="rounded-full" />
              <p className="text-lg text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black text-white px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our Blogs</h2>
          <p className="text-gray-400 mt-3">Latest insights, tips, and updates from the Vision team.</p>
        </div>
      
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition hover:shadow-lg hover:shadow-red-600/50">
           <Image src="/images/blog1.png" alt="Blog 1" width={400} height={208} className="w-full h-52 object-cover"/>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neon-green mb-2">Modern Web Design</h3>
              <p className="text-gray-300 text-sm mb-4">
                Discover how new layouts, themes, and UI patterns can elevate your web design experience and make your product stand out.
              </p>
              <a href="#" className="text-red-500 hover:underline hover:underline-offset-2 text-sm">
                Read more →
              </a>
            </div>
          </div>
      
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition hover:shadow-lg hover:shadow-red-600/50">
            <Image src="/images/fastred.jpg" alt="Blog 2" width={400} height={208} className="w-full h-52 object-cover"/>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neon-green mb-2">Boosting Performance</h3>
              <p className="text-gray-300 text-sm mb-4">
                Learn how we optimize loading times, reduce bundle sizes, and make your web apps run faster and smoother than ever before.
              </p>
              <a href="#" className="text-red-500 hover:underline hover:underline-offset-2 text-sm">
                Read more →
              </a>
            </div>
          </div>
      
          <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition hover:shadow-lg hover:shadow-red-600/50">
           <Image src="/images/secure.jpg" alt="Blog 3" width={400} height={208} className="w-full h-52 object-cover"/>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-neon-green mb-2">Web Security Essentials</h3>
              <p className="text-gray-300 text-sm mb-4">
                Explore top strategies to protect your users&apos; data and make your applications more secure against threats and breaches.
              </p>
              <a href="#" className="text-red-500 hover:underline hover:underline-offset-2 text-sm">
                Read more →
              </a>
            </div>
          </div>

       </div>
      </section>
 
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">FAQs</h2>
          <p className="text-gray-400 mt-3">Answers to the most common questions about Vision.</p>
        </div>
      
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "What is Vision?",
              answer:
                "-> Vision is a modern platform focused on speed, security, and beautiful design for web applications.",
            },
            {
              question: "Is Vision mobile-friendly?",
              answer:
                "-> Yes! All components and layouts are fully responsive and optimized for all screen sizes.",
            },
            {
              question: "Can I customize the design?",
              answer:
                "-> Absolutely. Vision offers flexible theming including dark mode, neon styles, and custom layouts.",
            },
          ].map((faq, i) => (
            <div key={i}>
              <div
                className={`bg-red-800 p-5 cursor-pointer rounded-t-xl ${
                  openIndex === i ? "" : "rounded-b-xl"
                }`}
                onClick={() => setOpenIndex(i === openIndex ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`text-white transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
        
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-900 text-gray-300 text-sm p-5 border-t border-gray-800 rounded-b-xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <hr className="text-gray-400 w-full"/>

      <section 
       className="bg-gray-900 text-white py-20 px-6 md:px-20 bg-cover"
       style={{
         backgroundImage: "url('/images/contact-3.jpg')",
       }}
      >
      <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2>Let&apos;s Build Something Great Together</h2>
          <p>We&apos;d love to hear from you.</p>


        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-800 text-white text-lg font-medium py-3 px-6 rounded-full transition duration-300 active:scale-90"
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
}
