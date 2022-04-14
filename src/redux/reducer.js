import { FilterReducer } from './filter/FilterSlice';

import { TodoReducer } from './todolist/TodolistSlice';


const reducer = (state={}, action) => {
    return {
        filters: FilterReducer(state.filters, action),
        todos: TodoReducer(state.todos, action)
    }
}

export default reducer;