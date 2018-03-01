import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import concerts from "./pages/concerts";
import chatroom from "./pages/chatroom";
import register from "./pages/register";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/chatroom" component={Chatroom} />
        <Route exact path="/register" component={Register} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
