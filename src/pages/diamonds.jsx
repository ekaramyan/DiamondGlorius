import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Search from '@/components/Search/Search'
import { universalServerSideProps } from '@/api/ssr'

export default function index({ diamondData }) {
	return (
		<>
			<Header />
			<Search diamonds={diamondData.data} />
			<Footer />
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
