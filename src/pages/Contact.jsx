import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/Button";
import { sendContactMessage } from "@/lib/sendContact";
import { useState } from "react";
// import SocialLinks from "../components/SocialLinks";
const contactEmail = "meklitgirmaw@gmail.com";
const successMessage =
  "Your message was sent successfully. I'll respond as soon as I can.";

const contactInfo = [
  {
    icon: faEnvelope,
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+251 970 369 110",
    href: "tel:+251970369110",
  },
  {
    icon: faLocationDot,
    label: "Location",
    value: "Bahirdar, ET",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await sendContactMessage(formData);
      setSubmitStatus({ type: "success", message: successMessage });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message || "Could not send your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center max-w-3xl mx-auto mb-16 text-4xl md:text-5xl font-bold mt-4 mb-6 text-black">
          contact me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}>
                {isLoading ? "Sending..." : <>Send Message</>}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}>
                  {submitStatus.type === "success" ? (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="h-5 w-5 flex-shrink-0"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="h-5 w-5 flex-shrink-0"
                    />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">

          
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-black/10 transition-colors group">
                    <div>
                      <div className="text-black font-bold">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
