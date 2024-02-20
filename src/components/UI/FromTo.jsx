import { Col } from 'react-bootstrap'
import styles from '../Search/Search.module.css'

export default function FromTo({ title }) {
	return (
		<>
			<Col md={2}>
				<p className={styles.dis__wrapper_price}>{title}</p>
			</Col>
			<Col md={2} style={{ display: 'flex' }}>
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
			</Col>
		</>
	)
}
