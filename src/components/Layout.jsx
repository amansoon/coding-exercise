import React, { Children } from "react";

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__wrapper">{children}</div>
    </div>
  );
}

export default Layout;
