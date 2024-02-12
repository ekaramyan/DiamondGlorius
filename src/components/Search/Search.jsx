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

        <div className={styles.dis__wrapper}>
            <p className={styles.dis__wrapper_title}>RAP DIS (%)</p>
            <input className={styles.dis__wrapper_input} placeholder='От' type="text" />
            <input className={styles.dis__wrapper_input} placeholder='До' type="text" />
            <p className={styles.dis__wrapper_price}>Цена/Карат RUB</p>
            <input className={styles.dis__wrapper_input} placeholder='От' type="text" />
            <input className={styles.dis__wrapper_input} placeholder='До' type="text" />
        </div>

        <div className={styles.example__wrapper}>
            <p className={styles.example__wrapper_title}>EXAMPLE</p>
            <input className={styles.example__wrapper_input1} placeholder='От' type="text" disabled value="-35" />
            <input className={styles.example__wrapper_input1} placeholder='До' type="text" disabled value="-40" />
            <p className={styles.example__wrapper_price}>Цена/Карат RUB</p>
            <input className={styles.example__wrapper_input} placeholder='От' type="text" />
            <input className={styles.example__wrapper_input} placeholder='До' type="text" />
        </div>

        <div className={styles.cutItem__wrapper}>
            <label className={styles.cutItem__label}>
                3 E X
                <input className={styles.cutItem__input} type="checkbox" />
            </label>
            <label className={styles.cutItem2__label}>
                2 E X
                <input className={styles.cutItem2__input} type="checkbox" />
            </label>
            <label className={styles.cutItem3__label}>
                3 V G +
                <input className={styles.cutItem3__input} type="checkbox" />
            </label>
            <label className={styles.noBgm__label}>
                NO BGM
                <input className={styles.noBgm__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.cut__wrapper}>
            <p className={styles.cut__title}>CUT</p>
            <label className={styles.cut__label}>
                EXCELLENT
                <input className={styles.cut__input} type="checkbox" />
            </label>
            <p className={styles.cutItem1__title}>BLACK INCLUSION IN TABLE</p>
            <label className={styles.cutItem1__label}>
                ALL
                <input className={styles.cutItem1__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.polish__wrapper}>
            <p className={styles.polish__title}>POLISH</p>
            <label className={styles.polish__label}>
                EXCELLENT
                <input className={styles.polish__input} type="checkbox" />
            </label>
            <p className={styles.polishItem1__title}>BLACK INCLUSION IN CROWN</p>
            <label className={styles.polishItem1__label}>
                ALL
                <input className={styles.polishItem1__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.symmetry__wrapper}>
            <p className={styles.symmetry__title}>SYMMETRY</p>
            <label className={styles.symmetry__label}>
                EXCELLENT
                <input className={styles.symmetry__input} type="checkbox" />
            </label>
            <p className={styles.symmetryItem1__title}>WHITE INCLUSION IN TABLE</p>
            <label className={styles.symmetryItem1__label}>
                ALL
                <input className={styles.symmetryItem1__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.crown__wrapper}>
            <p className={styles.crownItem1__title}>WHITE INCLUSION IN CROWN</p>
            <label className={styles.crownItem1__label}>
                ALL
                <input className={styles.crownItem1__input} type="checkbox" />
            </label>
        </div>

        <div className={styles.milky__wrapper}>
            <p className={styles.milkyItem1__title}>MILKY</p>
            <label className={styles.milkyItem1__label}>
                ALL
                <input className={styles.milkyItem1__input} type="checkbox" />
            </label>
        </div>
    </>
  )
}
