import styles from '../Search/Search.module.css'

export default function CircleButton({
	shape,
	imageSource,
	updateFormData,
	shapeIds,
}) {
	const transformArrayValue = value => {
		if (value === null) {
			return []
		}
		return value
	}
	const handleOptionClick = () => {
		const updatedShapeIds = transformArrayValue(shapeIds)?.includes(shape.id)
			? transformArrayValue(shapeIds)?.filter(id => id !== shape.id)
			: [...transformArrayValue(shapeIds), shape.id]
		updateFormData('shape_ids', updatedShapeIds)
	}
	return (
		<button
			className={`${styles.search__btn} ${
				transformArrayValue(shapeIds)?.includes(shape.id) && styles.selected
			}`}
			onClick={handleOptionClick}
		>
			{imageSource && (
				<img
					className={styles.search__img}
					src={imageSource}
					alt={shape.title}
				/>
			)}
			<p className={styles.search__descr}>{shape.title}</p>
		</button>
	)
}
