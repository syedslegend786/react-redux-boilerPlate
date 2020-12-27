

const INITIAL_STATE = {
    users: [
        {
            name: "salleh",
            email: "salleh@gmail.com",
        },
        {
            name: "adeel",
            email: "adeel@gmail.com",
        }
    ]
}

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                users: [...state.users,action.data]
            })
    }
    return state
}