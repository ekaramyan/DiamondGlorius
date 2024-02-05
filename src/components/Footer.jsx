import { useState } from 'react'

export default function Footer() {
	const [isActive, setIsActive] = useState(false)
	return (
		<>
			Footer
			<button onClick={() => setIsActive(!isActive)}>click!</button>
			{isActive && (
				<div>
					<p>Eat my shorts!</p>
				</div>
			)}
		</>
	)
}
