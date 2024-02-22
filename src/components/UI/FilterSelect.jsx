import { useState } from 'react'
import FilterButtons from './FilterButtons'
import { Row, Col, Form } from 'react-bootstrap'

export default function FilterSelect({ data, handleUpdateFormData, formData }) {
	return (
		<>
			{data.map((value, id) => (
				<Row key={id} className='align-items-center'>
					<Col>
						<FilterButtons
							buttons={value.buttons}
							title={value.title}
							updateFormData={(key, updatedData) =>
								handleUpdateFormData(key, updatedData)
							}
							data={value}
							formData={formData}
						/>
					</Col>
				</Row>
			))}
		</>
	)
}
