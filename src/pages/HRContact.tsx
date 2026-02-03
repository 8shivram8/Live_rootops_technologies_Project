import { Mail, Phone, Linkedin, Twitter, MapPin, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const hrTeam = [
  {
    id: 1,
    name: "Vanashree Shinde",
    position: "Human Resources Manager",
    phone: "+917721040808",
    email: "vanashreeshinde2024@gmail.com",
    bio: "Dedicated HR professional with 5+ years of experience in talent acquisition and employee relations.",
    color: "from-blue-500 to-cyan-500",
    icon: "👩‍💼",
  },
  {
    id: 2,
    name: "Shruti Chandrashekhar",
    position: "HR & Marketing Head | Sales Lead",
    phone: "+917666643357",
    email: "shrutichandrashekhar08@gmail.com",
    bio: "Strategic leader combining HR expertise with marketing innovation and sales excellence.",
    color: "from-purple-500 to-pink-500",
    icon: "👩‍💼",
  },
];

const HRContact = () => {
  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 animate-fade-in">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Our HR Team</span>
              </div>
            </div>

            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 break-words">
              <span className="gradient-text">HR & Leadership Team</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect with our dedicated HR professionals who are passionate about building 
              amazing teams and creating a positive workplace culture.
            </p>
          </div>

          {/* HR Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {hrTeam.map((member, index) => (
              <div
                key={member.id}
                className="group relative"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.2}s backwards`,
                }}
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Card Content */}
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  {/* Avatar Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl shadow-lg`}>
                      {member.icon}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                        title="Send Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                        title="Call"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Name and Position */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.position}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>

                  {/* Contact Details */}
                  <div className="space-y-4 mb-6 pt-6 border-t border-border">
                    {/* Phone */}
                    <div className="flex items-start gap-3 group/item cursor-pointer hover:translate-x-1 transition-transform">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-all flex-shrink-0 mt-0.5">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">Mobile</p>
                        <a
                          href={`tel:${member.phone}`}
                          className="text-foreground font-semibold hover:text-primary transition-colors text-sm block break-all"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 group/item cursor-pointer hover:translate-x-1 transition-transform">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-all flex-shrink-0 mt-0.5">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-foreground font-semibold hover:text-primary transition-colors text-sm block break-all"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className={`flex-1 bg-gradient-to-r ${member.color} text-white hover:shadow-lg transition-all`}
                    >
                      <a href={`mailto:${member.email}?subject=Inquiry from RootOps Website`}>Send Email</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-border hover:bg-primary hover:text-white"
                    >
                      <a href={`tel:${member.phone}`}>Call Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="bg-card border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Response Time */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">We respond to inquiries within 24 hours</p>
              </div>

              {/* Multiple Contact Methods */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Multiple Channels</h4>
                <p className="text-sm text-muted-foreground">Reach us via phone, email, or form submission</p>
              </div>

              {/* Expert Support */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Expert Support</h4>
                <p className="text-sm text-muted-foreground">Experienced professionals ready to assist</p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-border hover:bg-primary hover:text-white"
            >
              <a href="/careers">← Back to Careers</a>
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </Layout>
  );
};

export default HRContact;
