import React from "react";
import { Link } from "gatsby-link";
import { NavigationItem } from "../config/navigation";

interface NavigationItemProps {
  item: NavigationItem;
  className?: string;
  activeClassName?: string;
  isMobile?: boolean;
}

export function NavigationItemComponent({
  item,
  className = "",
  activeClassName = "",
  isMobile = false,
}: NavigationItemProps) {
  const baseClassName = `uppercase inline-flex items-center justify-center px-1 text-sm font-medium text-web-black hover:underline underline-offset-2 ${className}`;
  const mobileClassName = `uppercase block py-5 font-medium text-web-black border-b border-web-black ${className}`;
  
  const finalClassName = isMobile ? mobileClassName : baseClassName;
  const finalActiveClassName = isMobile ? "border-web-gray bg-web-tile" : "underline-offset-2 underline";

  // 处理外部链接或邮件链接
  if (item.isExternal || item.isEmail) {
    return (
      <a
        href={item.href}
        target={item.target}
        rel={item.rel}
        className={finalClassName}
      >
        {item.label}
      </a>
    );
  }

  // 处理内部链接
  return (
    <Link
      to={item.href}
      className={finalClassName}
      activeClassName={activeClassName || finalActiveClassName}
    >
      {item.label}
    </Link>
  );
} 