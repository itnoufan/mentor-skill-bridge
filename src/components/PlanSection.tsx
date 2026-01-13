import { Search, GraduationCap, Rocket, PenTool, Upload, Coins } from "lucide-react";

const PlanSection = () => {
  const learnerSteps = [
    {
      step: 1,
      icon: Search,
      title: "Explore Skills",
      description: "Browse our collection of job-ready skills taught by experts."
    },
    {
      step: 2,
      icon: GraduationCap,
      title: "Learn from Experts",
      description: "Take practical lessons from mentors who work in the industry."
    },
    {
      step: 3,
      icon: Rocket,
      title: "Apply with Confidence",
      description: "Use your new skills in real jobs. Stand out from the crowd."
    }
  ];

  const mentorSteps = [
    {
      step: 1,
      icon: PenTool,
      title: "Create Your Course",
      description: "Package your expertise into clear, practical lessons."
    },
    {
      step: 2,
      icon: Upload,
      title: "Publish on Fit My Skill",
      description: "We help you launch and reach learners who need your knowledge."
    },
    {
      step: 3,
      icon: Coins,
      title: "Earn by Teaching",
      description: "Get paid while helping others grow their careers."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-section">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is simple. No complicated steps. No hidden surprises.
          </p>
        </div>

        <div className="space-y-20">
          {/* For Learners */}
          <div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-10">
              For Learners
            </h3>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border"></div>
              
              {learnerSteps.map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6 relative z-10">
                    <item.icon className="w-10 h-10 text-primary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Mentors */}
          <div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-10">
              For Mentors
            </h3>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border"></div>
              
              {mentorSteps.map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/20 mb-6 relative z-10">
                    <item.icon className="w-10 h-10 text-secondary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
