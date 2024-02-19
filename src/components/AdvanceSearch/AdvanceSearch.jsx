import React from 'react'
import styles from '../AdvanceSearch/AdvanceSearch.module.css'

export default function AdvanceSearch() {
  return (
    <>     
            <h1 className={styles.AdvanceSearch__title}>Advance Search</h1>
            <p className={styles.AdvanceSearch__subtitle}>Parameter</p>

            <div className={styles.td__wrapper}>
                <p className={styles.td__wrapper_title}>TD (%)</p>
                <input className={styles.td__wrapper_input} placeholder='От' type="text" />
                <input className={styles.td__wrapper_input} placeholder='До' type="text" />
                <p className={styles.td__wrapper_price}>TAB (%)</p>
                <input className={styles.td__wrapper_input} placeholder='От' type="text" />
                <input className={styles.td__wrapper_input} placeholder='До' type="text" />
                <p className={styles.td__wrapper_price}>DIA MN</p>
                <input className={styles.td__wrapper_input} placeholder='От' type="text" />
                <input className={styles.td__wrapper_input} placeholder='До' type="text" />
            </div>

            <div className={styles.ang__wrapper}>
                <p className={styles.ang__wrapper_title}>PV ANG</p>
                <input className={styles.ang__wrapper_input} placeholder='От' type="text" />
                <input className={styles.ang__wrapper_input} placeholder='До' type="text" />
                <p className={styles.ang__wrapper_price}>CR ANG</p>
                <input className={styles.ang__wrapper_input} placeholder='От' type="text" />
                <input className={styles.ang__wrapper_input} placeholder='До' type="text" />
                <p className={styles.ang__wrapper1_price}>GIRDLE %</p>
                <input className={styles.ang__wrapper_input} placeholder='От' type="text" />
                <input className={styles.ang__wrapper_input} placeholder='До' type="text" />
            </div>

            <div className={styles.dia__wrapper}>
                <p className={styles.dia__wrapper_title}>DIA MX</p>
                <input className={styles.dia__wrapper_input} placeholder='От' type="text" />
                <input className={styles.dia__wrapper_input} placeholder='До' type="text" />
                <p className={styles.dia__wrapper1_price}>RATIO</p>
                <input className={styles.dia__wrapper_input} placeholder='От' type="text" />
                <input className={styles.dia__wrapper_input} placeholder='До' type="text" />
            </div>
    </>
  )
}
