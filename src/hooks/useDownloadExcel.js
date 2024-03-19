import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import useSorting from './useSorting'

const useDownloadExcel = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL

	// const sorting = useSelector(state => state.sorting)
	const formData = useSelector(state => state.filters)

	const { reactiveSort: sorting } = useSorting()

	const downloadExcel = async (limit = 2000, page = 1) => {
		setLoading(true)
		try {
			const url =
				`${apiUrl}/diamonds/excel?limit=${limit}&page=${page}` +
				(sorting.sort_by && sorting.sort_type
					? `&sort_by=${sorting.sort_by}&sort_type=${sorting.sort_type}`
					: '')

			const response = await axios.post(url, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
				responseType: 'blob',
			})

			const blob = new Blob([response.data], {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			})

			const downloadUrl = window.URL.createObjectURL(blob)
			const link = document.createElement('a')
			link.href = downloadUrl
			link.setAttribute('download', 'diamonds.xlsx')
			document.body.appendChild(link)
			link.click()

			setSuccess(true)
		} catch (err) {
			setError(err.response?.data?.message || 'An error occurred.')
		} finally {
			setLoading(false)
		}
	}

	return { downloadExcel, loading, error, success }
}

export default useDownloadExcel
