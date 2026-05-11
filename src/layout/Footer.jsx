import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  RedditIcon,
  TelegramIcon,
  XIcon,
} from "@/components/BrandIcons";

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/makigtawn", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/makigtawn", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/makigtawn", label: "X" },
  { icon: TelegramIcon, href: "https://t.me/makigtawn", label: "Telegram" },
  { icon: RedditIcon, href: "https://www.reddit.com/user/makigtawn", label: "Reddit" },
  { icon: LeetCodeIcon, href: "https://leetcode.com/u/makigtawn/", label: "LeetCode" },
];


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              MG<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Meklit Girmaw. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
