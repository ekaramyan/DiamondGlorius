import { initialFormData } from '@/initialFormData'

const getSavedState = () => {
	try {
		const savedState = localStorage.getItem('reduxState')
		return savedState ? JSON.parse(savedState) : null
	} catch (error) {
		console.error('Error retrieving state from localStorage:', error)
		return null
	}
}

const savedState = getSavedState()

const initialState = savedState
	? savedState
	: {
			searchResults: [],
			filters: initialFormData,
			theme: 'light',
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
		case 'TOGGLE_THEME':
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light',
			}
		default:
			return state
	}
}

export default reducer
