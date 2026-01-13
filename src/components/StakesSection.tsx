import { XCircle, CheckCircle } from "lucide-react";

const StakesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Choice Is Yours
          </h2>
          <p className="text-lg text-muted-foreground">
            Your career depends on the skills you have. The question is: where will you learn them?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Without Fit My Skill */}
          <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-semibold text-foreground">Without Fit My Skill</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">For Learners:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Confused about which skills actually matter for jobs</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Wasting time on outdated or theoretical courses</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>No guidance from real industry experts</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-medium text-foreground mb-3">For Mentors:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Your expertise goes unnoticed and unpaid</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Struggling with marketing and technology</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>No platform that values your knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* With Fit My Skill */}
          <div className="bg-accent/50 rounded-2xl p-8 border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex items-center gap-3 mb-6 relative">
              <CheckCircle className="w-6 h-6 text-success" />
              <h3 className="text-xl font-semibold text-foreground">With Fit My Skill</h3>
            </div>

            <div className="space-y-6 relative">
              <div>
                <h4 className="font-medium text-foreground mb-3">For Learners:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Learn exactly what employers want</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Get practical, job-ready skills from experts</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Apply your learning with confidence</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <h4 className="font-medium text-foreground mb-3">For Mentors:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Turn your expertise into income</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    <span>We handle the tech and marketing</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    <span>Build your reputation as an expert</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;
