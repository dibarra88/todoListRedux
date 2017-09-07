import store from '../store'
import shortid from 'shortid'

export function addTodo(text){
    store.dispatch({
        type: 'ADD_TODO',
        todo: {
            text:text,
            id:shortid.generate(),
            status: 'pending'
        }
    })
}

export function removeTodo(id){
    store.dispatch({
        type:'REMOVE_TODO',
        id: id
    })
}

export function completeTodo(id){
    store.dispatch({
        type:'COMPLETE_TODO',
        id:id
    })
}

export function incompleteTodo(id){
    store.dispatch({
        type:'INCOMPLETE_TODO',
        id:id
    })
}

export function deleteCompleted(){
    store.dispatch({
        type:'DELETE_COMPLETED'
    })
}

export function changeView(view){
    store.dispatch({
        type:'CHANGE_VIEW',
        view: view
    })
}