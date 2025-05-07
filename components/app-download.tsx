"use client";

import { motion } from "@/components/motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Smartphone, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const screenshots = [
  { src: "/homepage.png", alt: "Homepage Interface" },
  { src: "/hotelsearch.png", alt: "Hotel Search Interface" },
  { src: "/setbudget.png", alt: "Set Budget Interface" },
  { src: "/hotelpricing.png", alt: "Hotel Pricing Interface" },
  { src: "/hotels.png", alt: "Hotels List Interface" },
  { src: "/settings.png", alt: "Settings Interface" },
  { src: "/travelpreferences.png", alt: "Travel Preferences Interface" },
  { src: "/tripdetail.png", alt: "Trip Detail Interface" },
  { src: "/tripsummary.png", alt: "Trip Summary Interface" },
  { src: "/edititeinary.png", alt: "Edit Itinerary Interface" },
  { src: "/flightdetail.png", alt: "Flight Detail Interface" }
];

export default function AppDownload() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">App Screenshots</h2>
            <div className="relative mx-auto max-w-[320px]">
              {/* Carousel Container */}
              <div className="relative aspect-[9/19] w-full">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-contain"
                      priority={index === currentIndex}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-black/70" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-all"
              >
                <ChevronRight className="h-6 w-6 text-black/70" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-blue-600 w-4"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Mobile App</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Your AI Travel Assistant Everywhere
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Access your travel plans, make bookings, and receive real-time updates anytime, anywhere with our mobile app.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Offline access to itineraries and reservations",
                "Real-time notifications for gate changes and delays",
                "One-tap access to booking confirmations",
                "Local navigation even without data connection"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-2 w-full max-w-[240px]">
              {/* Store buttons commented out */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}