'use client'
import { useState, type FormEvent } from "react";
import { useDarkMode } from "@/components/DarkModeContext/DarkModeContext";
import "@/components/ContactForm/styles/contactform.css";
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export function ContactForm() {

  const { darkMode } = useDarkMode();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY, 
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`page contact-page ${darkMode ? "dark" : ""}`}>
      <p>Contact Me</p>
      <form onSubmit={handleSubmit} className="contact-form">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          required
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

