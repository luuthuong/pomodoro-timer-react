const initState=[
]

export const TodoReducer=(state=[],action) =>{
    // console.log("Todo reducer",state,action);
    switch(action.type){
        case "TODO/AddTodo":
            return [...state,
                action.payload
            ]
        default:
            return state
    }
}