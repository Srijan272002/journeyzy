import { Flight } from "@/lib/constants/flights";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Plane } from "lucide-react";
import { useRouter } from "next/navigation";

interface FareOption {
  type: "ECONOMY" | "PREMIUM ECONOMY" | "BUSINESS";
  name: string;
  price: number;
  features: {
    changeable?: { fee: number };
    refundable?: { fee: number };
    holdPrice?: boolean;
    carryOn: boolean;
    checkedBag: boolean;
  };
}

interface FareOptionsProps {
  flight: Flight;
  onBack: () => void;
}

export function FareOptions({ flight, onBack }: FareOptionsProps) {
  const router = useRouter();

  const fareOptions: FareOption[] = [
    {
      type: "ECONOMY",
      name: "Basic",
      price: 538.03,
      features: {
        changeable: { fee: 70.00 },
        refundable: { fee: 70.00 },
        holdPrice: true,
        carryOn: true,
        checkedBag: true
      }
    },
    {
      type: "PREMIUM ECONOMY",
      name: "Comfort",
      price: 819.95,
      features: {
        changeable: { fee: 100.00 },
        holdPrice: true,
        carryOn: true,
        checkedBag: true
      }
    },
    {
      type: "BUSINESS",
      name: "Premium",
      price: 1537.00,
      features: {
        changeable: { fee: 480.00 },
        refundable: { fee: 480.00 },
        holdPrice: true,
        carryOn: true,
        checkedBag: true
      }
    }
  ];

  const handleSelectFare = (option: FareOption) => {
    // Navigate to checkout page with selected fare details
    router.push(`/flights/checkout?fare=${option.type}&price=${option.price}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Flight Summary */}
      <div className="mb-8">
        <div className="text-sm font-medium mb-4">Outbound • 16 May 2025</div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/iberia-logo.svg" alt="Iberia" className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">{flight.departureTime}</span>
                <span className="text-gray-500">•</span>
                <span className="text-xl font-bold">{flight.arrivalTime}+1</span>
              </div>
              <div className="text-sm text-gray-600">
                {flight.origin} - {flight.destination}
              </div>
            </div>
          </div>
          <div className="text-sm">
            <div>{flight.duration}</div>
            <div>Direct</div>
          </div>
        </div>
      </div>

      {/* Fare Options */}
      <div className="grid grid-cols-3 gap-4">
        {fareOptions.map((option) => (
          <div
            key={option.type}
            className="bg-white rounded-lg p-6 border border-gray-200"
          >
            <div className="text-sm text-gray-600 mb-1">{option.type}</div>
            <div className="text-xl font-bold mb-4">{option.name}</div>
            
            <div className="space-y-3 mb-8">
              {option.features.changeable && (
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <div>Changeable</div>
                    <div className="text-sm text-gray-500">(€{option.features.changeable.fee} fee)</div>
                  </div>
                </div>
              )}
              {option.features.refundable && (
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <div>Refundable</div>
                    <div className="text-sm text-gray-500">(€{option.features.refundable.fee} fee)</div>
                  </div>
                </div>
              )}
              {option.features.holdPrice && (
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <div>Hold price & space</div>
                </div>
              )}
              {option.features.carryOn && (
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <div>Includes carry-on bags</div>
                </div>
              )}
              {option.features.checkedBag && (
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-1" />
                  <div>Includes checked bags</div>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-500 mb-1">total amount from</div>
            <div className="text-2xl font-bold mb-4">US${option.price}</div>
            
            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => handleSelectFare(option)}
            >
              Select
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <div className="font-medium mb-2">Summary</div>
        <div className="flex items-center gap-2 text-sm">
          <span>Sold by</span>
          <img src="/iberia-logo.svg" alt="Iberia" className="h-4 w-4" />
          <span>Iberia</span>
        </div>
        <div className="text-sm text-gray-600 mt-2">
          From 630kg CO2
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        Select fare options for all flights
      </div>
    </div>
  );
} 