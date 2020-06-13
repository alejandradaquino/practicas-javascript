import React, { Component } from "react";

export const addPropsAsInitialValues = (WrappedComponent) =>
  class extends Component {
    render() {
      return (
        <WrappedComponent
          initialValues={this.props}
          {...this.props}
          enableReinitialize
        ></WrappedComponent>
      );
    }
  };
