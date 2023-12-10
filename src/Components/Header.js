import React, { useContext } from "react";
import LayOutCOntext from "../Utils/LayoutContenxt";

const Header = () => {
  const { leftNav, rightNav, body, setBody, setLeftNav, setRightNav } =
    useContext(LayOutCOntext);

  const changeHandlerBody = () => {
    setBody(!body);
  };
  const changeHandlerLeft = () => {
    setLeftNav(!leftNav);
  };
  const changeHandlerRight = () => {
    setRightNav(!rightNav);
  };
  return (
    <div className="header">
      <h1>Header</h1>
      <input
        type="checkbox"
        value={leftNav}
        id="leftNav"
        onChange={changeHandlerLeft}
      />
      <label htmlFor="leftNav">Remove left Nav</label>
      <input
        type="checkbox"
        value={body}
        id="body"
        onChange={changeHandlerBody}
      />
      <label htmlFor="body">Remove Body</label>

      <input
        type="checkbox"
        value={rightNav}
        id="rightNav"
        onChange={changeHandlerRight}
      />
      <label htmlFor="rightNav">Remove Right Nav</label>
    </div>
  );
};

export default Header;
