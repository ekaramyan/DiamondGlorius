'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const seconds = 5
export default function Custom404() {
	const [countdown, setCountdown] = useState(seconds)
	const router = useRouter()

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown(prevCountdown => prevCountdown - 1)
		}, 1000)

		const redirectTimer = setTimeout(() => {
			localStorage.clear()
			router.push('/')
		}, seconds * 1000)

		return () => {
			clearInterval(timer)
			clearTimeout(redirectTimer)
		}
	}, [])
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100dvh',
				gap: 5,
			}}
		>
			<p
				style={{
					fontSize: 32,
				}}
			>
				Redirect to main page in{' '}
				<span style={{ color: '#6172d5', fontWeight: 700 }}> {countdown}</span>{' '}
				seconds
			</p>
		</div>
	)
}
