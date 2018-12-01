import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

// Custom Modules
import './home.css';
import constants from './constants';
import {bindActionCreators} from 'redux';
import storehouse from '../../storehouse';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {img : 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg',};

    console.log(this.state);
    console.log(this.props.loginReducer.email);
  }

  render() {
    return (
      <div className="main-home">
        <h3>{constants[this.props.languageReducer.appLanguage].WELCOME}</h3>
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card">
              <div class="view overlay">
                <img src={this.state.img} class="card-img-top" alt="" />

                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body text-center">
                <a href="" class="grey-text">
                  <h5>Outwear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Black jacket</a>
                  </strong>
                </h5>
                <h4 class="font-weight-bold blue-text">
                  <strong>219$</strong>
                </h4>
              </div>
            </div>
          </div>
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
