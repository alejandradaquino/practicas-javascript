import React from "react";
import PropTypes from 'prop-types';

const Location = ({ city }) => (
    <div>
      <h2>{city}</h2>
    </div>
  );

Location.propType = {
    city: PropTypes.string.isRequired,
}
 
export default Location;
