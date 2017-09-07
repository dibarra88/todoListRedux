import React, { Component } from 'react'
import { changeView, deleteCompleted } from '../actions/todos'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
class FilterList extends Component {
    state = {
        todo: '',
    }
    deleteCompleted = (e) => {
        e.preventDefault()
        deleteCompleted()
    }
    alterView(view){
        changeView(view)
    }
    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle style={{ marginLeft: 20 }} text={this.props.count + " item" + (this.props.count !== 1 ? 's' : '') + " left"} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton onClick={(e) => {this.alterView('all')}}>All</FlatButton>
                    <FlatButton onClick={(e) => {this.alterView('pending')}}>Active</FlatButton>
                    <FlatButton onClick={(e) => {this.alterView('completed')}}>Completed</FlatButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton onClick={this.deleteCompleted} label="Clear Completed" />
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

function mapStateToProps(appState) {
    return {
        count: appState.todos.filter(todo => todo.status === 'pending').length
    }
}
export default connect(mapStateToProps)(FilterList)