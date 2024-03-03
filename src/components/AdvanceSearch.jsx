import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FromToComponent from './FromToComponent'

export default function AdvanceSearch({ formData, setFormData }) {
	return (
		<Row style={{ marginTop: 45 }}>
			<h1 className='AdvanceSearch__title'>Advanced Search</h1>
			<p className='AdvanceSearch__subtitle'>Parameter</p>

			<Col>
				<FromToComponent
					title={'DIA MN'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'giaMN'}
				/>
				<FromToComponent
					title={'TAB (%)'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'tab'}
				/>
				<FromToComponent
					title={'TD (%)'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'td'}
				/>
			</Col>

			<Col>
				<FromToComponent
					title={'PV ANG'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'pvAng'}
				/>
				<FromToComponent
					title={'CR ANG'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'crAng'}
				/>
				{/* <FromToComponent
					title={'GIRDLE %'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'disc'}
				/> */}
			</Col>

			<Col>
				<FromToComponent
					title={'DIA MX'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'giaMX'}
				/>
				<FromToComponent
					title={'RATIO'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'ratio'}
				/>
			</Col>
		</Row>
	)
}
