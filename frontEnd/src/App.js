import React from "react";
<<<<<<< HEAD
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Signin from "./pages/signin/Signin";
// import concerts from "./pages/concerts";
// import chatroom from "./pages/chatroom";
import register from "./pages/registration/registrationValidation";
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
// import concerts from "./pages/concerts";
// import chatroom from "./pages/chatroom";
// import register from "./pages/register";
>>>>>>> 46ace74915c369ec3e7e16459bf37318be130b87
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
<<<<<<< HEAD
      <Navbar />
      <Wrapper>
        {/* <Route exact path="/" component={Signin} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/chatroom" component={Chatroom} /> */}
        <Route exact path="/registrationValidation" component={Register} />
      </Wrapper>
      <Footer />
=======
      {/* <Navbar /> */}
        <Route exact path="/" component={Signin} />
        {/* <Route exact path="/signin" component={Signin} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/chatroom" component={Chatroom} />
        <Route exact path="/register" component={Register} />
      {/* <Footer /> */}
>>>>>>> 46ace74915c369ec3e7e16459bf37318be130b87
    </div>
  </Router>;

export default App;
