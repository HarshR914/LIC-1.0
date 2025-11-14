import { CheckCircle2, Clock, Shield, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const WhyChoose = () => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Over 10 years of proven experience in insurance and financial planning with LIC.",
    },
    {
      icon: Star,
      title: "Personalized Service",
      description: "Every client receives customized solutions tailored to their unique financial situation.",
    },
    {
      icon: Clock,
      title: "Prompt Support",
      description: "24/7 availability for consultations, queries, and claim assistance whenever you need.",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Process",
      description: "Clear, honest advice with no hidden charges or misleading information.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Your Success is Our Priority
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference of working with a dedicated financial partner
            </p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className={`group bg-card rounded-2xl p-8 shadow-medium hover:shadow-large hover:-translate-y-2 transition-all duration-500 border border-border hover:border-secondary/50 cursor-pointer ${
                    cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-medium">
                      <Icon className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div
            ref={ctaRef}
            className={`mt-16 text-center bg-gradient-primary rounded-2xl p-12 shadow-large transition-all duration-700 ${
              ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Secure Your Financial Future?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation today and discover how we can help you achieve your financial goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-accent-light hover:scale-105 text-accent-foreground font-semibold rounded-md shadow-medium hover:shadow-glow transition-all duration-300">
                Book Free Consultation
              </a>
              <a href="tel:+919246378864" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-background/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:scale-105 font-semibold rounded-md transition-all duration-300">
                Call Now: +91 9246378864
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
