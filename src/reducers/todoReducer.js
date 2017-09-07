const initialState = {
    todos: [],
    view: 'all'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [action.todo, ...state.todos] }
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
        case 'COMPLETE_TODO':
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return { ...todo, status: 'completed' }
                    } else {
                        return todo
                    }
                })
            }
        case 'INCOMPLETE_TODO':
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return { ...todo, status: 'pending' }
                    } else {
                        return todo
                    }
                })
            }
        case 'CHANGE_VIEW':
            return{...state, view: action.view}
        case 'DELETE_COMPLETED':
            return{...state, todos: state.todos.filter(todo => todo.status === 'pending')}
        default:
            return state
    }
}