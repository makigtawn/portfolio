import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/Button";
import { useEffect, useRef, useState } from "react";

const contactEmail = "meklitgirmaw@gmail.com";
const formSubmitUrl = `https://formsubmit.co/${contactEmail}`;
const successMessage = "The message sent sucessfully, i'll respond ASAP.";

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

  const formRef = useRef(null);
  const pendingSubmit = useRef(false);
  const iframeReady = useRef(false);

  useEffect(() => {
    if (!isLoading || !pendingSubmit.current) return;

    const timeout = window.setTimeout(() => {
      if (!pendingSubmit.current) return;
      pendingSubmit.current = false;
      setIsLoading(false);
      setSubmitStatus({
        type: "error",
        message:
          "Could not reach FormSubmit. Check your internet connection, disable ad blockers for this site, then try again.",
      });
    }, 20000);

    return () => window.clearTimeout(timeout);
  }, [isLoading]);

  const handleIframeLoad = () => {
    if (!iframeReady.current) {
      iframeReady.current = true;
      return;
    }
    if (!pendingSubmit.current) return;

    pendingSubmit.current = false;
    setIsLoading(false);
    setSubmitStatus({ type: "success", message: successMessage });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const subjectField = form.elements.namedItem("_subject");
    if (subjectField && "value" in subjectField) {
      subjectField.value = `Portfolio contact from ${formData.name}`;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    pendingSubmit.current = true;
    form.submit();
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-foreground">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form
              ref={formRef}
              className="space-y-6"
              action={formSubmitUrl}
              method="POST"
              target="formsubmit-response"
              onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                defaultValue="Portfolio contact form"
              />
              <iframe
                name="formsubmit-response"
                title="FormSubmit response"
                className="hidden"
                onLoad={handleIframeLoad}
              />
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
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
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
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}>
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
                  </>
                )}
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
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="h-5 w-5 text-primary"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
