import * as React from "react";
import { useEffect } from "react";
import { HashRouter, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./router.jsx";
import { store, persistor } from "./app/store";
import "./app.css";

import "preline/preline";

const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return <Router />;
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename="/">
        <AppRouter />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default App;
