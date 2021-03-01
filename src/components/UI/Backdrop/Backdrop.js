import classes from "./Backdrop.module.css";

import React from "react";

const Backdrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.onClick}></div>;
};

export default Backdrop;
