import { Col, Row } from 'react-bootstrap'
import styles from '../Other/Other.module.css'
import FilterSelect from '../UI/FilterSelect'

export default function Other({ otherData, handleUpdateFormData, formData }) {
	return (
		<>
			<div className={styles.otherContainer}>
				<h1 className={styles.otherTitle}>Other</h1>

				<Col md={10}>
					<Row md={4}>
						<FilterSelect
							data={otherData}
							handleUpdateFormData={handleUpdateFormData}
							formData={formData}
						/>
					</Row>
				</Col>
			</div>
		</>
	)
}
