import React from "react";
import Sidebar from "./Sidebar.jsx";

function Layout_NoSidebar({ children }) {
  return (
    <div className="bg-tertiary h-screen w-screen">
      {children}
    </div>
  );
}

export default Layout_NoSidebar;
