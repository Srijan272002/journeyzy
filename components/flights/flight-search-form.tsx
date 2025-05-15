"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { DestinationInput } from "./destination-input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface FlightRoute {
  origin: string;
  destination: string;
  departureDate: Date | undefined;
}

export function FlightSearchForm() {
  const router = useRouter();
  const [journeyType, setJourneyType] = useState("return");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");
  const [travelClass, setTravelClass] = useState("economy");
  const [isLoading, setIsLoading] = useState(false);
  const [multiCityRoutes, setMultiCityRoutes] = useState<FlightRoute[]>([
    { origin: "", destination: "", departureDate: undefined }
  ]);

  const validateForm = () => {
    if (journeyType !== "multi-city") {
      if (!origin) {
        toast.error("Please select an origin");
        return false;
      }
      if (!destination) {
        toast.error("Please select a destination");
        return false;
      }
      if (!departureDate) {
        toast.error("Please select a departure date");
        return false;
      }
      if (journeyType === "return" && !returnDate) {
        toast.error("Please select a return date");
        return false;
      }
    } else {
      for (let i = 0; i < multiCityRoutes.length; i++) {
        const route = multiCityRoutes[i];
        if (!route.origin) {
          toast.error(`Please select origin for flight ${i + 1}`);
          return false;
        }
        if (!route.destination) {
          toast.error(`Please select destination for flight ${i + 1}`);
          return false;
        }
        if (!route.departureDate) {
          toast.error(`Please select date for flight ${i + 1}`);
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Collect form data based on journey type
      const formData = {
        journeyType,
        passengers,
        class: travelClass,
        ...(journeyType === "multi-city" 
          ? { routes: multiCityRoutes }
          : {
              origin,
              destination,
              departureDate,
              ...(journeyType === "return" && { returnDate })
            }
        )
      };

      console.log("Search flights with:", formData);

      // Here you would typically make an API call
      // For now, let's simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to results page with search parameters
      const searchParams = new URLSearchParams({
        type: journeyType,
        ...(journeyType !== "multi-city" ? {
          from: origin,
          to: destination,
          depart: departureDate?.toISOString() || "",
          ...(journeyType === "return" ? { return: returnDate?.toISOString() || "" } : {})
        } : {
          routes: JSON.stringify(multiCityRoutes)
        }),
        passengers,
        class: travelClass
      });

      router.push(`/flights/search?${searchParams.toString()}`);
      toast.success("Searching for flights...");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const addRoute = () => {
    setMultiCityRoutes([...multiCityRoutes, { origin: "", destination: "", departureDate: undefined }]);
  };

  const removeRoute = (index: number) => {
    setMultiCityRoutes(multiCityRoutes.filter((_, i) => i !== index));
  };

  const updateRoute = (index: number, field: keyof FlightRoute, value: string | Date | undefined) => {
    const newRoutes = [...multiCityRoutes];
    newRoutes[index] = { ...newRoutes[index], [field]: value };
    setMultiCityRoutes(newRoutes);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
      {/* Journey Type */}
      <div className="mb-8">
        <h3 className="text-base font-medium mb-4">Journey type</h3>
        <RadioGroup
          defaultValue="return"
          className="flex gap-8"
          onValueChange={setJourneyType}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="one-way" id="one-way" />
            <Label htmlFor="one-way">One way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="return" id="return" />
            <Label htmlFor="return">Return</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multi-city" id="multi-city" />
            <Label htmlFor="multi-city">Multi-city</Label>
          </div>
        </RadioGroup>
      </div>

      {journeyType !== "multi-city" ? (
        <>
          {/* Origin and Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="text-base font-medium">Origin</Label>
              <div className="mt-2">
                <DestinationInput
                  value={origin}
                  onChange={setOrigin}
                  placeholder="Select origin"
                />
              </div>
            </div>
            <div>
              <Label className="text-base font-medium">Destination</Label>
              <div className="mt-2">
                <DestinationInput
                  value={destination}
                  onChange={setDestination}
                  placeholder="Select destination"
                />
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="text-base font-medium">Departure date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full mt-2 h-12 justify-start text-left font-normal",
                      !departureDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <button type="button" className="text-purple-600 text-sm mt-2">At any time</button>
            </div>
            {journeyType === "return" && (
              <div>
                <Label className="text-base font-medium">Return date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full mt-2 h-12 justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <button type="button" className="text-purple-600 text-sm mt-2">At any time</button>
              </div>
            )}
          </div>
        </>
      ) : (
        /* Multi-city Routes */
        <div className="space-y-6 mb-6">
          {multiCityRoutes.map((route, index) => (
            <div key={index} className="relative border rounded-lg p-4">
              {index > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={() => removeRoute(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-base font-medium">Origin</Label>
                  <div className="mt-2">
                    <DestinationInput
                      value={route.origin}
                      onChange={(value) => updateRoute(index, "origin", value)}
                      placeholder="Select origin"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-base font-medium">Destination</Label>
                  <div className="mt-2">
                    <DestinationInput
                      value={route.destination}
                      onChange={(value) => updateRoute(index, "destination", value)}
                      placeholder="Select destination"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-base font-medium">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "w-full mt-2 h-12 justify-start text-left font-normal",
                          !route.departureDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {route.departureDate ? format(route.departureDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={route.departureDate}
                        onSelect={(date) => updateRoute(index, "departureDate", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={addRoute}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add another flight
          </Button>
        </div>
      )}

      {/* Passengers and Class */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label className="text-base font-medium">Passengers</Label>
          <Select value={passengers} onValueChange={setPassengers}>
            <SelectTrigger className="mt-2 h-12">
              <SelectValue placeholder="1 adult" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 adult</SelectItem>
              <SelectItem value="2">2 adults</SelectItem>
              <SelectItem value="3">3 adults</SelectItem>
              <SelectItem value="4">4 adults</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-base font-medium">Class</Label>
          <Select value={travelClass} onValueChange={setTravelClass}>
            <SelectTrigger className="mt-2 h-12">
              <SelectValue placeholder="Economy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="premium">Premium Economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Advanced Options */}
      <div className="flex justify-end mb-6">
        <button type="button" className="text-purple-600 text-sm">Advanced options</button>
      </div>

      {/* Search Button */}
      <Button 
        type="submit" 
        className="w-full bg-black text-white h-12 rounded-md hover:bg-black/90"
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Find available flights"}
      </Button>
    </form>
  );
} 