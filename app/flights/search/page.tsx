"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { generateFlights, type Flight } from "@/lib/constants/flights";
import { destinations } from "@/lib/constants/destinations";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, Plane } from "lucide-react";
import { FlightFilters } from "./components/FlightFilters";
import { FlightDetails } from "./components/FlightDetails";

export default function FlightSearchResults() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlightId, setSelectedFlightId] = useState<string | null>(null);

  useEffect(() => {
    const params = {
      type: searchParams.get("type"),
      from: searchParams.get("from"),
      to: searchParams.get("to"),
      depart: searchParams.get("depart"),
      return: searchParams.get("return"),
      passengers: searchParams.get("passengers"),
      class: searchParams.get("class"),
      routes: searchParams.get("routes"),
    };

    // Generate mock flights
    const mockFlights = generateFlights(
      params.from || "",
      params.to || "",
      params.depart || new Date().toISOString(),
      params.class || "economy"
    );

    setFlights(mockFlights);
    setIsLoading(false);
  }, [searchParams]);

  const getLocationName = (code: string) => {
    const destination = destinations.find(d => d.code === code);
    return destination ? `${destination.city} (${destination.code})` : code;
  };

  const handleFilterChange = (filters: any) => {
    // TODO: Implement filter logic
    console.log("Filters changed:", filters);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="shrink-0">
          <FlightFilters onFilterChange={handleFilterChange} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Flight Search Results</h1>
            <p className="text-gray-500 mt-1">
              {getLocationName(searchParams.get("from") || "")} to{" "}
              {getLocationName(searchParams.get("to") || "")}
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-pulse text-lg">Loading flights...</div>
            </div>
          ) : (
            <div className="grid gap-4">
              {flights.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div 
                    className="cursor-pointer"
                    onClick={() => setSelectedFlightId(selectedFlightId === flight.id ? null : flight.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-full">
                          <Plane className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{flight.airline}</h3>
                          <p className="text-sm text-gray-500">{flight.flightNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold">US${flight.price}</p>
                          <p className="text-sm text-gray-500">per person</p>
                        </div>
                        {selectedFlightId === flight.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-center">
                        <p className="text-2xl font-bold">{flight.departureTime}</p>
                        <p className="text-sm text-gray-500">{getLocationName(flight.origin)}</p>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="flex items-center justify-center">
                          <div className="h-[2px] flex-1 bg-gray-300"></div>
                          <div className="mx-2 text-gray-500 text-sm">
                            {flight.duration}
                            {flight.stops !== "Non-stop" && ` • ${flight.stops}`}
                          </div>
                          <div className="h-[2px] flex-1 bg-gray-300"></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">{flight.arrivalTime}</p>
                        <p className="text-sm text-gray-500">{getLocationName(flight.destination)}</p>
                      </div>
                    </div>
                  </div>

                  <FlightDetails
                    flight={flight}
                    isSelected={selectedFlightId === flight.id}
                    onClose={() => setSelectedFlightId(null)}
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 