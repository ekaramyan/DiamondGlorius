import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSorting } from '../redux/actions'
import useSearchDiamonds from './useSearchDiamonds'

const useSorting = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)

	const dispatch = useDispatch()
	const setSort = (sort_by, sort_type) =>
		dispatch(setSorting({ sort_by, sort_type }))

	const sorting = useSelector(state => state.sorting)
	const formData = useSelector(state => state.filters)
	const page = useSelector(state => state.page)
	const limit = useSelector(state => state.limit)
	const { searchDiamonds, load, err, suc } = useSearchDiamonds()

	const sortResults = async () => {
		setLoading(true)
		try {
			console.log(sorting)
			const response = searchDiamonds(
				formData,
				page,
				limit,
				sorting.sort_by,
				sorting.sort_type ? 'asc' : 'desc'
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

	return { sortResults, setSort, sorting, loading, error, success }
}

export default useSorting
