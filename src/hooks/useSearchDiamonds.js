import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setFilters, setSearchResults, setPage } from '../redux/actions'

const useSearchDiamonds = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL
	const dispatch = useDispatch()
	const router = useRouter()

	const searchDiamonds = async (
		formData,
		limit = 25,
		page = 1,
		sort_by,
		sort_type
	) => {
		setLoading(true)
		try {
			const url =
				`${apiUrl}/diamonds?limit=${limit}&page=${page}` +
				(sort_by && sort_type
					? `&sort_by=${sort_by}&sort_type=${sort_type}`
					: '')

			const response = await axios.post(url, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (response.status === 200 || response.status === 201) {
				dispatch(setFilters(formData))
				dispatch(setSearchResults(response.data))
				response.data.isSuccess && router.push('/diamonds')
				setSuccess(response.data.isSuccess)
				dispatch(setPage(page))
			} else {
				setError(response.data.message || 'An error occurred.')
			}
		} catch (err) {
			setError(err.response?.data?.message || 'An error occurred.')
		} finally {
			setLoading(false)
		}
	}

	return { searchDiamonds, loading, error, success }
}

export default useSearchDiamonds
