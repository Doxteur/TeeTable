import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './core/Layout.jsx';
import AuthMiddleware from './middleware/AuthMiddleware.jsx';
import Home from './pages/Home.jsx';
import Layout_NoSidebar from './core/Layout_NoSidebar.jsx';
import ConnexionPage from './pages/ConnexionPage.jsx';
import TestPage from './pages/TestPage.jsx';

function router() {
  return (
    <Routes>
      {/* <Route element={<AuthMiddleware />}> */}
      <Route
        path='/'
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
      path='connexions'
      element={
        <Layout>
          <ConnexionPage />
        </Layout>
      }
      />

      <Route
        path='test'
        element={
          <Layout>
            <TestPage />
          </Layout>
        }
      />
      {/* </Route> */}
    </Routes>
  );
}

export default router;
