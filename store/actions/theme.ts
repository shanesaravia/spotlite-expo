import { SET_THEME } from "./actionTypes";

const setTheme = (colorScheme: string): Record<string, unknown> => {
  return {
    type: SET_THEME,
    payload: colorScheme,
  };
};

export default setTheme;
