'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, } from 'lucide-react';

const Contact = () => {
  return (
    <main className="bg-black text-white font-sans">

     <section
        className="h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero3.jpg')",
        }}
      >
        <motion.h1 
         className="text-5xl md:text-7xl font-bold text-neon-green mb-4"
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p className="text-gray-300 text-lg md:text-2xl max-w-2xl"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.5 }}
        >
          We'd love to hear from you. Fill out the form or contact us directly.
        </motion.p>
      </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-5xl font-bold">Contact Information</h2>
            <p className="text-gray-300">
              Feel free to reach out to us through any of the following ways. We’d love to hear from you!
            </p>
    
            <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
              <motion.div 
                 className="bg-red-800 p-6 rounded-xl transition shadow-lg hover:shadow-gray-500/50 hover:scale-105 space-y-4"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}>
                 <MapPin className="mx-auto text-white" size={40} />
                 <h3 className="text-xl font-semibold mb-2">Address:</h3>
                 <p>123 Vision Street,<br />Ahmedabad, India.</p>
              </motion.div>
    
              <motion.div 
                 className="bg-red-800 p-6 rounded-xl transition shadow-lg hover:shadow-gray-500/50 hover:scale-105 space-y-4"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}>
                <Phone className="mx-auto text-white" size={40} />
                <h3 className="text-xl font-semibold mb-2">Phone:</h3>
                <p>+91 93742 56348<br />Mon - Fri: 10:00 AM - 7:00 PM</p>
              </motion.div>
    
              <motion.div className="bg-red-800 p-6 rounded-xl transition shadow-lg hover:shadow-gray-500/50 hover:scale-105 space-y-4"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}>
                <Mail className="mx-auto text-white" size={40} />
                <h3 className="text-xl font-semibold mb-2">Email:</h3>
                <p>vision@gmail.com<br />- We reply within 24 hours</p>
              </motion.div>
            </div>
          </div>
        </section>
    
        <section className="py-20 px-6">
         <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6 text-center bg-cover"
         style={{
           backgroundImage: "url('/images/contact6.jpg')",
         }}>
          
          <Mail className="mx-auto text-red-500 w-13 h-13 mb-8 bg-gray-100 rounded-2xl p-1"/>
  
          <form className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-300 p-3 rounded-xl w-full outline-red-600 focus:outline-2 text-black font-medium"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-300 p-3 rounded-xl w-full outline-red-600 focus:outline-2 text-black font-medium"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-300 p-3 rounded-xl w-full outline-red-600 focus:outline-2 text-black font-medium"
            />
            <textarea
              rows="5"
              placeholder="Your Message..."
              className="bg-gray-300 p-3 rounded-xl w-full outline-red-600 focus:outline-2 resize-none text-black font-medium"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-all text-white font-semibold py-3 px-6 rounded-xl w-full cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </main>
  );
};

export default Contact;
