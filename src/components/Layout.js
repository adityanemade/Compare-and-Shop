import React, {Component} from 'react';
import Loading from './Loading';
import Factory from './Factory';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import storeHouse from '../storehouse';

import utilities from '../utilities';
import {errorCodeMessages} from '../utilities/config';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        {this.props.children}
        <Loading />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(Layout);

