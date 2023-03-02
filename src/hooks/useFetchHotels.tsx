import { useCallback, useContext } from "react";
import { HotelsContext } from "../contexts/HotelsContext";
import { DEFAULT, HIGH, ID_KEY, LOW } from "../constants/sortKeys";
import { TSortKeys, TSortOrder } from "../types/sort";

const useFetchHotels = () => {
  const { setIsLoading, setError, setHotels, setSortOptions } =
    useContext(HotelsContext);

  const fetchHotels = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await (
        await fetch(
          "https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507"
        )
      ).json();

      setHotels(res);

      if (res.length) {
        const sample = res[0];
        const numericProperties = Object.entries(sample).filter((entry) => {
          const key = entry[0];
          const value = entry[1];
          return key !== ID_KEY && typeof value === "number";
        });
        const sortOptions = [
          { id: DEFAULT as TSortKeys, order: "" as TSortOrder },
        ];
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
        setSortOptions(sortOptions);
      }
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [setHotels]);

  return { fetchHotels };
};

export default useFetchHotels;
