import React, {Component} from "react";

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
                <form onSubmit={this.formSubmit}>
                    <input value="this.state.username" name="username" placeholder="username" />
                    <input value="this.state.password" name="password" placeholder="password" />
                    <button type="submit"></button>
                </form>
            </div>
        )
    }

}

export default Signin;