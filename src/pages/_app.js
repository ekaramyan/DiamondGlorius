import Head from 'next/head'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/app/globals.scss'
import IndexWrapper from '@/components/Wrappers/IndexWrapper'
import store from '../redux/store'
// import favicon from '@/assets/img/favicon.webp'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Diamond Glorius</title>
			</Head>
			<Provider store={store}>
				<IndexWrapper>
					<Component {...pageProps} />
				</IndexWrapper>
			</Provider>
		</>
	)
}

export default MyApp
