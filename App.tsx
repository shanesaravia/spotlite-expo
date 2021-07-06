import React, { useEffect, useState } from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import Navigation from "./navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Theme from "./Theme";
import { ThemeProvider } from "react-native-elements";
import firebase from "firebase";
import firebaseConfig from "./configs/firebase";
import { persistConfig } from "configs";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);

const App = (): JSX.Element | null => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onIdTokenChanged((user) => {
      if (user && user.emailVerified) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider useDark={colorScheme === "dark"} theme={Theme}>
            <SafeAreaProvider>
              <Navigation
                colorScheme={colorScheme}
                authenticated={authenticated}
              />
              <StatusBar />
            </SafeAreaProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
    useColorScheme();
  }
};

export default App;
