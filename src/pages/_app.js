import Head from 'next/head'
import { Provider } from 'react-redux'
import '@/app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import IndexWrapper from '../components/wrappers/IndexWrapper'
import store from '../redux/store'
// import favicon from '@/assets/img/favicon.webp'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Diamond Glorius</title>
			</Head>
			<IndexWrapper>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</IndexWrapper>
		</>
	)
}

export default MyApp
