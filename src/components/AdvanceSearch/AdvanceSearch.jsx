import React from 'react'
import styles from '../AdvanceSearch/AdvanceSearch.module.css'
import FromTo from '../UI/FromTo'

export default function AdvanceSearch() {
	return (
		<>
			<h1 className={styles.AdvanceSearch__title}>Advance Search</h1>
			<p className={styles.AdvanceSearch__subtitle}>Parameter</p>

			<div className={styles.td__wrapper}>
				<FromTo title={'DIA MN'} />
				<FromTo title={'TAB (%)'} />
				<FromTo title={'TD (%)'} />
			</div>

			<div className={styles.ang__wrapper}>
				<FromTo title={'PV ANG'} />
				<FromTo title={'CR ANG'} />
				<FromTo title={'GIRDLE %'} />
			</div>

			<div className={styles.dia__wrapper}>
				<FromTo title={'DIA MX'} />
				<FromTo title={'RATIO'} />
			</div>
		</>
	)
}
