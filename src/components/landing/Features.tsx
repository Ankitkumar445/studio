import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, DollarSign, Globe, Lock, Rocket, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    icon: Zap,
    title: "Internet-Powered",
    description:
      "Rapid web research, completing hours of analysis in seconds with the most current legal precedents and information.",
  },
  {
    icon: Briefcase,
    title: "AI Document Handling",
    description:
      "Summarize agreements, convert images to text, translate documents, and manage all your legal paperwork effortlessly.",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description:
      "We ensure your data and conversations remain safe with enterprise-grade encryption and strict privacy standards.",
  },
  {
    icon: Rocket,
    title: "75% Time Saved",
    description:
      "Automate routine tasks and legal research, giving you more time to focus on strategy and high-value work.",
  },
  {
    icon: DollarSign,
    title: "90% Cost Reduction",
    description:
      "Cut legal expenses dramatically with our efficient AI-powered platform, making legal help truly affordable.",
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description:
      "Our dedicated customer support team is always available to guide you with any questions about the platform.",
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Badge variant="outline" className="px-3 py-1 rounded-full">
            Features
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Features of Legal AI
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore features that boost your productivity. From document automation to advanced research, we've got the hard work covered.
          </p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 bg-background/70 backdrop-blur-md"
            >
              <CardHeader className="flex items-center justify-center">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="font-headline mb-2 text-xl">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
