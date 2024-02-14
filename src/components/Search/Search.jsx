import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from '../Search/Search.module.css'
import { Row, Col, Container } from 'react-bootstrap'

export default function Search() {
  return (
    <>
        <Container fluid >
            <Row>
                <Col md={4}>
                    <label>
                        <input className={styles.search__input} placeholder='Поиск' type="search" />
                    </label>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <button className={styles.search__btn}>
                        <img className={styles.search__img} src="https://www.gloriousdiamonds.net/application/public/images/diamonds/w-1.png"/>
                        <p className={styles.search__descr}>Круг</p>
                    </button>

                    <button className={styles.search__btn}>
                        <img className={styles.search__img} src="https://www.gloriousdiamonds.net/application/public/images/diamonds/w-1.png"/>
                        <p className={styles.search__descr}>Круг</p>
                    </button>

                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <div className={styles.Title}>Карат</div>
                    <div className={styles.Title}>Размерная группа</div>
                    <div className={styles.Title}>Белый | Необычный</div>
                    <div className={styles.Title}>Чистота</div>
                    <div className={styles.Title}>FL</div>
                    <div className={styles.Title}>Цвет оттенка</div>
                    <div className={styles.Title}>LAB</div>
                </Col>

                <Col md={4}>
                    <div className={styles.carat__wrapper_input}>
                        <input className={styles.carat__wrapper_inputItem} placeholder='От' type="text" />
                        <input className={styles.carat__wrapper_inputItem} placeholder='До' type="text" />
                    </div>

                    <label className={styles.size__label}>
                        30s
                        <input className={styles.size__input} type="checkbox" />
                    </label>

                    <label className={styles.size__label}>
                        Все
                        <input className={styles.color__input} type="checkbox" />
                    </label>

                    <label className={styles.size__label}>
                        Все
                        <input className={styles.clarity__input} type="checkbox" />
                    </label>

                    <label className={styles.size__label}>
                        Все
                        <input className={styles.fl__input} type="checkbox" />
                    </label>

                    <label className={styles.size__label}>
                        Все
                        <input className={styles.colorShade__input} type="checkbox" />
                    </label>

                    <label className={styles.size__label}>
                        Все
                        <input className={styles.lab__input} type="checkbox" />
                    </label>
                </Col>
            </Row>

            <Row>
                <Col md={2}>
                    <p className={styles.dis__wrapper_title}>RAP DIS (%)</p>
                </Col>
                <Col md={2}>
                    <input className={styles.dis__wrapper_input} placeholder='От' type="text" />
                    <input className={styles.dis__wrapper_input} placeholder='До' type="text" />
                </Col>
                <Col md={2}>
                    <p className={styles.dis__wrapper_price}>Цена/Карат RUB</p>
                </Col>
                <Col md={4}>
                    <input className={styles.dis__wrapper_input} placeholder='От' type="text" />
                    <input className={styles.dis__wrapper_input} placeholder='До' type="text" />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <p className={styles.dis__wrapper_title2}>EXAMPLE</p>
                </Col>
                <Col md={2}>
                    <input className={styles.example__wrapper_input1} placeholder='От' type="text" disabled value="-35" />
                    <input className={styles.example__wrapper_input1} placeholder='До' type="text" disabled value="-40" />
                </Col>
                <Col md={2}>
                    <p className={styles.dis__wrapper_price2}>Цена/Карат RUB</p>
                </Col>
                <Col md={4}>
                    <input className={styles.example__wrapper_input} placeholder='От' type="text" />
                    <input className={styles.example__wrapper_input} placeholder='До' type="text" />
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 2, offset: 2 }}>
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
                </Col>
            </Row>

            <Row>
                <Col md={2}>
                    <div className={styles.cut__title}>CUT</div>
                    <div className={styles.cut__title}>POLISH</div>
                    <div className={styles.cut__title}>SYMMETRY</div>
                </Col>
                <Col md={2}>
                    <label className={styles.cut__label}>
                        EXCELLENT
                        <input className={styles.cut__input} type="checkbox" />
                    </label>
                    <label className={styles.cut__label}>
                        EXCELLENT
                        <input className={styles.cut__input} type="checkbox" />
                    </label>
                    <label className={styles.cut__label}>
                        EXCELLENT
                        <input className={styles.cut__input} type="checkbox" />
                    </label>
                </Col>
                <Col md={2}>
                    <div className={styles.cutItem1__title}>BLACK INCLUSION IN TABLE</div>
                    <div className={styles.cutItem2__title}>BLACK INCLUSION IN CROWN</div>
                    <div className={styles.cutItem3__title}>WHITE INCLUSION IN TABLE</div>
                    <div className={styles.cutItem4__title}>WHITE INCLUSION IN CROWN</div>  
                    <div className={styles.cutItem5__title}>MILKY</div>
                </Col>

                <Col md={2}>
                    <label className={styles.cutItem1__label}>
                        ALL
                        <input className={styles.cutItem1__input} type="checkbox" />
                    </label>
                    
                    <label className={styles.cutItem1__label}>
                        ALL
                        <input className={styles.cutItem1__input} type="checkbox" />
                    </label>
                    <label className={styles.cutItem1__label}>
                        ALL
                        <input className={styles.cutItem1__input} type="checkbox" />
                    </label>
                    <label className={styles.cutItem1__label}>
                        ALL
                        <input className={styles.cutItem1__input} type="checkbox" />
                    </label>
                    <label className={styles.cutItem1__label}>
                        ALL
                        <input className={styles.cutItem1__input} type="checkbox" />
                    </label>
                </Col>
            </Row>
        </Container>
    </>
  )
}
