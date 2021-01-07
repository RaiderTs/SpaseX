import React from "react";

import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
// import Calendar from "./components/Calendar/Calendar";
// import Details from "./components/Details/Details";
import FetchData from "../src/service/FetchData";

class App extends React.Component {
  fetchData = new FetchData();

  state = {
    rocket: "Falcon 1",
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount() {
    // console.log(this.fetchData.getCompany);    // Возвращает промис
    // this.fetchData.getCompany().then(data => console.log(data))
    this.updateRocket();
  }

  updateRocket() {
    // console.log(this.state);
    this.fetchData
      .getRocket()
      .then((data) => {
        this.setState({ rockets: data.map((item) => item.name) });
        return data;
      })
      .then((data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) => this.setState({ rocketFeatures }));
    // console.log(this.state);
  }

  changeRocket = (rocket) => {
    this.setState(
      {
        rocket,
      },
      this.updateRocket
    );
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        <Features rocket={this.state.rocketFeatures} />
        {/* <Calendar /> */}
        <Footer />
        {/* <Details /> */}
      </>
    );
  }
}

export default App;
