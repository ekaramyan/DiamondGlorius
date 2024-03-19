import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSorting } from '../redux/actions'
import useSearchDiamonds from './useSearchDiamonds'

const useSorting = () => {
	const dispatch = useDispatch()
	const sorting = useSelector(state => state.sorting)
	const formData = useSelector(state => state.filters)
	const page = useSelector(state => state.page)
	const limit = useSelector(state => state.limit)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const [reactiveSort, setReactiveSort] = useState(sorting)
	const { searchDiamonds } = useSearchDiamonds()

	const setSort = (sort_by, sort_type) => {
		setReactiveSort({ sort_by, sort_type })
	}

	useEffect(() => {
		dispatch(setSorting(reactiveSort))
	}, [dispatch, reactiveSort])

	const sortResults = async (sort_by, sort_type) => {
		setLoading(true)
		try {
			const response = await searchDiamonds(
				formData,
				page,
				limit,
				sort_by,
				sort_type
			)

			if (response.status === 200 || response.status === 201) {
				setSuccess(response.data.isSuccess)
			} else {
				setError(response.data.message || 'An error occurred.')
			}
		} catch (err) {
			setError(err.response?.data?.message || 'An error occurred.')
		} finally {
			setLoading(false)
		}
	}

	return {
		sortResults,
		setSort,
		sorting,
		reactiveSort,
		loading,
		error,
		success,
	}
}

export default useSorting
