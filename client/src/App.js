import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
// import Signin from "./pages/signin/Signin";
// import concerts from "./page/s/concerts";
// import chatroom from "./pages/chatroom";
import index from "./pages/registration/index";
=======
import Signin from "./pages/signin/Signin";
// import Concerts from "./pages/concerts";
// import Chatroom from "./pages/chatroom";
// import Register from "./pages/register";
>>>>>>> 752a7223988d847bb924fa5d1087da8c39279ecb
// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      {/* <Navbar /> */}
<<<<<<< HEAD
        <Route exact path="/" component={index} />
        {/* <Route exact path="/signin" component={Signin} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/chatroom" component={Chatroom} />
        <Route exact path="/register" component={Register} />
=======
        <Route exact path="/" component={Signin} />
        <Route exact path="/signin" component={Signin} />
        {/* <Route exact path="/concerts" component={Concerts} /> */}
        {/* <Route exact path="/chatroom" component={Chatroom} /> */}
        {/* <Route exact path="/register" component={Register} /> */}
>>>>>>> 752a7223988d847bb924fa5d1087da8c39279ecb
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;
