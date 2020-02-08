//a reducer takes in two things:

//a. the action(info about what happend)
//b. copy of current state

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            const i = action.index;
            return [
                ...state.slice(0,i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ]
        
            default:
                return state;
    }
}

export default posts;