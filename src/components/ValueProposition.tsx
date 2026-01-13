import { Users, Briefcase, BookOpen, DollarSign, Megaphone, Award } from "lucide-react";

const ValueProposition = () => {
  const learnerBenefits = [
    {
      icon: Users,
      title: "Learn from Real Experts",
      description: "Our mentors are working professionals who know what actually works in the industry."
    },
    {
      icon: Briefcase,
      title: "Skills That Get Jobs",
      description: "Every course is designed around what employers actually want. No fillers."
    },
    {
      icon: BookOpen,
      title: "Simple & Practical",
      description: "No complex theories. Just clear lessons you can apply right away."
    }
  ];

  const mentorBenefits = [
    {
      icon: DollarSign,
      title: "Earn from Your Expertise",
      description: "Turn your knowledge into income. You teach, we handle the rest."
    },
    {
      icon: Megaphone,
      title: "No Marketing Hassle",
      description: "We bring learners to you. Focus on teaching, not selling."
    },
    {
      icon: Award,
      title: "Build Your Brand",
      description: "Establish yourself as an expert in your field. Grow your reputation."
    }
  ];

  return (
    <section id="for-learners" className="section-padding bg-gradient-section">
      <div className="container-section">
        {/* For Learners */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              For Learners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learn Skills That Matter
            </h2>
            <p className="text-lg text-muted-foreground">
              Stop wasting time on courses that don't help. Get practical skills from people who use them every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {learnerBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-card p-6 lg:p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-card transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Mentors */}
        <div id="for-mentors">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              For Mentors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Share Your Knowledge. Earn.
            </h2>
            <p className="text-lg text-muted-foreground">
              You have valuable skills. We give you a simple way to teach them and earn from what you know.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {mentorBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-card p-6 lg:p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-card transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
