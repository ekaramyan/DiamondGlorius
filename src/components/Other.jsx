import { Col, Row } from 'react-bootstrap'
import FilterSelect from './UI/FilterSelect'

export default function Other({ otherData, handleUpdateFormData, formData }) {
	return (
		<>
			<div className='otherContainer'>
				<h1 className='AdvanceSearch__title'>Other</h1>

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
