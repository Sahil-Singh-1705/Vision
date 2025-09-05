'use client';

import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';
import { LayoutTemplate, ShieldCheck, Zap, BadgeCheck, Paintbrush, Rocket, CircleUserRound, Mail, Phone, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <main className="bg-black text-white min-h-screen font-sans">

      <section
        className="h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/service6.jpg')",
        }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-neon-green mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Vision
        </motion.h1>
        <motion.p
          className="text-gray-200 text-lg md:text-2xl max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          At <span className="text-white font-bold">Vision</span>, we’re redefining how the modern web is built — combining <span className="text-red-400 font-bold">Speed, Security, and Stunning Design</span> into one seamless platform.
        </motion.p>
      </section>

      <div className="py-20 px-6 text-white space-y-20">
        
        <section className="py-20 px-6 bg-black text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            
            <motion.div
              className="space-y-6 text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We empower creators and developers with tools that prioritize
                <span className="text-red-400 font-semibold"> performance</span>, 
                <span className="text-red-400 font-semibold"> accessibility</span>, and 
                <span className="text-red-400 font-semibold"> aesthetics</span> — without compromise.
              </p>
            </motion.div>
        
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-gray-900 p-2 rounded-2xl shadow-lg hover:shadow-red-600/50 transition hover:scale-105">
               <Image
                src="/images/r-red.jpg"
                alt="Our Mission"
                width={1200}
                height={320}
                className="w-full h-80 object-cover rounded-xl"
              />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 text-center bg-black text-white">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white flex justify-center items-center gap-2">
              What We Do
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              Explore how Vision builds with performance, design, and scalability in mind.
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <LayoutTemplate size={40}/>,
                title: "Modern Web Architecture",
                desc: "Hybrid static + dynamic apps with frameworks like Next.js",
              },
              {
                icon: <Paintbrush size={40}/>,
                title: "UI Excellence",
                desc: "Mobile-first, pixel-perfect responsive design systems",
              },
              {
                icon: <Zap size={40}/>,
                title: "Performance First",
                desc: "Lightning-fast loading, caching, and smart media optimization",
              },
              {
                icon: <ShieldCheck size={40}/>,
                title: "Security-Focused",
                desc: "Infrastructure built from scratch for security and scalability",
              },
            ].map((item, i) => ( 
              <motion.div
                key={i}
                className="bg-red-800 rounded-xl p-6 shadow-lg hover:scale-105 transition hover:shadow-lg hover:shadow-gray-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-black text-white">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Who We Serve
            </h2>
            <p className="text-gray-400 text-lg">
              We build powerful tools for creators and innovators.
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              {
                image: "/images/startup.svg", 
                title: "Startups & Developers",
                desc: "Launch MVPs fast, ship scalable features, and design experiences that users love — ideal for founders and devs building modern apps.",
              },
              {
                image: "/images/b-red.jpg", 
                title: "Brands & Businesses",
                desc: "We help brands create polished, secure, and high-performance web platforms that reflect their identity and grow their audience.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition hover:shadow-red-600/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover-full bg-red-950"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white flex justify-center items-center gap-2">
             Our Values
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              We’re driven by principles that make our work impactful and meaningful.
            </p>
          </div>
        
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Rocket size={40} />,
                title: "Innovation-Driven",
                desc: "We embrace emerging technologies boldly to lead the modern web.",
              },
              {
                icon: <CircleUserRound size={40} />,
                title: "User-Centered",
                desc: "Every design and decision starts with your audience in mind.",
              },
              {
                icon: <BadgeCheck size={40} />,
                title: "Open & Honest",
                desc: "We believe in transparency, clarity, and trusted partnerships.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-red-800 rounded-xl p-6 shadow-lg hover:scale-105 transition hover:shadow-lg hover:shadow-gray-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <hr className='text-gray-400'/>

      <section className="bg-gray-900 text-white py-20 px-6 md:px-20 bg-cover"
      style={{
        backgroundImage: "url('/images/contact-3.jpg')",
      }}>
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
};

export default About;
