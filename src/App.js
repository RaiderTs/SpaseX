import React from "react";


import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
// import Calendar from "./components/Calendar/Calendar";
// import Details from "./components/Details/Details";

class App extends React.Component{

  
  render() {
    return (
      <>
        <Header />
        <Main />
        <Features />
        {/* <Calendar /> */}
        <Footer />
        {/* <Details /> */}
      </>
    );
  }
}

export default App;
