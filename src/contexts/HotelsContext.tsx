import { createContext, useState } from "react";
import { Hotel } from "../interfaces/Hotel/Hotel";

export interface IHotelsContext {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: object;
  setError: (error: object) => void;
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
}

const HotelsContext = createContext<IHotelsContext | null>(null);

const HotelsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hotels, setHotels] = useState<Hotel[]>([]);

  return (
    <HotelsContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        hotels,
        setHotels,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export { HotelsContext, HotelsProvider };
