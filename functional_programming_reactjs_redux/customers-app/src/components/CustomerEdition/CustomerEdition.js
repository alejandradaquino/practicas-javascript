import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdition = ({customer}) => {
    return (
        <div>
        Cazando un erizo {customer.dni}
            Cazando un erizo {customer.name}
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