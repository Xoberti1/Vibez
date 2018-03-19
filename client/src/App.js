import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      {/* <Navbar /> */}
        <Route exact path="/" component={register} />
        {/* <Route exact path="/signin" component={Signin} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/chatroom" component={Chatroom} />
        <Route exact path="/register" component={Register} />
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;
