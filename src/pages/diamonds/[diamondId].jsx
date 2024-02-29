import { universalServerSideProps } from '@/api/ssr'
import DiamondData from '@/components/DiamondData'

export default function DiamondId({ diamondData }) {
	return <DiamondData diamond={diamondData.data} />
}

export async function getServerSideProps(context) {
	// const { req } = context
	// const token = req.cookies.access_token
	const id = context.params.diamondId
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/diamonds/${id}`

	return await universalServerSideProps(url, 'diamondData')
}
