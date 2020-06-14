import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { addPropsAsInitialValues } from "../../helpers/addPropsAsInitialValues";
import CustomerActions from "../CustomerActions";
import { Prompt } from "react-router";

const isRequired = (value) => !value && "El campo es requerido";
const isNumber = (value) => isNaN(value) && "El campo debe ser numérico";

const MyField = ({ input, meta, type, name, label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input type={type ? type : "text"} {...input}></input>
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const toNumber = (value) => value && parseInt(value);

const CustomerEdition = ({
  handleSubmit,
  submiting,
  onBack,
  pristine,
  submitSucceded,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          validate={(isRequired, isNumber)}
          label="Dni"
        ></Field>
        <Field
          name="age"
          type="number"
          component={MyField}
          label="Edad"
          parse={toNumber}
          validate={[isRequired, isNumber]}
        ></Field>
        <CustomerActions>
          <button type="submit" disabled={pristine || submiting}>
            Guardar
          </button>
          <button type="button" onClick={onBack}>
            Cancelar
          </button>
        </CustomerActions>
      </form>
    </div>
  );
};

CustomerEdition.propTypes = {
  initialValues:PropTypes.shape({
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

const reduxFormComponent = reduxForm({ form: "CustomerEdition" })(
  CustomerEdition
);
export default addPropsAsInitialValues(reduxFormComponent);
