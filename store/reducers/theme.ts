import { SET_THEME } from "../actions/actionTypes";

const initialState = "light";

export default function themeReducer(
  state = initialState,
  action: Record<string, unknown>
): unknown {
  switch (action.type) {
    case SET_THEME: {
      return action.payload;
    }
    default:
      return state;
  }
}
