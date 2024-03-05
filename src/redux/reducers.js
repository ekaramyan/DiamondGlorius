import { defaultState } from '@/initialFormData'

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

const initialState = savedState ? savedState : defaultState

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
		case 'TOGGLE_VIEW_MODE':
			return {
				...state,
				viewMode: state.viewMode === 'table' ? 'cards' : 'table',
			}
		case 'SET_SORTING':
			return {
				...state,
				sorting: action.payload,
			}
		case 'SET_PAGE':
			return {
				...state,
				page: action.payload,
			}
		case 'SET_LIMIT':
			return {
				...state,
				limit: action.payload,
			}
		default:
			return state
	}
}

export default reducer
