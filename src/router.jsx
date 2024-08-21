import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./core/Layout.jsx";
import AuthMiddleware from "./middleware/AuthMiddleware.jsx";
import Home from "./pages/Home.jsx";
import Layout_NoSidebar from "./core/Layout_NoSidebar.jsx";

function router() {
  return (
    <Routes>

      {/* <Route element={<AuthMiddleware />}> */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      {/* </Route> */}
    </Routes>
  );
}

export default router;
