import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdition = props => {
    return (
        <div>
            Cazando un erizo
        </div>
    );
};

CustomerEdition.propTypes = {
  customer:PropTypes.shape({
      name: PropTypes.string,
      dni: PropTypes.string,
            
  }).isRequired,  
};

export default CustomerEdition;