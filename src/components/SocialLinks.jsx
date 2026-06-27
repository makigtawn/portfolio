import React from "react";
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  TelegramIcon,
  XIcon,
} from "@/components/BrandIcons";

const SocialLinks = () => {
  const socials = [
    { icon: GitHubIcon, href: "https://github.com/makigtawn", label: "GitHub" },
    {
      icon: LinkedInIcon,
      href: "https://linkedin.com/in/makigtawn",
      label: "LinkedIn",
    },
    { icon: XIcon, href: "https://x.com/makigtawn", label: "X" },
    { icon: TelegramIcon, href: "https://t.me/makigtawn", label: "Telegram" },
    {
      icon: LeetCodeIcon,
      href: "https://leetcode.com/u/makigtawn/",
      label: "LeetCode",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in animation-delay-400">
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
          {<social.icon className="w-5 h-5" />}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
