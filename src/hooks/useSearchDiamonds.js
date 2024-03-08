import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setFilters, setSearchResults, setPage } from '../redux/actions'
import { validateState } from '@/redux/validateState'

const useSearchDiamonds = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL
	const dispatch = useDispatch()
	const router = useRouter()

	const searchDiamonds = async (formData, page, limit, sort_by, sort_type) => {
		setLoading(true)
		try {
			const url =
				`${apiUrl}/diamonds?limit=${limit ? limit : 25}&page=${page}` +
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
				setError(response.detail[0].msg || 'An error occurred.')
			}
		} catch (err) {
			console.log(err.response)

			setError(err.response.data.detail[0].msg || 'An error occurred.')
			validateState(localStorage.getItem('reduxState'))
		} finally {
			setLoading(false)
		}
	}

	return { searchDiamonds, loading, error, success }
}

export default useSearchDiamonds
