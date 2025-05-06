"use client";

import { motion } from "@/components/motion";
import { Calendar, MapPin, Hotel, Plane, Clock, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Calendar className="h-10 w-10" />,
    title: "AI Itinerary Planning",
    description: "Personalized travel plans created in seconds based on your preferences, budget, and travel style.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: <Plane className="h-10 w-10" />,
    title: "Flight Booking",
    description: "Find and book the best flights with real-time pricing and availability across all major airlines.",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  {
    icon: <Hotel className="h-10 w-10" />,
    title: "Hotel Reservations",
    description: "Discover and secure accommodations that match your preferences and budget.",
    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  },
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Destination Insights",
    description: "Get local recommendations, hidden gems, and cultural tips for authentic experiences.",
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Real-time Adjustments",
    description: "Your itinerary adapts to unexpected changes, ensuring your trip stays on track.",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Expense Tracking",
    description: "Keep all your travel expenses organized in one place with automatic categorization.",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            All-in-One Travel Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Everything you need to plan, book, and enjoy your perfect trip, powered by advanced AI.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className={cn("p-3 rounded-lg inline-block mb-4", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                {feature.title}
                {feature.title === "Expense Tracking" && (
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}