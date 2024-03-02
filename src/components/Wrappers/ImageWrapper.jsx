import Image from 'next/image'

export default function ImageWrapper({ source, handleOpenModal }) {
	return (
		<div
			className='cardImage'
			onClick={handleOpenModal ? () => handleOpenModal(source) : null}
		>
			<Image src={source} alt={'image'} layout='fill' objectFit='cover' />
		</div>
	)
}
