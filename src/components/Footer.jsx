import { useState } from 'react'

export default function Footer() {
	const [isActive, setIsActive] = useState(false)
	return (
		<footer>
			<p>this is footer</p>
		</footer>
	)
}
