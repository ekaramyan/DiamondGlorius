import styles from '@/components/Search/Search.module.css'
import { Row, Col } from 'react-bootstrap'

export default function FilterButtons({ buttons }) {
	return (
		<div style={{ display: 'flex', gap: 15 }}>
			{buttons.map((button, index) => (
				<div key={index} className={styles.carat__wrapper_input}>
					<label className={styles.size__label}>
						{button.text}
						<input className={styles.size__input} type='checkbox' />
					</label>
				</div>
			))}
		</div>
	)
}
