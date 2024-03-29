import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Alert,
	Row,
	Col,
	Button,
	Spinner,
	FormControl,
	InputGroup,
} from 'react-bootstrap'
import { GenderNeuter, ArrowCounterclockwise } from 'react-bootstrap-icons'
import useSearchDiamonds from '@/hooks/useSearchDiamonds'
import useSorting from '@/hooks/useSorting'
import {
	initialFormData,
	getMenuTabs,
	getConditionTypes,
	getOtherData,
	diamondShapesImg,
} from '@/initialFormData'
import { setFilters } from '../redux/actions'
import AdvanceSearch from '../components/AdvanceSearch'
import Other from '../components/Other'
import CircleButton from '../components/UI/CircleButton'
import FilterSelect from '../components/UI/FilterSelect'
import FromToComponent from '@/components/FromToComponent'

const CaratFilterList = dynamic(() => import('../components/CaratFilterList'), {
	ssr: false,
})

export default function Search({ diamonds }) {
	const formData = useSelector(state => state.filters)
	const { setSort } = useSorting()

	const dispatch = useDispatch()
	const { searchDiamonds, loading, error, success } = useSearchDiamonds()
	const router = useRouter()

	// useEffect(() => {
	// 	dispatch(setFilters(formData))
	// }, [formData, dispatch])

	const handleSetFilters = formData => {
		dispatch(setFilters(formData))
	}

	const handleUpdateFormData = (key, updatedData) => {
		const newFormData = {
			...formData,
			[key]: updatedData,
		}
		handleSetFilters(newFormData)
	}

	const handleInputChange = event => {
		const { name, value } = event.target
		const newFormData = {
			...formData,
			[name]: value,
		}
		handleSetFilters(newFormData)
	}

	const limit = useSelector(state => state.limit)
	const page = 1

	const handleSearchClick = () => {
		setSort('id', 'asc')
		searchDiamonds(formData, page, limit)
	}

	const handleResetFormData = () => {
		handleSetFilters(initialFormData)
	}

	const menuTabs = getMenuTabs(diamonds)
	const conditionTypes = getConditionTypes(diamonds)
	const otherData = getOtherData(diamonds)
	const unfilteredDiamondShapes = diamonds?.shapes
	const otherShapeIds = unfilteredDiamondShapes
		.filter(shape => !shape.visible)
		.map(shape => shape.id)

	const diamondShapes = [
		...diamonds?.shapes,
		{ title: 'other', id: otherShapeIds },
	]
	const isUnique = (id, shapes) => shapes.filter(shape => shape.id !== id)

	return (
		<>
			<Row>
				<InputGroup
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 10,
						marginLeft: 2,
						marginTop: 10,
					}}
				>
					<FormControl
						className='search__input'
						placeholder='Search'
						type='search'
						name='stno'
						value={formData.stno}
						onChange={handleInputChange}
					/>

					<Button
						className='button__primary'
						variant='primary'
						onClick={handleSearchClick}
					>
						{loading ? (
							<Spinner
								as='span'
								animation='border'
								size='sm'
								role='status'
								aria-hidden='true'
							/>
						) : (
							<GenderNeuter
								color='#e0e0e0'
								width={30}
								height={30}
								style={{ transform: 'rotate(-30deg)' }}
							/>
						)}
					</Button>
					<Button
						className='button__primary'
						variant='primary'
						onClick={handleResetFormData}
					>
						<ArrowCounterclockwise color='#e0e0e0' width={30} height={30} />
					</Button>
				</InputGroup>
				{error && (
					<Alert
						variant='danger'
						style={{ marginTop: 15, color: '#212529', fontWeight: 700 }}
					>
						{error}
					</Alert>
				)}
			</Row>

			<Row>
				<Col
					md={4}
					style={{
						width: '100%',
						display: 'flex',
						// flexWrap: 'wrap',
						gap: 5,
						marginTop: 20,
						overflowX: 'auto',
					}}
				>
					{diamondShapes
						.sort((a, b) => a.position - b.position)
						.map((diamondShape, index) => {
							if (
								diamondShape.id === 99 ||
								!isUnique(diamondShape.id, diamondShapes)
							) {
								const randomNumber = Math.floor(
									Math.random() * (10000 - 100) + 100
								)
								diamondShape.id = randomNumber
							}

							return (
								<CircleButton
									key={diamondShape.id}
									shape={diamondShape}
									images={diamondShapesImg}
									updateFormData={handleUpdateFormData}
									shapeIds={formData.shape_ids}
								/>
							)
						})}
				</Col>
			</Row>

			<Col
				md={4}
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					// flexWrap: 'wrap',
					gap: 15,
					marginTop: 20,
					overflowX: 'auto',
				}}
			>
				<CaratFilterList
					carats={formData.carat}
					formData={formData}
					setFilters={handleSetFilters}
					objectKey={'carat'}
				/>
				<FilterSelect
					data={menuTabs}
					handleUpdateFormData={handleUpdateFormData}
					formData={formData}
				/>
			</Col>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'start',
					justifyContent: 'center',
					flexWrap: 'wrap',
					marginTop: 35,
				}}
			>
				{/* <FromTo
					title={'RAP DIS (%)'}
					formData={formData}
					setFormData={handleSetFilters}
					objectKey={'disc'}
				/> */}
				<FromToComponent
					title={'Price/Carat USD'}
					formData={formData}
					setFormData={handleSetFilters}
					objectKey={'pricePerCarat'}
				/>
			</div>

			<Col>
				<Row md={4} className='filter-cols'>
					<FilterSelect
						data={conditionTypes}
						handleUpdateFormData={handleUpdateFormData}
						formData={formData}
					/>
				</Row>
			</Col>
			<AdvanceSearch formData={formData} setFormData={handleSetFilters} />
			<Other
				otherData={otherData}
				handleUpdateFormData={handleUpdateFormData}
				formData={formData}
			/>
		</>
	)
}
