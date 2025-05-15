export interface Destination {
  code: string;
  city: string;
  country: string;
  airport: string;
}

export const destinations: Destination[] = [
  {
    code: "JFK",
    city: "New York",
    country: "United States",
    airport: "John F. Kennedy International Airport"
  },
  {
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    airport: "Heathrow Airport"
  },
  {
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    airport: "Dubai International Airport"
  },
  {
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    airport: "Singapore Changi Airport"
  },
  {
    code: "HND",
    city: "Tokyo",
    country: "Japan",
    airport: "Haneda Airport"
  },
  {
    code: "CDG",
    city: "Paris",
    country: "France",
    airport: "Charles de Gaulle Airport"
  },
  {
    code: "LAX",
    city: "Los Angeles",
    country: "United States",
    airport: "Los Angeles International Airport"
  },
  {
    code: "IST",
    city: "Istanbul",
    country: "Turkey",
    airport: "Istanbul Airport"
  },
  {
    code: "SYD",
    city: "Sydney",
    country: "Australia",
    airport: "Sydney Airport"
  },
  {
    code: "AMS",
    city: "Amsterdam",
    country: "Netherlands",
    airport: "Amsterdam Airport Schiphol"
  }
]; 