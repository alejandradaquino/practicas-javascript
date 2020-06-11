import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { addPropsAsInitialValues } from "../../helpers/addPropsAsInitialValues";
import { from } from "rxjs";

const isRequired = (value) => !value && "El campo es requerido";
const isNumber = (value) => isNaN(value) && "El campo debe ser numérico";

const MyField = ({ input, meta, type, name,label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input type={type ? type : "text"} {...input}></input>
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const CustomerEdition = ({ dni, name, age }) => {
  return (
    <div>
      <form action="">
          <Field
            name="name"
            type="text"
            component={MyField}
            validate={isRequired}
            label="Nombre"
          ></Field>
          <Field
            name="dni"
            type="text"
            component={MyField}
            validate={isRequired, isNumber}
            label="Dni"
          ></Field>
          <Field
            name="age"
            type="number"
            component={MyField}
            label="Edad"
            validate={[isRequired, isNumber]}
          ></Field>
      </form>
    </div>
  );
};

CustomerEdition.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.string,
};

const reduxFormComponent = reduxForm({ form: "CustomerEdition" })(
  CustomerEdition
);
export default addPropsAsInitialValues(reduxFormComponent);
