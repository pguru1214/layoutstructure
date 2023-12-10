import React, { useContext } from "react";
import LayOutCOntext from "../Utils/LayoutContenxt";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Body from "./Body";
import RIghtSideNav from "./RIghtSideNav";
import Footer from "./Footer";

const RootLayout = () => {
  const { body, leftNav, rightNav } = useContext(LayOutCOntext);
  return (
    <div>
      <Header />
      <div className="row m-0">
        <div className="col-md-2">{leftNav && <LeftSideNav />}</div>
        <div className={`${leftNav || rightNav ? "col-md-8" : "col-md-12"}`}>{body && <Body />}</div>
        <div className="col-md-2">{rightNav && <RIghtSideNav />}</div>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
