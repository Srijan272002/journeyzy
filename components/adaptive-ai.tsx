"use client";

import { motion } from "@/components/motion";
import Image from "next/image";
import { ArrowRight, AlertTriangle, Calendar, CheckCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdaptiveAI() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              AI That Adapts to Life's Surprises
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              When unexpected events disrupt your plans, our AI immediately adjusts your itinerary to keep your trip on track.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-400 font-medium">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Constant Monitoring</h3>
                  <p className="text-muted-foreground">
                    Our AI monitors flight delays, weather changes, and other events that might affect your trip.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-400 font-medium">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instant Recalculation</h3>
                  <p className="text-muted-foreground">
                    When something changes, the AI immediately generates alternative options that preserve your priorities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-700 dark:text-blue-400 font-medium">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Seamless Updates</h3>
                  <p className="text-muted-foreground">
                    Your itinerary updates automatically, and you receive instant notifications with the changes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-border">
              <div className="bg-white dark:bg-gray-900 p-4 border-b">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="h-4 w-4" />
                  <span>Your Rome Itinerary</span>
                  <Badge variant="outline" className="ml-auto text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Alert
                  </Badge>
                </div>
              </div>
              
              <div className="p-1">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                  <p className="text-red-700 dark:text-red-400 text-sm flex items-start">
                    <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Urgent meeting added to your calendar for tomorrow at 9:00 AM. Your planned visit to the Colosseum needs adjustment.</span>
                  </p>
                </div>

                <Card className="mb-3 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium flex items-center text-green-700 dark:text-green-400">
                          <CheckCheck className="h-4 w-4 mr-1" /> AI-Adjusted Itinerary
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Optimized to accommodate your urgent meeting
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">Just updated</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-3 p-3">
                  <div className="flex items-center p-3 rounded-lg border bg-white dark:bg-gray-800">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium text-xs p-1 w-16 text-center rounded">
                      9:00 AM
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Urgent Meeting</p>
                      <p className="text-xs text-muted-foreground">Virtual (Hotel WiFi)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg border bg-white dark:bg-gray-800">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium text-xs p-1 w-16 text-center rounded">
                      11:30 AM
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Colosseum Tour</p>
                      <p className="text-xs text-muted-foreground">Rescheduled from morning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg border bg-white dark:bg-gray-800">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium text-xs p-1 w-16 text-center rounded">
                      2:00 PM
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Roman Forum</p>
                      <p className="text-xs text-muted-foreground">Original time (unchanged)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 h-72 w-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}