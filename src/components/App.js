import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import FilterList from './FilterList'
import { Provider } from 'react-redux'
import store from '../store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Title from './Title';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider style={{width:"600px"}}>
        <Provider store={store}>
          <div>
            <Title>Todos</Title>
            <TodoForm />
            <TodoList />
            <FilterList />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App
