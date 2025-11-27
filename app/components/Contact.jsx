import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "391fbf4f-7d5f-42c2-b51e-53957d3f9f7b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section 
      id="contact" 
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='h-[1.5px] sm:h-[2px] bg-black'
          />
          <span className='text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 uppercase'
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
            Let's Connect
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 md:mb-20">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 sm:mb-8 leading-tight"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              Get in
              <br />
              <span className="font-normal">Touch</span>
            </h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className='h-[0.5px] sm:h-[1px] bg-gradient-to-r from-black via-gray-400 to-transparent mb-6 sm:mb-8'
            />

            <p 
              className="max-w-3xl text-sm sm:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              I'm always interested in new opportunities and collaborations. Whether you have a project 
              in mind or just want to say hello, feel free to reach out—I'll do my best to get back to 
              you promptly.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={onSubmit} 
            variants={itemVariants}
            className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[10px] sm:text-xs tracking-wider text-gray-600 uppercase mb-3" 
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your full name" 
                  required 
                  className="w-full p-3 sm:p-4 outline-none border border-gray-300 bg-white focus:border-black transition-colors text-sm"
                  name="name"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[10px] sm:text-xs tracking-wider text-gray-600 uppercase mb-3" 
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your.email@example.com" 
                  required 
                  className="w-full p-3 sm:p-4 outline-none border border-gray-300 bg-white focus:border-black transition-colors text-sm"
                  name="email"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                />
              </div>
            </div>

            <div className="mb-8">
              <label 
                htmlFor="message" 
                className="block text-[10px] sm:text-xs tracking-wider text-gray-600 uppercase mb-3" 
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Message
              </label>
              <textarea 
                id="message"
                rows={6} 
                placeholder="How can I help you?" 
                required 
                className="w-full p-3 sm:p-4 outline-none border border-gray-300 bg-white focus:border-black transition-colors resize-none text-sm"
                name="message"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.button 
                type="submit" 
                className="w-full sm:w-auto py-3 px-8 bg-black text-white font-normal flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm tracking-wide uppercase"
                whileHover={{ x: isSubmitting ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </motion.button>

              {result && (
                <motion.p 
                  className={`text-xs sm:text-sm ${result.includes("successfully") ? "text-black" : "text-gray-600"}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  {result}
                </motion.p>
              )}
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            <div>
              <h4 
                className="text-[10px] sm:text-xs tracking-wider text-gray-600 uppercase mb-3"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Email
              </h4>
              <a 
                href="mailto:ardutraa40@gmail.com"
                className="text-sm sm:text-base text-black hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                ardutraa40@gmail.com
              </a>
            </div>

            <div>
              <h4 
                className="text-[10px] sm:text-xs tracking-wider text-gray-600 uppercase mb-3"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Location
              </h4>
              <p 
                className="text-sm sm:text-base text-black"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Jakarta, Indonesia
              </p>
            </div>

            <div>
              <h4 
                className="text-[10px] sm:text-xs tracking-wider text-gray-600 uppercase mb-3"
                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
              >
                Social
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/agik20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:opacity-70 transition-opacity uppercase tracking-wide"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:opacity-70 transition-opacity uppercase tracking-wide"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact