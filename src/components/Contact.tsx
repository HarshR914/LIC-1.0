import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9246378864",
      link: "tel:+91 9246378864",
    },
    {
      icon: Mail,
      title: "Email",
      content: "radheshyam@licwealthplanner.com",
      link: "mailto:radheshyam@licwealthplanner.com",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Hyderabad, Telangana, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Get in Touch</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Let's Start Your Financial Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions? I'm here to help you make informed financial decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              ref={infoRef}
              className={`space-y-8 transition-all duration-700 ${
                infoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reach out for a free consultation, policy inquiries, or any questions 
                  about securing your financial future. I'm here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 border border-border hover:border-primary/30 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">{info.title}</div>
                        <div className="text-muted-foreground">{info.content}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

             
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className={`transition-all duration-700 delay-200 ${
                formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-large border border-border">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9246378864"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your financial planning needs..."
                      className="w-full min-h-[150px] resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full hover:scale-105">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your information is secure and will never be shared with third parties
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
