import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import TortasStore from './store/TortasStore';
import Menu  from './Menu';


class App extends Component {
  render() {
    return (
      <Provider TortasStore={TortasStore}>
        <Menu/>
      </Provider>
    );
  }
}

export default App;
