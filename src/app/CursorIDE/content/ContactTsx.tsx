"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";

const ContactTsx = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showErrors, setShowErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSending, setIsSending] = useState(false);

  const { toast } = useToast();

  const clearErrors = () => {
    setShowErrors({ name: false, email: false, message: false });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: name.length === 0,
      email: email.length === 0,
      message: message.length === 0,
    };

    if (errors.name || errors.email || errors.message) {
      setShowErrors(errors);
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_EMAIL_SERVICE ||
      !process.env.NEXT_PUBLIC_EMAIL_TEMPLATE
    ) {
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        { from_name: name, from_email: email, message: message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setName("");
      setEmail("");
      setMessage("");
      toast({
        title: "Email sent!",
        description: "I will get back to you ASAP!",
      });
    } catch {
      toast({
        title: "Error sending email",
        description:
          "Please try again later or email me at: bethashcroft1998@gmail.com or find me on LinkedIn!",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto font-mono">
      <div className="flex items-center gap-2 text-cursor-text-muted text-xs mb-6">
        <span className="text-cyan-400">⚛</span>
        <span>contact.tsx</span>
      </div>

      <h1 className="text-2xl font-bold text-cursor-text mb-2">Get in touch</h1>
      <p className="text-cursor-text-muted text-sm mb-6">
        Have a project in mind, or just want to say hello? Send me a message and
        I&apos;ll get back to you as soon as I can.
      </p>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <FormField
          label="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(val) => {
            clearErrors();
            setName(val);
          }}
          error={showErrors.name ? "Name is required" : undefined}
        />
        <FormField
          label="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(val) => {
            clearErrors();
            setEmail(val);
          }}
          error={showErrors.email ? "Email is required" : undefined}
        />

        <div>
          <label className="text-cursor-text-muted text-xs mb-1 block">
            message
          </label>
          <textarea
            placeholder="What would you like to say?"
            value={message}
            onChange={(e) => {
              clearErrors();
              setMessage(e.target.value);
            }}
            rows={5}
            className="w-full bg-cursor-active border border-cursor-border rounded-md px-3 py-2 text-sm text-cursor-text placeholder:text-cursor-text-muted/50 focus:outline-none focus:border-cursor-purple transition-colors resize-none"
          />
          {showErrors.message && (
            <span className="text-red-400 text-xs mt-1">Message</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full py-2 rounded-md text-sm font-medium transition-colors bg-cursor-purple text-white hover:bg-cursor-purple-dim disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-cursor-border">
        <p className="text-cursor-text-muted text-xs mb-3">
          Or find me elsewhere:
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/bethany-ashcroft-5b12b3180/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cursor-purple hover:text-cursor-text transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/Bethashcroft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cursor-purple hover:text-cursor-text transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const FormField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) => {
  return (
    <div>
      <label className="text-cursor-text-muted text-xs mb-1 block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-cursor-active border border-cursor-border rounded-md px-3 py-2 text-sm text-cursor-text placeholder:text-cursor-text-muted/50 focus:outline-none focus:border-cursor-purple transition-colors"
      />
      {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default ContactTsx;
