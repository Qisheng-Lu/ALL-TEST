import React from 'react';
// import Home from './home/home.js';
import AboutIndex from './aboutIndex.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class About extends React.Component {
  render() {
    return(
      <div>
        <h1>About</h1>
        <div className="about-index">
          {/*<Switch>*/}
            {/*<Route path="/" exact={true} component={Home}></Route>*/}
            <Route path="/about/aboutIndex" exact component={AboutIndex}></Route>
          {/*</Switch>*/}
        </div>
      </div>);
  }
}

export default About
