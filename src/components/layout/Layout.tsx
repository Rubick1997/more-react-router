import React from "react";
import { FunctionComponent } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
