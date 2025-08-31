import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Startup Founder",
    avatar: "https://picsum.photos/seed/rohit/100/100",
    text: "As a founder, I often struggle with drafting contracts quickly. This platform has made legal drafting as simple as writing an email — a lifesaver for entrepreneurs like me."
  },
  {
    name: "Ananya Iyer",
    role: "Corporate Lawyer",
    avatar: "https://picsum.photos/seed/ananya/100/100",
    text: "The case analysis feature is outstanding. It helps me review judgments faster and prepare my briefs with greater accuracy. Truly a modern tool for the Indian legal ecosystem."
  },
  {
    name: "Vikram Desai",
    role: "Small Business Owner",
    avatar: "https://picsum.photos/seed/vikram/100/100",
    text: "Earlier, understanding GST and compliance documents felt overwhelming. Now I can quickly get clear explanations in plain Hindi or English. It has reduced my dependency on costly consultants."
  },
  {
    name: "Priya Mehta",
    role: "Law Student",
    avatar: "https://picsum.photos/seed/priya/100/100",
    text: "Being a law student, research often consumed hours. With this tool, summarizing long case laws has become effortless. It feels like a study companion that keeps me one step ahead."
  },
  {
    name: "Arjun Verma",
    role: "Freelancer",
    avatar: "https://picsum.photos/seed/arjun/100/100",
    text: "Freelancers like me sign many client agreements. This app helps me ensure I’m not missing hidden clauses and protects my interests without running to a lawyer every time."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary/5 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Badge variant="outline">Testimonials</Badge>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            What our Indian users think
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover how our platform is transforming the legal services
            experience across India.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-center p-6 text-center h-full">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-accent fill-current"
                          />
                        ))}
                      </div>
                      <p className="flex-grow mb-6 text-muted-foreground">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center space-x-4 mt-auto">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
