import { combineReducers } from "redux";
import themeReducer from "./theme";
import userReducer from "store/reducers/user";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

export default rootReducer;

// const appReducer = combineReducers({
//   /* your app’s top-level reducers */
// })

// const rootReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     return appReducer(undefined, action)
//   }

//   return appReducer(state, action)
// }
