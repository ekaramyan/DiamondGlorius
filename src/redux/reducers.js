const initialState = {
	searchResults: [],
	filters: {},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SEARCH_RESULTS':
			return {
				...state,
				searchResults: action.payload,
			}
		case 'SET_FILTERS':
			return {
				...state,
				filters: action.payload,
			}
		default:
			return state
	}
}

export default reducer
