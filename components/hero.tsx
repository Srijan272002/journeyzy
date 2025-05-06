"use client";

import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6">
              Transform Your<br />
              Travel Experience<br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 md:pr-8">
              Let AI plan your perfect trip with personalized itineraries, real-time adjustments, and seamless booking all in one place.
              Say goodbye to endless searching and hello to smart, tailored recommendations that match your unique travel style.
            </p>
            <div className="flex flex-col gap-2 justify-center lg:justify-start w-full max-w-[240px] mx-auto lg:mx-0">
              {/* <Button className="flex items-center justify-center h-[40px] w-full bg-black hover:bg-black/90 rounded-lg px-2">
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
              <Button className="flex items-center justify-center h-[40px] w-full bg-white hover:bg-white/90 text-black border border-gray-200 rounded-lg px-2">
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-tight">GET IT ON</span>
                    <span className="text-sm font-medium leading-tight">Google Play</span>
                  </div>
                </div>
              </Button> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3
                }}
                className="relative h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/2346815-removebg-preview.png"
                  alt="Vintage Traveler"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5
                }}
                className="relative h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/24094535_qpmp_ive4_211101-removebg-preview.png"
                  alt="Next Events"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.7
                }}
                className="relative h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/traveling-concept-illustration.png"
                  alt="Travel Concept"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="space-y-4 mt-8">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.4
                }}
                className="relative h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/Hotel Booking-pana.png"
                  alt="Hotel Booking"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.6
                }}
                className="relative h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/171056173_10665486-removebg-preview.png"
                  alt="Passport and Tickets"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8
                }}
                className="relative h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/19948564_6166308-removebg-preview.png"
                  alt="Mobile App"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/4 -right-8 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-8 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}