import { Shield, Heart, TrendingUp, Umbrella, PiggyBank, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage plans to protect you and your family from medical expenses and uncertainties.",
      features: ["Individual & Family Plans", "Critical Illness Cover", "Cashless Hospitalization"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Shield,
      title: "Mediclaim Policies",
      description: "Specialized mediclaim solutions offering financial protection against high medical costs and emergencies.",
      features: ["Pre & Post Hospitalization", "Day Care Procedures", "Ambulance Charges"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: TrendingUp,
      title: "Wealth Planning",
      description: "Strategic financial planning to help you build, grow, and preserve your wealth for future generations.",
      features: ["Investment Advisory", "Retirement Planning", "Tax Optimization"],
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Umbrella,
      title: "Life Insurance",
      description: "Term and endowment plans ensuring your family's financial security even in your absence.",
      features: ["Term Life Insurance", "Endowment Plans", "Money Back Policies"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: PiggyBank,
      title: "Savings Plans",
      description: "Systematic savings and investment plans to help you achieve your short and long-term financial goals.",
      features: ["Child Education Plans", "Marriage Planning", "Emergency Fund Building"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Users,
      title: "Group Insurance",
      description: "Comprehensive group insurance solutions for businesses to protect their most valuable asset - their employees.",
      features: ["Group Health Coverage", "Group Term Insurance", "Custom Corporate Plans"],
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
              <Shield className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Our Services</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored insurance and investment plans designed to secure your financial future
            </p>
          </div>

          <div
            ref={sectionRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group bg-card rounded-2xl p-8 shadow-medium hover:shadow-large hover:-translate-y-2 transition-all duration-500 border border-border hover:border-primary/30 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
