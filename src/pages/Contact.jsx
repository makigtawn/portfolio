import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/Button";
import { useState } from "react";

const successMessage = "Your message was recorded successfully!";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitStatus({ type: "success", message: successMessage });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-25 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-center max-w-3xl mx-auto mb-16 text-4xl md:text-5xl font-bold text-black dark:text-white">
          contact me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 md:p-20">
            <form className="space-y-2" onSubmit={handleSubmit}>
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
                  className="w-full px-4 py-1 bg-surface border border-border focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
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
                  className="w-full px-4 py-1 bg-surface border border-border focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
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
                  className="w-full px-4 py-1 bg-surface  border border-border focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="sm">
                Submit
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex flex-col gap-1 p-4 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-600"
                      : "bg-red-500/10 border border-red-500/20 text-red-600"
                  }`}>
                  <p className="text-sm font-semibold">
                    {submitStatus.type === "success" ? "Success" : "Error"}
                  </p>
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          
        </div>
      </div>
    </section>
  );
};
