import { Col, Row } from 'react-bootstrap'
import FilterSelect from './UI/FilterSelect'

export default function Other({ otherData, handleUpdateFormData, formData }) {
	return (
		<>
			<div className='other__container'>
				<h1 className='Advance__search_title'>Other</h1>

				<Col>
					<Row md={4} style={{ gap: 15 }}>
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
