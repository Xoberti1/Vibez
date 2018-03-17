import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Shows from "./pages/concerts/Shows";
// import { Button } from 'reactstrap';
import CommentBox from "./pages/chatroom/chat";
// import register from "./pages/register";
// import Signin from "./pages/signin/Signin";
// import concerts from "./page/s/concerts";
// import chatroom from "./pages/chatroom";
import register from "./pages/registration/registration";
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <Route exact path="/" component={Signin} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/shows" component={Shows} />
    <Route exact path="/chatroom" component={CommentBox} />
    <Route exact path="/register" component={register} /> 
  </Router>;

ReactDOM.render(<CommentBox />, document.getElementById('container'));

export default App;
