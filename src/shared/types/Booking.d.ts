export interface Property {
  id: string;
  name: string;
  location: string;
}

export interface BookingInterval {
  start: Date;
  end: Date;
}

export interface Booking {
  id: string;
  property: Property;
  interval: BookingInterval;
}
