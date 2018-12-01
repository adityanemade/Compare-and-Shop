import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

// Custom Modules
import './home.css';
import constants from './constants';
import {bindActionCreators} from 'redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-home">
        <h3>{constants[this.props.languageReducer.appLanguage].WELCOME}</h3>
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

export default connect(state => state, mapDispatchToProps)(Home);
