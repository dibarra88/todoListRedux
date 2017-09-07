import React, { Component } from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem'
import List from 'material-ui/List'

class TodoList extends Component {
    render() {
        return (
            <div>
                <List>
                {this.props.todos.filter(todo=>{
                    if(this.props.view === 'all'){
                        return todo
                    }else{
                    return todo.status === this.props.view
                    }
                }).map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
                </List>
            </div>
        )
    }
}

function mapStateToProps(appState){
    return {
        todos: appState.todos,
        view: appState.view
    }
}
export default connect(mapStateToProps)(TodoList)