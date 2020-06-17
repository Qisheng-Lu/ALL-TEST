import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import { Provider, connect } from 'react-redux'
import { mapStateToProps } from '../counter/mapStateToProps'
import { mapDispatchToProps } from '../counter/dispatch'
import { Counter } from '../counter/Counter'
import { Show } from '../counter/Show'
import { store } from '../counter/store'

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

const ShowApp = connect(
  mapStateToProps
)(Show)

class AboutNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    console.log(this.props.value,' console.log(this.props.value);')
  }
  render() {
    return (
      <div className='user'>
        <div className='content'>
          <div className='left'>
            <Provider store={store}>
              <App />
              <div>
                <ShowApp />
              </div>
            </Provider>,
            <h1>about</h1>
            <Link to='/about/aboutIndex'>增加用户</Link>
          </div>
          <div className='right'>
            {
              this.props.routes.map((item,index)=>{
                return <Route key={index} exact path={item.path} component={item.component}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AboutNew;
