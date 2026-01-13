import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-section relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Whether you want to learn new skills or teach what you know—Fit My Skill is here for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Explore Skills
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="warm" size="xl">
              Become a Mentor
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No pressure. No hidden costs. Just real skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
