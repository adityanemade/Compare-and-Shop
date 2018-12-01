import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './Layout';
import ComingSoon from './ComingSoon';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';

const App = () => (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Layout>
);



export default App;
