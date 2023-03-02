import { DEFAULT, HIGH, ID_KEY, LOW } from "../constants/sortKeys";
import { Hotel } from "../interfaces/Hotel/Hotel";
import { SortOption } from "../interfaces/SortOption";
import { TSortKeys, TSortOrder } from "../types/sort";

export const getSortOptions = (hotels: Hotel[]): SortOption[] => {
  const sample = hotels[0];
  const numericProperties = Object.entries(sample).filter((entry) => {
    const key = entry[0];
    const value = entry[1];
    return key !== ID_KEY && typeof value === "number";
  });
  const sortOptions = [{ id: DEFAULT as TSortKeys, order: "" as TSortOrder }];
  numericProperties.forEach((option) => {
    sortOptions.push({
      id: option[0] as TSortKeys,
      order: HIGH as TSortOrder,
    });
    sortOptions.push({
      id: option[0] as TSortKeys,
      order: LOW as TSortOrder,
    });
  });
  return sortOptions;
};
