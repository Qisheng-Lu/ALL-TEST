import React from 'react';
import routes from '@/route/route.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
require('@/assets/style/app.css');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to="/">首页组件</Link>
            <Link to="/about">用户页面</Link>
            <Link to="/test">商户</Link>
          </header>
          {
            routes.map((route, key) => {

              if (route.exact) {

                return <Route key={key} exact path={route.path}
                              render={props => (
                                <route.component {...props} routes={route.routes}/>
                              )}

                />
              } else {
                return <Route key={key} path={route.path}
                              render={props => (
                                <route.component value={props} {...props} routes={route.routes}/>
                              )}
                />
              }
            })
          }


        </div>
      </Router>
    );
  }
}

export default App

