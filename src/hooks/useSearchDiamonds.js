import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setFilters, setSearchResults } from '../redux/actions'

const useSearchDiamonds = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL
	const dispatch = useDispatch()

	const searchDiamonds = async (formData, limit = 25, page = 1) => {
		setLoading(true)
		try {
			const response = await axios.post(
				`${apiUrl}/diamonds?limit=${limit}&page=${page}`,
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			console.log(response)

			if (response.status === 200 || response.status === 201) {
				setSuccess(true)
				dispatch(setFilters(formData))
				dispatch(setSearchResults(response.data))
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
