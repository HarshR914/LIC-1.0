import { Award, CheckCircle, Users, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const qualities = [
    "Certified LIC Professional",
    "Personalized Financial Solutions",
    "24/7 Client Support",
    "Transparent Advisory",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Your Trusted Financial Partner
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building secure futures through expert insurance and financial planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text */}
            <div
              ref={contentRef}
              className={`space-y-6 transition-all duration-700 delay-200 ${
                contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Meet <span className="text-primary">Radheshyam Rathi</span>
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                With over a decade of experience in the insurance and financial planning industry, 
                I've dedicated my career to helping families and individuals secure their financial future 
                through comprehensive insurance solutions and strategic wealth planning.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As a certified LIC agent, I specialize in creating customized financial strategies 
                that address your unique needs - from mediclaim and health insurance to long-term 
                wealth accumulation and retirement planning.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My mission is simple: to provide honest, transparent advice that puts your family's 
                security and prosperity first. Every client relationship is built on trust, expertise, 
                and a commitment to your financial well-being.
              </p>

              {/* Qualities Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {qualities.map((quality, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{quality}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div
              ref={cardsRef}
              className={`space-y-6 transition-all duration-700 delay-300 ${
                cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-card rounded-2xl p-8 shadow-large hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-border group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-2">Client-Centric Approach</h4>
                    <p className="text-muted-foreground">
                      Every financial plan is tailored to your specific needs, goals, and risk tolerance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-large hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-border group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-2">Lifetime Support</h4>
                    <p className="text-muted-foreground">
                      From consultation to claim settlement, I'm with you every step of your financial journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-large hover:shadow-glow hover:-translate-y-2 transition-all duration-300 border border-border group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-2">Proven Expertise</h4>
                    <p className="text-muted-foreground">
                      Certified professional with a track record of satisfied clients and successful claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
