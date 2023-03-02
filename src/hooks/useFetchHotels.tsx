import { useCallback, useContext } from "react";
import { HotelsContext } from "../contexts/HotelsContext";

const useFetchHotels = () => {
  const { setIsLoading, setError, setHotels } = useContext(HotelsContext);

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
