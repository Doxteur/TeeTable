import * as React from "react";
import Router from "./router.jsx";
import { HashRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store";
import "./app.css";

const AppRouter = () => {
  const location = useLocation();
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
