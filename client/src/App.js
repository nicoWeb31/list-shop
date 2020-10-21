import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './component/AppNavBar';
import TodoList from './component/todos/TodoList'

//-------for redux-----------
import {Provider} from 'react-redux';
import store from './store'



function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <AppNavBar/>
      <TodoList/>
    </div>

    </Provider>
  );
}

export default App;
