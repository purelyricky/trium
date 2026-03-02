"use client";
import { useState } from "react";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formState;
    const subject = encodeURIComponent(`Service Inquiry: ${service || "General"} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Needed: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:thardeusokoth1993@outlook.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#D2DCFF] to-[#EAEEFE] overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Get In Touch</div>
          </div>
          <h2 className="section-title mt-5">Contact Us Today</h2>
          <p className="section-des mt-5">
            Ready to get your motors running? Reach out to our expert team for a fast quote on any of our
            services.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_7px_14px_#EAEAEA]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold tracking-tight">Message Sent!</h3>
                <p className="text-[#010D3E]/60 mt-2 text-sm">
                  Your email client will open with a pre-filled message. We&apos;ll get back to you as soon as
                  possible.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary mt-6">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-black/70 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Mwangi"
                    className="w-full border border-[#F1F1F1] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#001E80] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black/70 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@company.co.ke"
                    className="w-full border border-[#F1F1F1] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#001E80] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black/70 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full border border-[#F1F1F1] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#001E80] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black/70 block mb-1">Service Needed</label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full border border-[#F1F1F1] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#001E80] transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="Motor Rewinding">Motor Rewinding</option>
                    <option value="Alternator / Armature Rewinding">Alternator / Armature Rewinding</option>
                    <option value="Industrial Pump Repair">Industrial Pump Repair</option>
                    <option value="AC Maintenance & Installation">AC Maintenance &amp; Installation</option>
                    <option value="Electrical Installation & Compliance">
                      Electrical Installation &amp; Compliance
                    </option>
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-black/70 block mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your equipment or project..."
                    rows={4}
                    className="w-full border border-[#F1F1F1] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#001E80] transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-5 justify-center">
            <div className="bg-white rounded-3xl p-6 shadow-[0_7px_14px_#EAEAEA]">
              <h4 className="font-bold tracking-tight text-black">Our Location</h4>
              <p className="text-[#010D3E]/60 text-sm mt-1">Kitengela, Jua Kali Road</p>
              <p className="text-[#010D3E]/60 text-sm">P.O. Box 22070-0200, Nairobi, Kenya</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-[0_7px_14px_#EAEAEA]">
              <h4 className="font-bold tracking-tight text-black">Call Us</h4>
              <a
                href="tel:+254768388710"
                className="text-[#001E80] text-sm mt-1 block hover:underline font-medium"
              >
                +254 768 388 710
              </a>
              <a
                href="tel:+254735800240"
                className="text-[#001E80] text-sm block hover:underline font-medium"
              >
                +254 735 800 240
              </a>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-[0_7px_14px_#EAEAEA]">
              <h4 className="font-bold tracking-tight text-black">Email Us</h4>
              <a
                href="mailto:thardeusokoth1993@outlook.com"
                className="text-[#001E80] text-sm mt-1 block hover:underline font-medium break-all"
              >
                thardeusokoth1993@outlook.com
              </a>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-[0_7px_14px_#EAEAEA]">
              <h4 className="font-bold tracking-tight text-black">Business Hours</h4>
              <p className="text-[#010D3E]/60 text-sm mt-1">Monday – Friday: 8:00 AM – 6:00 PM</p>
              <p className="text-[#010D3E]/60 text-sm">Saturday: 9:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
