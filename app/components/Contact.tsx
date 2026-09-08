"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Left column — title + info
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Divider draw
      gsap.fromTo(dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Info items
      if (infoRef.current) {
        const items = infoRef.current.querySelectorAll<HTMLElement>(".contact-info-item");
        gsap.fromTo(items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Form reveal
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 55%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Input focus animation
        const inputs = formRef.current.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          'input, textarea'
        );
        inputs.forEach((input) => {
          input.addEventListener("focus", () => {
            gsap.to(input, { borderBottomColor: "#c9a962", duration: 0.3 });
          });
          input.addEventListener("blur", () => {
            gsap.to(input, { borderBottomColor: "#b8b0a5", duration: 0.3 });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-[#f5f0e8] py-32 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Chapter marker */}
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#5a5548]/60 mb-16">
            CH. V — Contact
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Info */}
            <div>
              <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#0a0a0a] leading-tight mb-8">
                Let&apos;s create
                <br />
                <span className="italic text-[#c9a962]">something</span>
                <br />
                together.
              </h2>

              <div ref={dividerRef} className="h-px bg-[#b8b0a5] w-24 mb-10" style={{ transformOrigin: "left" }} />

              <p className="text-base text-[#5a5548] leading-relaxed max-w-sm mb-14">
                I&apos;m always open to new opportunities and collaborations. Whether you have
                a project in mind or just want to say hello — feel free to reach out.
              </p>

              <div ref={infoRef} className="space-y-8 contact-info-items">
                <div className="contact-info-item">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] mb-2">Email</p>
                  <a
                    href="mailto:ardutraa40@gmail.com"
                    data-magnetic
                    className="text-sm text-[#0a0a0a] hover:text-[#c9a962] transition-colors"
                  >
                    ardutraa40@gmail.com
                  </a>
                </div>
                <div className="contact-info-item">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] mb-2">Location</p>
                  <p className="text-sm text-[#0a0a0a]">Jakarta, Indonesia</p>
                </div>
                <div className="contact-info-item">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] mb-4">Social</p>
                  <div className="flex gap-6">
                    {[
                      { name: "GitHub", href: "https://github.com/agik20" },
                      { name: "LinkedIn", href: "https://linkedin.com/in/ardutra-agi-ginting-56216b316" },
                      { name: "Instagram", href: "https://www.instagram.com/ar.giii" },
                    ].map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-magnetic
                        className="text-xs tracking-wider uppercase text-[#5a5548] hover:text-[#0a0a0a] transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <form ref={formRef} onSubmit={onSubmit} className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] block mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="w-full bg-transparent border-b border-[#b8b0a5] py-3 text-[#0a0a0a] placeholder-[#b8b0a5] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full bg-transparent border-b border-[#b8b0a5] py-3 text-[#0a0a0a] placeholder-[#b8b0a5] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-[#b8b0a5] block mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-transparent border-b border-[#b8b0a5] py-3 text-[#0a0a0a] placeholder-[#b8b0a5] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-magnetic
                    className="px-8 py-4 bg-[#0a0a0a] text-[#f5f0e8] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>

                  {result && (
                    <p className={`text-xs ${result.includes("successfully") ? "text-[#0a0a0a]" : "text-[#5a5548]"}`}>
                      {result}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
