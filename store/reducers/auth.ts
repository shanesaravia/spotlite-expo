const initialState = {};

const authReducer = <T>(
  state: T | unknown = initialState,
  action: string
): T | unknown => {
  // console.log("action: ", action);
  return state;
};

export default authReducer;
