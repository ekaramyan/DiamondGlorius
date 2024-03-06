import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom500() {
	const router = useRouter()
	useEffect(() => {
		localStorage.clear()
		router.push('/')
	}, [])

	return (
		<div>
			<h1>500 - Internal Server Error</h1>
			<p>Sorry, something went wrong on the server side.</p>
		</div>
	)
}
