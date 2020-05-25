import React from "react";
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => (
    <div className="locationCont">
      <h2>{city}</h2>
    </div>
  );

Location.propType = {
    city: PropTypes.string.isRequired,
}
 
export default Location;
