import { useState, useEffect } from 'react'
import styles from '../Search/Search.module.css'

export default function OptionButton({
	option,
	imageSource,
	optionIds,
	onClick,
}) {
	const transformArrayValue = value => {
		if (value === null) {
			return []
		}
		return value
	}
	const [optionStyle, setOptionStyle] = useState(styles.search__btn)
	useEffect(() => {
		if (imageSource) {
			setOptionStyle(
				transformArrayValue(optionIds)?.includes(option.id)
					? styles.selected_option
					: styles.option__btn_highlight
			)
		} else {
			setOptionStyle(
				transformArrayValue(optionIds)?.includes(option.id)
					? styles.selected
					: styles.search__btn
			)
		}
	}, [optionIds])

	return (
		<button className={optionStyle} value={option.id} onClick={onClick}>
			{imageSource && (
				<img
					className={styles.search__img}
					src={imageSource}
					alt={option.title}
				/>
			)}
			<p className={styles.search__descr}>{option.title}</p>
		</button>
	)
}
