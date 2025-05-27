import React from "react";
import { SocialLink } from "../config/footer";

interface SocialLinkProps {
  link: SocialLink;
  className?: string;
}

export function SocialLinkComponent({ link, className = "" }: SocialLinkProps) {
  return (
    <a
      href={link.href}
      target={link.target}
      rel={link.rel}
      className={className}
      aria-label={link.label}
    >
      <img src={link.icon} alt={link.label} />
    </a>
  );
} 