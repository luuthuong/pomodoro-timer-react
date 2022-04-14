import { FilterReducer } from './filter/FilterSlice';
import { TodoReducer } from './todolist/TodolistSlice';
const reducer = (state, action) => {
    console.log(state);
    return {
        filters: FilterReducer(state, action),
        todos: TodoReducer(state, action)
    }
}

export default reducer;