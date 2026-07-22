import {
  FaGithub,
  FaLinkedin,
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegram,
  FaMedium,
  FaMailBulk,
  FaMailchimp,
  FaDev,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactEmail = "meklitgirmaw@gmail.com";

  return (
    <footer className="py-2 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Meklit Girmaw. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://dev.to/makigtawn" className=" transition-colors">
<FaDev className="h-6 w-6" />            </a>
            
            <a href={`mailto:${contactEmail}`} className=" transition-colors" aria-label="Email me">
              <FaEnvelope className="h-6 w-6" />
            </a>
            
            <a href="https://github.com/makigtawn" className=" transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/makigtawn" className=" transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://t.me/makigtawn" className=" transition-colors">
              <FaTelegram className="h-6 w-6 " />
            </a>
            <a
              href="https://x.com/makigtawn"
              className=" transition-colors"
              aria-label="X (formerly Twitter)">
              <FaXTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
