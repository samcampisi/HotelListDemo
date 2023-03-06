export const DEFAULT = 'default';
export const STARS = 'stars';
export const USER_RATING = 'userRating';
export const PRICE = 'price';
export const LOW = 'low to high';
export const HIGH = 'high to low';
export const ID_KEY = 'id';

export const SORT_KEYS_IDS = [DEFAULT, STARS, USER_RATING, PRICE] as const;
export const SORT_KEYS_ORDER = [LOW, HIGH, ''] as const;
