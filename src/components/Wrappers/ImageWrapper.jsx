import Image from 'next/image'

export default function ImageWrapper({ source, handleOpenModal }) {
	return (
		<div
			className='card__image'
			onClick={handleOpenModal ? () => handleOpenModal(source) : null}
		>
			<Image src={source} alt={'image'} layout='fill' objectFit='cover' />
		</div>
	)
}
