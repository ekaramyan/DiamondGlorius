import React from 'react'
import styles from '../AdvanceSearch/AdvanceSearch.module.css'
import FromTo from '../UI/FromTo'

export default function AdvanceSearch({ formData, setFormData }) {
	return (
		<>
			<h1 className={styles.AdvanceSearch__title}>Advance Search</h1>
			<p className={styles.AdvanceSearch__subtitle}>Parameter</p>

			<div className={styles.td__wrapper}>
				<FromTo
					title={'DIA MN'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'giaMN'}
				/>
				<FromTo
					title={'TAB (%)'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'tab'}
				/>
				<FromTo
					title={'TD (%)'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'td'}
				/>
			</div>

			<div className={styles.ang__wrapper}>
				<FromTo
					title={'PV ANG'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'pvAng'}
				/>
				<FromTo
					title={'CR ANG'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'crAng'}
				/>
				{/* <FromTo
					title={'GIRDLE %'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'disc'}
				/> */}
			</div>

			<div className={styles.dia__wrapper}>
				<FromTo
					title={'DIA MX'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'giaMX'}
				/>
				<FromTo
					title={'RATIO'}
					formData={formData}
					setFormData={setFormData}
					objectKey={'ratio'}
				/>
			</div>
		</>
	)
}
