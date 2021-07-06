// const initialState = {};

// const authReducer = <T>(
//   state: T | unknown = initialState,
//   action: string
// ): T | unknown => {
//   // console.log("action: ", action);
//   return state;
// };

// export default authReducer;

import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  USER_LOGOUT,
} from "store/actions/actionTypes";

const initialState = {
  isLoading: false,
};

const authReducer = (
  state = initialState,
  action: Record<string, unknown>
): Record<string, unknown> => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.payload.id,
        username: action.payload.username,
        firebase_id: action.payload.profile.firebase_uid,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authReducer;
