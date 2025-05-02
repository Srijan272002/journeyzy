"use client";

import { motion } from "@/components/motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Smartphone, CheckCircle2 } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-xs">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-gray-800 dark:border-gray-700 shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/6003286/pexels-photo-6003286.jpeg"
                  alt="Journeyz App Interface"
                  width={300}
                  height={600}
                  className="w-full"
                />
              </div>
              <div className="absolute top-0 -right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-16 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
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
              <Button className="flex items-center justify-center h-[40px] w-full bg-black hover:bg-black/90 rounded-lg px-2">
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-tight">Download on the</span>
                    <span className="text-sm font-medium leading-tight">App Store</span>
                  </div>
                </div>
              </Button>
              
              <Button variant="outline" className="flex items-center justify-center h-[40px] w-full bg-white hover:bg-white/90 text-black border border-gray-200 rounded-lg px-2">
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-tight">GET IT ON</span>
                    <span className="text-sm font-medium leading-tight">Google Play</span>
                  </div>
                </div>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}