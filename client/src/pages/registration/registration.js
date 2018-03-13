import {Form, Field} from 'simple-react-forms';
import React, {Component} from 'react';

 class RegistrationForm extends Component {
  onClickHandler = ()=>  {
    console.log(this.refs['simpleForm'].getFormValues());
  }

  render () {
    return (
    <div>
      {/* <Form ref='simpleForm'>
          <Field
            name='city'
            label='Enter City name'
            type='text'
          />
          <Field
            name='state'
            label='Enter State name'
            type='text'
          />
      </Form> */}
      <button onClick={this.onClickHandler.bind(this)}>Submit</button>
    </div>

    )}}
    export default RegistrationForm;
