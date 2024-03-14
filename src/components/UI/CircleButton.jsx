import OptionButton from './OptionButton'

export default function CircleButton({
	shape,
	images,
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
		updateFormData(
			'shape_ids',
			updatedShapeIds.length < 1 ? null : updatedShapeIds
		)
	}
	const matchedImg = images.find(img => img.name === shape.title.toLowerCase())
	const imageSource = matchedImg ? matchedImg.img : null

	return (
		<OptionButton
			option={shape}
			imageSource={imageSource}
			optionIds={shapeIds}
			onClick={handleOptionClick}
		/>
	)
}
