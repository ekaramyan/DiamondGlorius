import React from 'react'
import styles from '../Other/Other.module.css'

export default function Other() {
  return (
    <>
        <div className={styles.otherContainer}>
            <h1 className={styles.otherTitle}>Other</h1>

            <div className={styles.openTable__wrapper}>
                <p className={styles.openTable__title}>OPEN TABLE</p>
                <label className={styles.openTable__label}>
                    Все
                    <input className={styles.openTable__input} type="checkbox" />
                </label>
            </div>

            <div className={styles.openCrown__wrapper}>
                <p className={styles.openCrown__title}>OPEN CROWN</p>
                <label className={styles.openCrown__label}>
                    Все
                    <input className={styles.openCrown__input} type="checkbox" />
                </label>
            </div>

            <div className={styles.openPavilion__wrapper}>
                <p className={styles.openPavilion__title}>OPEN PAVILION</p>
                <label className={styles.openPavilion__label}>
                    Все
                    <input className={styles.openPavilion__input} type="checkbox" />
                </label>
            </div>

            <div className={styles.openClean__wrapper}>
                <p className={styles.openClean__title}>EYE CLEAN</p>
                <label className={styles.openClean__label}>
                    Все
                    <input className={styles.openClean__input} type="checkbox" />
                </label>
            </div>

            <div className={styles.openHearth__wrapper}>
                <p className={styles.openHearth__title}>HEART & ARROW</p>
                <label className={styles.openHearth__label}>
                    Все
                    <input className={styles.openHearth__input} type="checkbox" />
                </label>
            </div>
        </div>
    </>
  )
}
