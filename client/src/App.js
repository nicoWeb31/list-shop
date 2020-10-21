import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './component/AppNavBar';
import TodoList from './component/todos/TodoList'


function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <TodoList/>
    </div>
  );
}

export default App;
