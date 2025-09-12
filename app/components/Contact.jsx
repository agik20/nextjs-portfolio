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

  return (
    <motion.section 
      id="contact" 
      className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 scroll-mt-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-3 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Connect
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.header>

        <motion.p 
          className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out—I'll do my best to get back to you promptly.
        </motion.p>

        {/* Contact Form */}
        <motion.form 
          onSubmit={onSubmit} 
          className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="Your full name" 
                required 
                className="w-full p-4 outline-none border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                name="name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="your.email@example.com" 
                required 
                className="w-full p-4 outline-none border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                name="email"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              id="message"
              rows={6} 
              placeholder="How can I help you?" 
              required 
              className="w-full p-4 outline-none border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              name="message"
            ></textarea>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.button 
              type="submit" 
              className="py-4 px-10 bg-blue-600 text-white rounded-full font-medium flex items-center justify-center gap-2 mx-auto hover:bg-blue-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </motion.button>

            {result && (
              <motion.p 
                className={`mt-6 text-sm font-medium ${result.includes("successfully") ? "text-green-600" : "text-blue-600"}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {result}
              </motion.p>
            )}
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact