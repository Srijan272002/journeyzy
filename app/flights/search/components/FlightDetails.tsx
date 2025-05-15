import { Flight } from "@/lib/constants/flights";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Luggage, Plane } from "lucide-react";
import { useState } from "react";
import { FareOptions } from "./FareOptions";

interface FlightDetailsProps {
  flight: Flight;
  isSelected: boolean;
  onClose: () => void;
}

export function FlightDetails({ flight, isSelected, onClose }: FlightDetailsProps) {
  const [showFareOptions, setShowFareOptions] = useState(false);

  if (showFareOptions) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white z-50 overflow-auto"
      >
        <FareOptions 
          flight={flight} 
          onBack={() => setShowFareOptions(false)} 
        />
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="space-y-4">
              {/* Departure Details */}
              <div className="flex items-start space-x-4">
                <input type="radio" className="mt-2" checked readOnly />
                <div className="flex-1">
                  <div className="font-semibold">
                    Sat, 17 May 2025, {flight.departureTime}
                  </div>
                  <div className="text-gray-600">
                    Depart from London Biggin Hill Airport (BQH), Terminal 2
                  </div>
                </div>
              </div>

              {/* Flight Duration */}
              <div className="pl-8 text-sm text-gray-500">
                Flight duration: {flight.duration}
              </div>

              {/* Arrival Details */}
              <div className="flex items-start space-x-4">
                <input type="radio" className="mt-2" checked readOnly />
                <div className="flex-1">
                  <div className="font-semibold">
                    Sat, 17 May 2025, {flight.arrivalTime}
                  </div>
                  <div className="text-gray-600">
                    Arrive at Newark Liberty International Airport (EWR), Terminal 1
                  </div>
                </div>
              </div>

              {/* Flight Info */}
              <div className="pl-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>Economy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{flight.airline}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{flight.flightNumber}</span>
                </div>
              </div>

              {/* Baggage Info */}
              <div className="pl-8 flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Luggage className="h-4 w-4" />
                  <span>1 carry-on bag</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Luggage className="h-4 w-4" />
                  <span>1 checked bag</span>
                </div>
              </div>

              {/* Price and Select Button */}
              <div className="flex items-center justify-between mt-6">
                <div>
                  <div className="text-sm text-gray-500">From</div>
                  <div className="text-2xl font-bold">US${flight.price}</div>
                </div>
                <Button 
                  variant="default" 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => setShowFareOptions(true)}
                >
                  Select
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 