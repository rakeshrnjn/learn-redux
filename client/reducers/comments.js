function postComments(state = [], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			//return the new stahte with new comment
			return [
				...state,
				{
					user: action.author,
					text: action.comment
				}
			];
		case 'REMOVE_COMMENT':
            // return the new state without the deleted somment
			return [
                //from the start to the one we will delete
                ...state.slice(0, action.i),
                //after the deleted one
                ...state.slice(action.i + 1)
            ]
		default:
			return state;
	}
}
function comments(state = [], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			//take current state
			...state,

			//overrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		};
	}
	return state;
}

export default comments;
