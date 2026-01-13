import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Fit My Skill Exists
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch our short video to understand how we're helping learners and mentors succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 border border-border/50 shadow-card">
            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <button className="group flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-elevated group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <span className="text-muted-foreground font-medium">Watch the Video</span>
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/5 to-transparent"></div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            2 minute video • For learners and mentors
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
