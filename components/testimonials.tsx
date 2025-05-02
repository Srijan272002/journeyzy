"use client";

import { motion } from "@/components/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Travel Enthusiast",
    content: "The AI completely transformed my Italy trip. When a train strike happened, it rerouted my itinerary and saved an entire day of my vacation!",
    avatar: "ET",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Business Traveler",
    content: "As someone who travels for work weekly, this app has been a game-changer. When meetings run long, it automatically adjusts my schedule.",
    avatar: "JW",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "Digital Nomad",
    content: "I rely on this app for all my travels across Southeast Asia. The AI suggestions have led me to hidden gems I would have never discovered otherwise.",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Michael Davis",
    role: "Family Vacationer",
    content: "Planning a trip with kids is challenging, but this app made it simple. When our flight was delayed, it rearranged our first day perfectly.",
    avatar: "MD",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Travelers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Join thousands of happy travelers who trust our AI to plan their perfect trips.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="" alt={testimonial.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}