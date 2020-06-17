import React from 'react';
import HomeChildChild from "./HomeChildChild"
import { Consumer } from "./homeNew";

class HomeChild extends React.Component {
  constructor(props){
    super(props);
  }

  clickFun(text) {
    this.props.pfn(text)
  }

  render() {
    return(
      <Consumer>
        {(value) =>
          <div>
            <h3>{this.props.age}</h3>
            <h1 onClick={this.clickFun.bind(this, 'lisi')}>点击</h1>
            <h2>{value}</h2>
            <HomeChildChild/>
          </div>
        }
      </Consumer>);
  }
}

export default HomeChild
