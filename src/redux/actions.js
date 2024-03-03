export const setSearchResults = results => ({
	type: 'SET_SEARCH_RESULTS',
	payload: results,
})

export const setFilters = filters => ({
	type: 'SET_FILTERS',
	payload: filters,
})

export const toggleTheme = () => ({ type: 'TOGGLE_THEME' })

export const toggleViewMode = () => ({
	type: 'TOGGLE_VIEW_MODE',
})

export const setSorting = sort => ({
	type: 'SET_SORTING',
	payload: sort,
})

export const setPage = page => ({
	type: 'SET_PAGE',
	payload: page,
})
