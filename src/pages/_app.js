import Head from 'next/head'
import { Col, Container, Row} from 'react-bootstrap'
// import IndexWrapper from '@/components/UI/index_wrapper'
// import store from '@/store'
// import favicon from '@/assets/img/favicon.webp'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Diamond Glorius</title>
			</Head>
			{/* <IndexWrapper> */}
			<Component {...pageProps} />
			{/* </IndexWrapper> */}
		</>
	)
}

export default MyApp
