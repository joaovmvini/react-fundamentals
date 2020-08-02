import React from "react";

export default (props) => {
  const { max, min } = props;
  const random = parseInt(Math.random() * (max - min)) + min;
  return <span>Random number is: {random}</span>;
};
