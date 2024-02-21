import { fetchData } from '@/api/fetchData'

export const universalServerSideProps = async (url, dataKey = 'data') => {
	try {
		const data = await fetchData(url)
		return {
			props: { [dataKey]: data },
		}
	} catch (error) {
		console.error('Error fetching data:', error)
		return {
			props: { [dataKey]: {} },
		}
	}
}
