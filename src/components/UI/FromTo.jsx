import { Col } from 'react-bootstrap'
import styles from '../Search/Search.module.css'

export default function FromTo({ title }) {
	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 10,
				}}
			>
				<p className={styles.dis__wrapper_price}>{title}</p>
				<div
					md={2}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<input
						className={styles.dis__wrapper_input}
						placeholder='From'
						type='text'
					/>
					<input
						className={styles.dis__wrapper_input}
						placeholder='To'
						type='text'
					/>
				</div>
			</div>
		</>
	)
}
