"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { SendIcon } from "./Icons";

type FormData = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error(result.error || "Something went wrong!", {
          position: "top-center",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again later.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full rounded-md border border-slate-200/70 bg-white px-3.5 py-2 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-2 focus:ring-violet-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-violet-500/20";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-2.5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={fieldClass}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
          rows={2}
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${fieldClass} min-h-[52px] resize-y pt-2.5`}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-violet-500/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 sm:col-span-2 ${
          isLoading ? "cursor-not-allowed opacity-70" : "hover:-translate-y-0.5 hover:shadow-lg"
        }`}
      >
        {isLoading ? (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        ) : (
          <SendIcon size={15} />
        )}
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;