import React from "react";
import "./footer.css";
import { footerConfig, FooterConfig } from "../config/footer";
import { SocialLinkComponent } from "./social-link";
import { NewsletterSubscription } from "./newsletter-subscription";

interface FooterProps {
  config?: FooterConfig;
  className?: string;
}

export default function Footer({ config = footerConfig, className = "" }: FooterProps) {
  return <PureFooter config={config} className={className} />;
}

export function PureFooter({ config, className = "" }: Required<FooterProps>) {
  return (
    <div className={`footer ${className}`}>
      <div className="container mx-auto flex justify-between flex-wrap">
        <div className="footer-left">
          {config.logo && <div className="footer-logo">
            <img src={config.logo} alt="Coset Logo" />
          </div>}
          <div className="footer-claim">{config.copyright}</div>
        </div>
        <div className="footer-right">
          {config.socialLinks.map((link) => (
            <SocialLinkComponent key={link.label} link={link} />
          ))}
          <a href={`mailto:${config.email}`}>
            <div className="footer-mail">{config.email}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
