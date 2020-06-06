import React from "react";
import PropTypes from "prop-types";
import AppHeader from "../AppHeader";

const AppFrame = ({ header, body }) => (
  <div>
    <div className={"AppFrameContainer"}>
      <AppHeader title={header}></AppHeader>
    </div>
    <div>{body}</div>
    <div>Footer de ejemplo</div>
  </div>
);

AppFrame.propTypes = {
    header:PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;
