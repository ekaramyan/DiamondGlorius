import React from 'react'
import styles from '../Search/Search.module.css'

export default function Search() {
  return (
    <>
        <label>
            <input className={styles.search__input} placeholder='Поиск' type="search" />
        </label>
        <button className={styles.search__btn}>
            <img className={styles.search__img} src="https://www.gloriousdiamonds.net/application/public/images/diamonds/w-1.png"/>
            <p className={styles.search__descr}>Круг</p>
        </button>
        <button className={styles.search__btn}>
            <img className={styles.search__img} src="https://www.gloriousdiamonds.net/application/public/images/diamonds/w-1.png"/>
            <p className={styles.search__descr}>Круг</p>
        </button>
        <div className={styles.carat__wrapper}>
            <p className={styles.carat__wrapper_title}>Карат</p>
            <input className={styles.carat__wrapper_input} placeholder='От' type="text" />
            <input className={styles.carat__wrapper_input} placeholder='До' type="text" />
        </div>
        <div className={styles.size__wrapper}>
            <p className={styles.size__title}>Размерная группа</p>
            <label className={styles.size__label}>
                30s
                <input className={styles.size__input} type="checkbox" />
            </label>
        </div>
        <div className={styles.color__wrapper}>
            <p className={styles.color__title}>Белый | Необычный</p>
            <label className={styles.color__label}>
                Все
                <input className={styles.color__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.clarity__wrapper}>
            <p className={styles.clarity__title}>Чистота</p>
            <label className={styles.clarity__label}>
                Все
                <input className={styles.clarity__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.fl__wrapper}>
            <p className={styles.fl__title}>FL</p>
            <label className={styles.fl__label}>
                Все
                <input className={styles.fl__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.colorShade__wrapper}>
            <p className={styles.colorShade__title}>Цвет оттенка</p>
            <label className={styles.colorShade__label}>
                Все
                <input className={styles.colorShade__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.lab__wrapper}>
            <p className={styles.lab__title}>LAB</p>
            <label className={styles.lab__label}>
                Все
                <input className={styles.lab__input} type="checkbox" />
            </label>
        </div>
    </>
  )
}
