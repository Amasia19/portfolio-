import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import "../Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_qwws6ht",
          template_id: "template_qn9dhka",
          user_id: "RXixNGZc7LHKjYBkS",
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé ✅",
          description: "Merci pour votre message. Je vous répondrai bientôt !",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Erreur ❌",
          description: errorData.error || "Une erreur s'est produite.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur réseau 😕",
        description: "Impossible de se connecter au serveur.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-portfolio-primary" />,
      title: "Email",
      content: "amasiarajaobelina.jw@gmail.com",
      href: "mailto:amasiarajaobelina.jw@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-primary" />,
      title: "Phone",
      content: "+261 038 70 615 33",
      href: "tel:+2610387061533",
    },
    {
      icon: <MapPin className="h-5 w-5 text-portfolio-primary" />,
      title: "Location",
      content: "Madagascar",
      href: "https://www.google.com/maps/place/Madagascar",
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out! I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 hover:text-portfolio-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gray-100 p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="break-all text-sm text-gray-600">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
