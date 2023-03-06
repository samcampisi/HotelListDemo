import { DEFAULT, LOW } from 'constants/sortKeys';
import { Hotel } from 'interfaces/Hotel/Hotel';
import { SortOption } from 'interfaces/SortOption';

export const sortHotels = (
  selectedSort: SortOption,
  hotels: Hotel[],
): Hotel[] => {
  return selectedSort.id === DEFAULT
    ? hotels
    : [...hotels].sort((a: Hotel, b: Hotel) => {
        if (selectedSort.order === LOW) {
          return a[selectedSort.id] - b[selectedSort.id];
        } else {
          return b[selectedSort.id] - a[selectedSort.id];
        }
      });
};
