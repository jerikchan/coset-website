import React, { useRef, useState } from "react";
import axios from "axios";
import { FooterConfig } from "../config/footer";

interface NewsletterSubscriptionProps {
  config: FooterConfig["newsletter"];
  className?: string;
}

export function NewsletterSubscription({ config, className = "" }: NewsletterSubscriptionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!inputRef.current) return;

    const email = inputRef.current.value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      ...config.substackConfig,
      current_referrer: window.location.protocol + '//' + window.location.host,
      email: email,
    };

    try {
      const response = await axios.post(config.apiEndpoint, formData);
      console.log(response);
      inputRef.current.value = "";
      // 可以在这里添加成功提示
    } catch (error) {
      console.log(error);
      // 可以在这里添加错误提示
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        className="newsletter-input"
      />
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="newsletter-button"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>
    </div>
  );
} 