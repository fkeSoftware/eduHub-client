import React from "react";
import Router from "../../Routes/Router";
import { Navbar, Footer, Sidebar } from "../../Components";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="core-layout d-grid grid-column-percent-12">
        <Sidebar />
        <div>
          <Router />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
