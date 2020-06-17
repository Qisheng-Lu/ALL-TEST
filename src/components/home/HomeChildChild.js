import React from 'react';
import { Consumer } from "./homeNew";
require('@/assets/style/home.css');

class HomeChildChild extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Consumer>
        {(name) =>
          <div>
            <h2>孙组件</h2>
            <h2>{name}</h2>
          </div>
        }
        </Consumer>
        );
  }
}

export default HomeChildChild
