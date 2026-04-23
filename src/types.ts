export interface Airline {
  id: string;
  name: string;
  country: string;
}

export interface FlightDeal {
  id: string;
  airline: Airline;
  from: string;
  to: string;
  price: number;
  currency: string;
  departureDate: string;
  returnDate?: string;
  isDirect: boolean;
}

export type TripType = 'round' | 'one-way';
export type CabinClass = 'economy' | 'business' | 'first';

export interface SearchState {
  from: string;
  to: string;
  departure: string;
  returnDate: string;
  passengers: number;
  tripType: TripType;
  cabinClass: CabinClass;
}
