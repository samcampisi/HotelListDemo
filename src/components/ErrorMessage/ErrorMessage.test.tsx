import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import ErrorMessage, {
  DEFAULT_MESSAGE,
  ErrorMessageProps,
} from "./ErrorMessage";

const initialProps = {
  onRetryPress: jest.fn(),
  testID: "ErrorMessage",
};

const renderComponent = (props: ErrorMessageProps) => {
  return render(<ErrorMessage {...props} />);
};

describe("Given the ErrorMessage component", () => {
  describe("When rendered", () => {
    it("Renders correctly with the default message", () => {
      const { getByText } = renderComponent(initialProps);

      expect(getByText(DEFAULT_MESSAGE)).toBeDefined();
    });

    it("Renders correctly with a given message", () => {
      const message = "Custom message";
      const { getByText } = renderComponent({ ...initialProps, text: message });

      expect(getByText(message)).toBeDefined();
    });

    it("Renders correctly with a given style", () => {
      const style = { backgroundColor: "red" };

      const { getByTestId } = renderComponent({
        ...initialProps,
        containerStyle: style,
      });

      expect(getByTestId(initialProps.testID)).toHaveStyle(style);
    });
  });

  describe("When pressed", () => {
    it("Fires the onRetryPress prop", () => {
      const { getByTestId } = renderComponent(initialProps);

      const retryButton = getByTestId(`${initialProps.testID}-retry`);

      fireEvent.press(retryButton);

      expect(initialProps.onRetryPress).toBeCalledTimes(1);
    });
  });
});
