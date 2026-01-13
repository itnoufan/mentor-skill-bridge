const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Fit My Skill", href: "#" },
      { label: "Our Story", href: "#" },
      { label: "Contact", href: "#" },
    ],
    forLearners: [
      { label: "Explore Skills", href: "#" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQs", href: "#" },
    ],
    forMentors: [
      { label: "Become a Mentor", href: "#" },
      { label: "Mentor Guidelines", href: "#" },
      { label: "Success Stories", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FS</span>
              </div>
              <span className="font-semibold text-lg text-background">Fit My Skill</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Learn job-ready skills from expert mentors. Simple. Practical. Real.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Learners */}
          <div>
            <h4 className="font-semibold text-background mb-4">For Learners</h4>
            <ul className="space-y-3">
              {footerLinks.forLearners.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Mentors */}
          <div>
            <h4 className="font-semibold text-background mb-4">For Mentors</h4>
            <ul className="space-y-3">
              {footerLinks.forMentors.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © 2024 Fit My Skill. Part of the Fit My Job ecosystem.
            </p>
            <p className="text-sm text-background/60">
              Made with care for learners and mentors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
