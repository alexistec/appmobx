import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import PostsStore from './store/PostsStore';
import Menu  from './Menu';
import './styles/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider PostsStore={PostsStore}>
        <Menu/>
      </Provider>
    );
  }
}

export default App;
