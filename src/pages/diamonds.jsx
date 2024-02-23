import { universalServerSideProps } from '@/api/ssr'
import SearchResults from '@/components/SearchResults/SearchResults'

export default function index({ diamondData }) {
	return (
		<>
			<SearchResults />
		</>
	)
}

export async function getServerSideProps(context) {
	// const { req } = context
	// const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/categories`

	return await universalServerSideProps(url, 'diamondData')
}
