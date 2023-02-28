import { CheckingHours } from "./CheckingHours";
import { Contact } from "./Contact";
import { Location } from "./Location";

export interface Hotel {
  id: number;
  name: string;
  location: Location;
  stars: number;
  checkIn: CheckingHours;
  checkOut: CheckingHours;
  contact: Contact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}
