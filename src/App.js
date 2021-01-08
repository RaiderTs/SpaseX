import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


import "./style.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import Main from "./components/Main/Main";
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

import FetchData from "../src/service/FetchData";

class App extends React.Component {
  fetchData = new FetchData();

  state = {
    rocket: "Falcon 1",
    rocketFeatures: null,
    rockets: [],
    company: null,
  };

  componentDidMount() {
    // console.log(this.fetchData.getCompany);    // Возвращает промис
    // this.fetchData.getCompany().then(data => console.log(data))
    this.updateRocket();
    this.updateCompany();
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

  updateCompany = () => {
    this.fetchData.getCompany().then((company) => this.setState({ company }));
  };

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        {/* Когда приходим на страницу отображаем главную. Внутри указываем какую страницу хотим отобразить */}
        <Route exact path="/" render={() => this.state.company && 
          <Home company={this.state.company} />}>
          {/* {this.state.company && <Home company={this.state.company} />} */}
        </Route>

        <Route path="/rocket" render={() =>this.state.rocketFeatures && 
          <Features {...this.state.rocketFeatures} />}>  
          {/* <Main rocket={this.state.rocket} /> */}
          {/* {this.state.rocketFeatures && (s */}
          {/* <Features {...this.state.rocketFeatures} /> */}
          {/* )} */}
        </Route>

        <Route path="/calendar"  component={Calendar} >
          {/* <Main /> */}
          {/* <Calendar /> */}
        </Route>

        <Route path="/details/:id"  component={Details}>
          {/* <Main /> */}
          {/* <Details /> */}
        </Route>

        {this.state.company && <Footer {...this.state.company} />}
        {/* <Details /> */}
      </BrowserRouter>
    );
  }
}

export default App;
// 1.51