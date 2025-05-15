import { destinations } from "./destinations";

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: "Non-stop" | `${number} stop` | `${number} stops`;
  connection?: {
    duration: string;
    airport: string;
  };
}

const airlines = [
  { name: "Iberia", code: "IB" },
  { name: "American Airlines", code: "AA" },
  { name: "British Airways", code: "BA" },
  { name: "Duffel Airways", code: "ZZ" },
  { name: "SAS", code: "SK" }
];

const generateFlightNumber = (airlineCode: string) => {
  return `${airlineCode}${Math.floor(Math.random() * 9000) + 1000}`;
};

const formatTime = (hour: number, minute: number) => {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

const formatDuration = (hours: number, minutes: number) => {
  return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`;
};

const generatePrice = (basePrice: number) => {
  const variation = Math.random() * 10 - 5; // +/- $5
  return Math.round(basePrice + variation);
};

export const generateFlights = (
  origin: string,
  destination: string,
  date: string,
  travelClass: string = "economy"
): Flight[] => {
  // Base prices similar to the example
  const basePrices = [538.03, 540.52, 542.11, 546.01, 627.44];
  
  return airlines.map((airline, index) => {
    // All flights at 11:36 for demonstration
    const departureHour = 11;
    const departureMinute = 36;
    
    // All arrivals at 00:37 next day for demonstration
    const arrivalHour = 0;
    const arrivalMinute = 37;

    return {
      id: `${date}-${airline.code}-${index}`,
      airline: airline.name,
      flightNumber: `${airline.code}${index === 4 ? '9010, SK0503' : '3167'}`, // Special case for SAS
      origin,
      destination,
      departureTime: index === 4 ? "17:15" : formatTime(departureHour, departureMinute),
      arrivalTime: index === 4 ? "13:35" : formatTime(arrivalHour, arrivalMinute),
      duration: index === 4 ? "15h 20m" : "08h 01m",
      price: basePrices[index],
      stops: index === 4 ? "1 stop" : "Non-stop",
      ...(index === 4 && {
        connection: {
          duration: "05h 30m",
          airport: "CPH"
        }
      })
    };
  });
}; 