import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './component/AppNavBar';
import TodoList from './component/todos/TodoList';
import TodoModal from './component/todos/TodoModal';
import { Container } from 'reactstrap'

//-------for redux-----------
import { Provider } from 'react-redux';
import store from './store'



function App() {
  return (
    <Provider store={store}>


      <div className="App">
        <AppNavBar />
        <Container>
          <TodoModal />
          <TodoList />
        </Container>
      </div>


    </Provider>
  );
}

export default App;
