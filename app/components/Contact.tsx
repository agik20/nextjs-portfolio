"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-cream-light py-24 md:py-32 lg:py-40 scroll-mt-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16 md:mb-24"
          >
            <span className="section-divider" />
            <span className="section-label">Contact</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ink leading-tight mb-6">
                  Let&apos;s create
                  <br />
                  <span className="italic">something</span>
                  <br />
                  together.
                </h2>
                <div className="section-divider h-px w-24 mb-8" />
                <p className="text-sm md:text-base text-sage leading-relaxed max-w-sm">
                  I&apos;m always open to new opportunities and collaborations. Whether you have
                  a project in mind or just want to say hello — feel free to reach out.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="section-label mb-2">Email</p>
                  <a href="mailto:ardutraa40@gmail.com" className="text-sm text-ink underline underline-offset-4 decoration-mist hover:decoration-ink transition-colors">
                    ardutraa40@gmail.com
                  </a>
                </div>
                <div>
                  <p className="section-label mb-2">Location</p>
                  <p className="text-sm text-ink">Jakarta, Indonesia</p>
                </div>
                <div>
                  <p className="section-label mb-3">Social</p>
                  <div className="flex gap-6">
                    <a href="https://github.com/agik20" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-sage hover:text-ink transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/ardutra-agi-ginting-56216b316" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-sage hover:text-ink transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://www.instagram.com/ar.giii" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-sage hover:text-ink transition-colors">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <form onSubmit={onSubmit} className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label htmlFor="name" className="section-label block mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="section-label block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="input-underline"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="section-label block mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="input-underline resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-6">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-filled disabled:opacity-50"
                    whileHover={{ x: isSubmitting ? 0 : 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        Send Message
                        <span>→</span>
                      </span>
                    )}
                  </motion.button>

                  {result && (
                    <p className={`text-xs ${result.includes("successfully") ? "text-ink" : "text-sage"}`}>
                      {result}
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
