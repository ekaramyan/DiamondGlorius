import styles from '../Search/Search.module.css'

export default function CircleButton({ text, imageSource }) {
	return (
		<button className={styles.search__btn}>
			{imageSource && <img className={styles.search__img} src={imageSource} />}
			<p className={styles.search__descr}>{text}</p>
		</button>
	)
}
