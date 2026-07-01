"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await fetch("https://formsubmit.co/ajax/balliainstituteofstockmarket@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
            _subject: "New Website Contact Form Submission"
        })
      });
      
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try contacting via WhatsApp.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        subtitle="Have questions about a course or need guidance? Reach out and our team will get back to you."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border-color bg-surface p-6 sm:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="text-success" size={48} />
              <p className="mt-4 font-semibold text-lg">Message Sent!</p>
              <p className="mt-1 text-sm text-foreground/60">
                Thanks for reaching out — our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-foreground/70">Full Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border-color bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground/70">Phone Number</span>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border-color bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                    placeholder="+91 9369695793"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-foreground/70">Email Address</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border-color bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground/70">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border-color bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Phone, label: "Call Us", value: "+91 9369695793" },
              { icon: Mail, label: "Email Us", value: "balliainstituteofstockmarket@gmail.com" },
            ].map((c) => (
              <div key={c.label} className="rounded-xl border border-border-color bg-surface p-5">
                <c.icon className="text-primary" size={20} />
                <p className="mt-2 text-xs text-foreground/50">{c.label}</p>
                <p className="font-semibold text-sm">{c.value}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/919369695793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-success/10 p-4 hover:bg-success/15 transition-colors"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success text-white">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="font-semibold text-sm">WhatsApp</p>
                <p className="text-[11px] text-foreground/50">Instant replies</p>
              </div>
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-pink-500/10 p-4 hover:bg-pink-500/15 transition-colors"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </span>
              <div>
                <p className="font-semibold text-sm">Instagram</p>
                <p className="text-[11px] text-foreground/50">Follow our updates</p>
              </div>
            </a>
          </div>

          <a
            href="https://forms.gle/Sv8Z26d7e1FPLXPd8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-primary/10 p-5 hover:bg-primary/15 transition-colors"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
              <CheckCircle2 size={20} />
            </span>
            <div>
              <p className="font-semibold text-sm">Enrollment Form</p>
              <p className="text-xs text-foreground/50">Register for our courses here</p>
            </div>
          </a>

          <div className="rounded-xl border border-border-color bg-surface p-2 overflow-hidden">
            <iframe
              title="BISM Location"
              src="https://maps.google.com/maps?q=Ballia+Institute+of+Stock+Market,+near+Siddhi+Vinayak+Hotel,+Roopnagar+Tikhampur,+Tikhampur,+Ballia,+Uttar+Pradesh+277001&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              style={{ border: 0, borderRadius: "0.75rem" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-start gap-2 text-sm text-foreground/60">
            <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" /> 
            <span>Ballia Institute of Stock Market, near Siddhi Vinayak Hotel, Roopnagar Tikhampur, Tikhampur, Ballia, Uttar Pradesh 277001</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
