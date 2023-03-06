import { DEFAULT } from 'constants/sortKeys';
import { SORT_OPTIONS } from 'constants/sortOptions';
import { SortOption } from 'interfaces/SortOption';

export const formatSort = (selectedSort: SortOption): string => {
  return `${SORT_OPTIONS[selectedSort.id] || selectedSort.id}${
    selectedSort.id !== DEFAULT ? ` - ${selectedSort.order}` : ''
  }`;
};
