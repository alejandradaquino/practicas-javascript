import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdition = ({customer}) => {
    return (
        <div>
         dni: {customer.dni}<br/>
          nombre: {customer.name}
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