import { NavigationScreenProp } from "react-navigation";

type NavigationScreenPropAlias = NavigationScreenProp<{}>;
let navigation: Partial<NavigationScreenPropAlias>;

navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};

export default navigation as NavigationScreenPropAlias;
