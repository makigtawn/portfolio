import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faTelegram,
  faReddit,
  faLeetcode,
} from "@fortawesome/free-brands-svg-icons";

const BrandIcon = ({ icon, ...props }) => (
  <FontAwesomeIcon icon={icon} aria-hidden="true" {...props} />
);

export const GitHubIcon = (props) => <BrandIcon icon={faGithub} {...props} />;

export const LinkedInIcon = (props) => (
  <BrandIcon icon={faLinkedinIn} {...props} />
);

export const XIcon = (props) => <BrandIcon icon={faXTwitter} {...props} />;

export const TelegramIcon = (props) => (
  <BrandIcon icon={faTelegram} {...props} />
);

export const RedditIcon = (props) => <BrandIcon icon={faReddit} {...props} />;

export const LeetCodeIcon = (props) => (
  <BrandIcon icon={faLeetcode} {...props} />
);
