import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import TweetFeed from "./TweetFeed";
import RuleList from "./RuleList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="introduction"></div>

        <h1 className="ui header">
          <img
            className="ui image"
            src="../logo.jpg"
            alt="logo"
          />
          <div className="content">
            Hashtrack App
            <div className="sub header">Your app to follow your prefered hastags</div>
          </div>
        </h1>

        <div className="ui container">
          <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={RuleList} />
            <Route exact path="/rules" component={RuleList} />
            <Route exact path="/tweets" component={TweetFeed} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
