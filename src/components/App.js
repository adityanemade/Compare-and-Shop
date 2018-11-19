import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import ComingSoon from './ComingSoon';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={ComingSoon} />
      <Route component={ComingSoon} />
    </Switch>
  </Layout>
);

export default App;
