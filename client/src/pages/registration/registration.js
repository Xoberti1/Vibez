import React from 'react';
// import RegistrationForm from "./registration";


class index extends React.Component {
  render() {
    return(
      <div>
          <h1>Registration Form</h1>
          <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
    Email:
    <input type="text" name="email" />
  </label>
  <br/>
  <label>
    Create a Username:
    <input type="text" name="username" />
  </label>
  <br/>
  <label>
  <br/>
   Zip Code (Only Houston City Limits):
    <input type="text" name="zip" />
  </label>
  <br/>
  <label>
  <br/>
   Create a Password:
    <input type="text" name="password" />
  </label>
  <br/>
  <label>
  <br/>
   Re-Enter Password:
    <input type="text" name="name" />
  </label>
  <br/>
  

  <input type="submit" value="Submit" />
</form>
        {/* <RegistrationForm/> */}
      </div>
    );
  }
}

export default index;