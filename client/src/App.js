import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
// import Signin from "./pages/signin/Signin";
// import concerts from "./page/s/concerts";
// import chatroom from "./pages/chatroom";
import index from "./pages/registration/index";
=======

import Signin from "./pages/signin/Signin";
import Shows from "./pages/concerts/Shows";
// import { Button } from 'reactstrap';
// import chatroom from "./pages/chatroom";
// import register from "./pages/register";
// import Signin from "./pages/signin/Signin";
// import concerts from "./page/s/concerts";
// import chatroom from "./pages/chatroom";
import register from "./pages/registration/registration";
>>>>>>> a941a5fadd1996e404b52c10313ce7afcae31fb9
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
<<<<<<< HEAD
      {/* <Navbar /> */}
        <Route exact path="/" component={index} />
        {/* <Route exact path="/signin" component={Signin} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/chatroom" component={Chatroom} />
        <Route exact path="/register" component={Register} />
=======
      {/* { <Navbar /> } */}
        <Route exact path="/" component={Signin} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/shows" component={Shows} />
        {/* <Route exact path="/chatroom" component={Chatroom} /> */}
        <Route exact path="/register" component={register} /> 
>>>>>>> a941a5fadd1996e404b52c10313ce7afcae31fb9
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;
