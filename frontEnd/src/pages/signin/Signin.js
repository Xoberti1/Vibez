import React, {Component} from "react";
import Passport from "../../utilities/"

class Signin extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    formSubmit(event){
        event.preventDefault();
        this.setState({
            username: event.username,
            password: event.password
        })
    }

    render(){
        return(
            <div>
                <form action="login" method="post" onSubmit={this.formSubmit}>
                    <input value="this.state.username" name="username" placeholder="username" type="text"/>
                    <input value="this.state.password" name="password" placeholder="password" type="password"/>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }

}

export default Signin;