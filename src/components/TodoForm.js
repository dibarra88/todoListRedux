import React, {Component} from 'react'
import {addTodo} from '../actions/todos'
import TextField from 'material-ui/TextField'


class TodoForm extends Component{
    state = {
        todo:'',
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        addTodo(this.state.todo)
        this.setState({
            todo:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                   <TextField onChange={this.handleChange} name="todo" value={this.state.todo} placeholder="What needs to be done?" required autoComplete={"off"} fullWidth={true}></TextField>
                    </form>
                </div>
        )
    }
}

export default TodoForm