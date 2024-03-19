import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Button, Spinner } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

import useSearchDiamonds from '@/hooks/useSearchDiamonds'
import { useLoaded } from '@/hooks/useLoaded'
import useDownloadExcel from '@/hooks/useDownloadExcel'
import PaginationButtons from '../components/UI/PaginationButtons'
import TableComponent from '../components/TableComponent'
import Cards from '../components/Cards'
import SortList from '@/components/SortList'
import LimitList from '@/components/UI/LimitList'
import excel from '@/assets/img/excel.webp'

export default function SearchResults() {
	const data = useSelector(state => state.searchResults)
	const viewMode = useSelector(state => state.viewMode)
	const formData = useSelector(state => state.filters)
	const page = useSelector(state => state.page)
	const limit = useSelector(state => state.limit)
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const loaded = useLoaded()

	const [searchResults, setSearchResults] = useState([])
	useEffect(() => {
		setSearchResults(data?.data)
	}, [data])
	const router = useRouter()
	const { searchDiamonds, loading, error, success } = useSearchDiamonds()
	const backToFilters = () => {
		router.push('/')
	}
	const { downloadExcel, load, err, succ } = useDownloadExcel()
	return (
		<div style={{ marginTop: 25 }}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexWrap: 'wrap',
					gap: 25,
					marginBottom: 30,
				}}
			>
				<Button onClick={backToFilters}>Back to search</Button>
				<Button onClick={() => downloadExcel(limit, page)}>
					{load ? (
						<Spinner width={30} height={30} />
					) : (
						<Image
							width={30}
							height={30}
							src={excel.src}
							alt={'download excel'}
						/>
					)}
				</Button>
				{loaded && viewMode === 'cards' && <SortList />}
				{loaded && (
					<LimitList
						page={page}
						formData={formData}
						onPageChange={searchDiamonds}
					/>
				)}
				{loaded && (
					<PaginationButtons
						formData={formData}
						limit={limit}
						totalPages={searchResults?.total_pages}
						currentPage={page}
						onPageChange={searchDiamonds}
					/>
				)}
			</div>
			<div
				style={{
					overflowX: viewMode === 'table' ? 'auto' : 'hidden',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{loading ? (
					<Spinner width={50} height={50} />
				) : (
					<>
						{loaded && viewMode === 'cards' ? (
							<Cards data={searchResults?.data} />
						) : (
							<TableComponent data={searchResults?.data} />
						)}
					</>
				)}
			</div>
		</div>
	)
}
