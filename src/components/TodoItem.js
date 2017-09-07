import React, { Component } from 'react'
import { removeTodo, completeTodo, incompleteTodo } from '../actions/todos'
import Checkbox from 'material-ui/Checkbox'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ContentDelete from 'material-ui/svg-icons/action/delete'


const completedStyle = {
    textDecoration: 'line-through',
    color: 'gray'
}

class TodoItem extends Component {

    remove = (e) => {
        removeTodo(this.props.id)
    }
    complete = (e) => {
        if (this.props.status === 'pending') {
            completeTodo(this.props.id)
        } else {
            incompleteTodo(this.props.id)
        }
    }
    render() {
        return (
            <ListItem
                leftCheckbox={<Checkbox checked={this.props.status === 'completed'} onClick={this.complete} />}
                primaryText={<span style={this.props.status === 'completed' ? completedStyle : {}}>{this.props.text}</span>}
                rightIconButton={<IconButton onClick={this.remove}>
                    <ContentDelete />
                </IconButton>}
            />
        )
    }
}

export default TodoItem