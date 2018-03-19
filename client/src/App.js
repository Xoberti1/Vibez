import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Shows from "./pages/concerts/Shows";
import Profile from "./pages/Profile/Profile"
// import { Button } from 'reactstrap';
// import chatroom from "./pages/chatroom";
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
    <div>
      {/* { <Navbar /> } */}
        <Route exact path="/" component={Profile} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/shows" component={Shows} />
        {/* <Route exact path="/chatroom" component={Chatroom} /> */}
        <Route exact path="/register" component={register} /> 
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;
