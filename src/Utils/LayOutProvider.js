import React, { useState } from "react";
import LayOutCOntext from "./LayoutContenxt";

const LayoutProvider = ({ children }) => {
  const [layOut, setLayOut] = useState({
    header: true,
    leftNav: true,
    body: true,
    rightNav: true,
    footer: true,
  });
  const[header,setHeader] = useState(true)
  const [leftNav, setLeftNav] = useState(true);
  const [body, setBody] = useState(true);
  const [rightNav, setRightNav] = useState(true);
  const [footer, setFooter] = useState(true);
  return (
    <LayOutCOntext.Provider
      value={{
        header,
        setHeader,
        layOut,
        setLayOut,
        leftNav,
        setLeftNav,
        body,
        setBody,
        rightNav,
        setRightNav,
        footer,
        setFooter,
      }}
    >
      {children}
    </LayOutCOntext.Provider>
  );
};

export default LayoutProvider;
