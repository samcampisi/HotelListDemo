import { createContext, useState } from "react";
import { Hotel } from "../interfaces/Hotel/Hotel";
import { DEFAULT, LOW } from "../constants/sortKeys";
import { TSortKeys, TSortOrder } from "../types/sort";

interface SortOption {
  id: TSortKeys;
  order: TSortOrder;
}

export interface IHotelsContext {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: object;
  setError: (error: object) => void;
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
  sortOptions: SortOption[];
  setSortOptions: (sortOptions: SortOption[]) => void;
  selectedSort: SortOption;
  setSelectedSort: (sort: SortOption) => void;
}

const HotelsContext = createContext<IHotelsContext | null>(null);

const HotelsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [sortOptions, setSortOptions] = useState<SortOption[]>([]);
  const [selectedSort, setSelectedSort] = useState({
    id: DEFAULT as TSortKeys,
    order: LOW as TSortOrder,
  });

  return (
    <HotelsContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        hotels,
        setHotels,
        sortOptions,
        setSortOptions,
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export { HotelsContext, HotelsProvider };
