import { Heart, Shield } from "lucide-react";

const GuideSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Empathy */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">We Understand</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Learners:</strong> You're confused. There are hundreds of courses out there, but which ones actually help you get a job? It's hard to know who to trust.
                </p>
                <p>
                  <strong className="text-foreground">Mentors:</strong> You have real knowledge that can help others. But creating courses, handling payments, and marketing feels overwhelming.
                </p>
                <p>
                  We've been there. That's why we built Fit My Skill.
                </p>
              </div>
            </div>

            {/* Authority */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Why Trust Us</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fit My Skill is part of the <strong className="text-foreground">Fit My Job ecosystem</strong>—a platform focused on connecting skills with real job opportunities.
                </p>
                <p>
                  Every skill on our platform is chosen because it <strong className="text-foreground">matters in real workplaces</strong>. No random courses. No outdated content.
                </p>
                <p>
                  We're designed for <strong className="text-foreground">real outcomes</strong>—helping learners grow and mentors succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
