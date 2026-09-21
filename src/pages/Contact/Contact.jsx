import React, { useState } from "react";
import { Send, MapPin, Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Please enter your message.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    const form = new FormData();

    // Replace this with your NEW Web3Forms access key
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append(
      "subject",
      formData.subject || "New message from Jean KPETSI's portfolio",
    );
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus(
          "Message sent successfully! I'll get back to you as soon as possible.",
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({});
      } else {
        setStatus(
          result.message || "Unable to send your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20 lg:pt-0 bg-[#04081A] text-white min-h-screen">
      <section className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <p className="text-blue-400 font-medium mb-3">LET'S CONNECT</p>

                <h2 className="text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  Have a project idea, a technical question, or an opportunity
                  you'd like to discuss? Feel free to reach out. I'd be happy to
                  hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">jakkdev27@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Lomé, Togo</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/jeankpetsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/jeanjakk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jean-kpetsi-06b636369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />

                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />

                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                  />

                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />

                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>

              {/* Status */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
