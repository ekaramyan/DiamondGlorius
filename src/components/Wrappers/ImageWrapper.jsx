import Image from 'next/image'

export default function ImageWrapper({ source, handleOpenModal }) {
	let baseUrl = null
	if (source) {
		const url = new URL(source)
		baseUrl = url.origin + url.pathname
	}
	return (
		<div
			className='card__image'
			onClick={handleOpenModal ? () => handleOpenModal(source) : null}
		>
			<Image
				src={baseUrl || source}
				alt={'image'}
				layout='fill'
				objectFit='cover'
				sizes='6/5'
			/>
		</div>
	)
}
