import React, { Component } from 'react';
import { Provider } from 'react-redux';
import config from './config';
import App from '../App';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: config(),
    };
  }

  render() {
    const { store } = this.state;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Store;
