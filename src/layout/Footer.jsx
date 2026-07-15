import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
           
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTelegram className="h-6 w-6 " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
