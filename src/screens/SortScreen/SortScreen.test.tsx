import React from "react";

import { render } from "@testing-library/react-native";

import SortScreen, { SortScreenProps } from "./SortScreen";
import { HotelsContext, IHotelsContext } from "../../contexts/HotelsContext";
import { DEFAULT, HIGH, LOW, STARS } from "../../constants/sortKeys";
import { TSortKeys, TSortOrder } from "../../types/sort";
import NAVIGATION_MOCK from "../../../__mocks__/navigation";

const initialProps = {
  testID: "SortScreen",
  navigation: NAVIGATION_MOCK,
};

const initialContext = {
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
  hotels: [],
  setHotels: () => {},
  sortOptions: [],
  setSortOptions: () => {},
  selectedSort: {
    id: DEFAULT as TSortKeys,
    order: "" as TSortOrder,
  },
  setSelectedSort: () => {},
};

const defaultSortOptions = [
  {
    id: DEFAULT as TSortKeys,
    order: "" as TSortOrder,
  },
  {
    id: STARS as TSortKeys,
    order: HIGH as TSortOrder,
  },
  {
    id: STARS as TSortKeys,
    order: LOW as TSortOrder,
  },
];

const renderComponent = (
  props: SortScreenProps = initialProps,
  contextValue: IHotelsContext = initialContext
) => {
  return render(
    <HotelsContext.Provider value={contextValue}>
      <SortScreen {...props} />
    </HotelsContext.Provider>
  );
};

describe("Given the SortScreen component", () => {
  describe("When rendered", () => {
    it("Renders correctly with an empty list of sort options", () => {
      const { getByTestId } = renderComponent();

      expect(getByTestId(initialProps.testID)).toBeDefined();
    });
    it("Renders correctly with a non-empty list of sort options", () => {
      const { getByTestId } = renderComponent(initialProps, {
        ...initialContext,
        sortOptions: defaultSortOptions,
      });

      expect(getByTestId(`${initialProps.testID}-option-0`)).toBeDefined();
    });
    it("Renders the indicator for the currently selected sort", () => {
      const { getByTestId } = renderComponent(initialProps, {
        ...initialContext,
        sortOptions: defaultSortOptions,
      });

      expect(getByTestId(`${initialProps.testID}-indicator-0`)).toBeDefined();
    });
    it("Does not render the indicator for other sort options", () => {
      const { queryByTestId } = renderComponent(initialProps, {
        ...initialContext,
        sortOptions: defaultSortOptions,
      });

      expect(queryByTestId(`${initialProps.testID}-indicator-1`)).toBeFalsy();
    });
  });
});
