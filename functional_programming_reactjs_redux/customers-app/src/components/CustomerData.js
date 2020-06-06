import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (
        <div>
          <div className={'customer-data'}>
              <h2>Datos del cliente</h2>
                  <div><b>Nombre: </b>{name}</div>
                  <div><b>DNI: </b>{dni}</div>
                  <div><b>Edad: </b>{age}></div>
              
          </div>


        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age:PropTypes.number,
};

export default CustomerData;