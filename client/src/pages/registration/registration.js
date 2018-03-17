// import React from 'react';
// // import RegistrationForm from "./registration";

// class index extends React.Component {
//   render() {
//     return(
//       <div>
//           <h1>Registration Form</h1>
//           <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <br/>
//   <label>
//     Email:
//     <input type="text" name="email" />
//   </label>
//   <br/>
//   <label>
//     Create a Username:
//     <input type="text" name="username" />
//   </label>
//   <br/>
//   <label>
//   <br/>
//    Zip Code (Only Houston City Limits):
//     <input type="text" name="zip" />
//   </label>
//   <br/>
//   <label>
//   <br/>
//    Create a Password:
//     <input type="text" name="password" />
//   </label>
//   <br/>
//   <label>
//   <br/>
//    Re-Enter Password:
//     <input type="text" name="name" />
//   </label>
//   <br/>
  

//   <input type="submit" value="Submit" />
// </form>
//         {/* <RegistrationForm/> */}
//       </div>
//     );
//   }
// }

// export default index;

import React, {Component} from "react";
import Passport from "./../../utilities/passport";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class index extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            name: "",
            zipCode: "",
            email: "",
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            Passport.authenticateUser({
                username: this.state.username,
                password: this.state.password,
            })
               
                .then((userData)=> console.log(userData))
                .catch(err => console.log(err));
        }
    };

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password(required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="name(required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="zipCode"
                                placeholder="zipCode(required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="email(required)"
                            />
                            <FormBtn
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >Submit
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default index;