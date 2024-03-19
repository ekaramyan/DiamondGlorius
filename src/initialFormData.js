import round from '@/assets/img/round.webp'
import heart from '@/assets/img/heart.webp'
import pear from '@/assets/img/pear.webp'
import emerald from '@/assets/img/emerald.webp'
import cushion from '@/assets/img/cushion.webp'
import princess from '@/assets/img/princess.webp'
import oval from '@/assets/img/oval.webp'
import marquise from '@/assets/img/marquise.webp'
import sqEmerald from '@/assets/img/sqEmerald.webp'
import lRadiant from '@/assets/img/lRadiant.webp'
import cushionMBR from '@/assets/img/cushionMBR.webp'
import other from '@/assets/img/other.webp'

export const initialFormData = {
	shape_ids: null,
	color_id: null,
	stno: '',
	clarity_id: null,
	cert_id: null,
	cut_type_id: null,
	finish_type_id: null,
	sym_type_id: null,
	fluro_type_id: null,
	ec_type_id: null,
	oppv_type_id: null,
	opta_crown_id: null,
	opta_type_id: null,
	color_shade_id: null,
	milky_type_id: null,
	bc_type_id: null,
	bit_type_id: null,
	wc_type_id: null,
	wt_type_id: null,
	giaMN: {
		min: null,
		max: null,
	},
	giaMX: {
		min: null,
		max: null,
	},
	price: {
		min: null,
		max: null,
	},
	carat: [
		{
			min: null,
			max: null,
		},
	],
	td: {
		min: null,
		max: null,
	},
	tab: {
		min: null,
		max: null,
	},
	pvAng: {
		min: null,
		max: null,
	},
	crAng: {
		min: null,
		max: null,
	},
	ratio: {
		min: null,
		max: null,
	},
	pricePerCarat: {
		min: null,
		max: null,
	},
	disc: {
		min: null,
		max: null,
	},
}

export const getMenuTabs = diamonds => {
	return [
		// {
		// 	id: 1,
		// 	title: 'size group',
		// 	buttons: [{ text: '30s' }, { text: '' }, { text: '' }],
		// },
		{
			id: 2,
			title: 'White | fancy',
			buttons: [{ title: 'All' }, ...diamonds.colors],
			key: 'color_id',
		},
		{
			id: 3,
			title: 'clarity',
			buttons: [{ title: 'All' }, ...diamonds.clarity_types],
			key: 'clarity_id',
		},
		{
			id: 4,
			title: 'FL',
			buttons: [{ title: 'All' }, ...diamonds.fluro_types],
			key: 'fluro_type_id',
		},
		{
			id: 5,
			title: 'color shade',
			buttons: [{ title: 'All' }, ...diamonds.color_shades],
			key: 'color_shade_id',
		},
		{
			id: 6,
			title: 'LAB',
			buttons: [{ title: 'All' }, ...diamonds.labs],
			key: 'cert_id',
		},
	]
}

export const getConditionTypes = diamonds => {
	return [
		{
			id: 1,
			title: 'cut',
			buttons: [...diamonds.cut_types],
			key: 'cut_type_id',
		},
		{
			id: 2,
			title: 'polish',
			buttons: [...diamonds.finish_types],
			key: 'finish_type_id',
		},
		{
			id: 3,
			title: 'symmetry',
			buttons: [...diamonds.symmetry_types],
			key: 'sym_type_id',
		},
		{
			id: 4,
			title: 'BLACK INCLUSION IN TABLE',
			buttons: [{ title: 'All' }, ...diamonds.bit_types],
			key: 'bit_type_id',
		},
		{
			id: 5,
			title: 'BLACK INCLUSION IN CROWN',
			buttons: [{ title: 'All' }, ...diamonds.bic_types],
			key: 'bc_type_id',
		},
		{
			id: 6,
			title: 'WHITE INCLUSION IN TABLE',
			buttons: [{ title: 'All' }, ...diamonds.wit_types],
			key: 'wt_type_id',
		},
		{
			id: 7,
			title: 'WHITE INCLUSION IN CROWN',
			buttons: [{ title: 'All' }, ...diamonds.wic_types],
			key: 'wc_type_id',
		},
		{
			id: 8,
			title: 'MILKY',
			buttons: [{ title: 'All' }, ...diamonds.milky_types],
			key: 'milky_type_id',
		},
	]
}

export const getOtherData = diamonds => {
	return [
		{
			id: 1,
			title: 'open table',
			buttons: [{ title: 'All' }, ...diamonds.open_table_types],
			key: 'opta_type_id',
		},
		{
			id: 2,
			title: 'open crown',
			buttons: [{ title: 'All' }, ...diamonds.open_crown_types],
			key: 'opta_crown_id',
		},
		{
			id: 3,
			title: 'open pavilion',
			buttons: [{ title: 'All' }, ...diamonds.open_pav_types],
			key: 'oppv_type_id',
		},
		{
			id: 4,
			title: 'eye clean',
			buttons: [{ title: 'All' }, ...diamonds.eye_clean_types],
			key: 'ec_type_id',
		},
	]
}

export const diamondShapesImg = [
	{ id: 1, name: 'oval', img: oval.src },
	{ id: 2, name: 'l radiant', img: lRadiant.src },
	{ id: 3, name: 'pear', img: pear.src },
	{ id: 4, name: 'emerald', img: emerald.src },
	{ id: 5, name: 'cushion', img: cushion.src },
	{ id: 6, name: 'princess', img: princess.src },
	{ id: 7, name: 'round', img: round.src },
	{ id: 8, name: 'marquise', img: marquise.src },
	{ id: 9, name: 'sq radiant', img: sqEmerald.src },
	{ id: 10, name: 'heart', img: heart.src },
	{ id: 11, name: 'cushion b', img: cushionMBR.src },
	{ id: 10, name: 'sq emerald', img: sqEmerald.src },
	{ id: 11, name: 'cushion mbr', img: cushionMBR.src },
	{ id: 12, name: 'other', img: other.src },
]

export const diamondTable = diamond => [
	{ title: 'stone id', value: diamond.id },
	{ title: 'shape', value: diamond.shape.title },
	{ title: 'carat', value: diamond.carat },
	{ title: 'color', value: diamond.color.title },
	{ title: 'clarity', value: diamond.clarity.title },
	{ title: 'color shade', value: diamond.color_shade.title },
	{ title: 'Rapaport', value: diamond.rap_price },
	{ title: 'cut', value: diamond.cut_type.title },
	{ title: 'polish', value: diamond.finish_type.title },
	{ title: 'symmetry', value: diamond.sym_type.title },
	{ title: 'Fluorescence', value: diamond.fluro_type.title },
	{ title: 'lab', value: diamond.cert.title },
	{ title: 'table%', value: `${diamond.table_per}%` },
	// { title: 'total depth%', value: `${diamond.table_per}%` },
	{ title: 'Measurements', value: diamond.measure },
	{ title: 'gridle', value: diamond.gridle },
	// { title: 'gridle%', value: diamond.id },
	{ title: 'bit', value: diamond.bit_type.title },
	{ title: 'bc', value: diamond.bc_type.title },
	{ title: 'wc', value: diamond.wc_type.title },
	{ title: 'h&a', value: diamond.ha },
	{ title: 'milky', value: diamond.milky_type.title },
	{ title: 'eye clean', value: diamond.ec_type.title },
	{ title: 'oppv', value: diamond.oppv_type.title },
	{ title: 'opta', value: diamond.opta_type.title },
	{ title: 'opcr', value: diamond.opta_crown.title },
	{ title: 'l/w ratio', value: diamond.l_w_ratio },
	{ title: 'Comment GIA', value: diamond.comment },
	// { title: 'FancyColorDescription', value: diamond.id },
]

export const sortHeadings = [
	{ title: 'Stack №', objectKey: 'id' },
	{ title: 'shape', objectKey: 'shape' },
	{ title: 'carat', objectKey: 'carat' },
	{ title: 'color', objectKey: 'color' },
	{ title: 'clarity', objectKey: 'clarity' },
	{ title: 'cs', objectKey: 'color_shade' },
	{ title: 'cut', objectKey: 'cut' },
	{ title: 'pol', objectKey: 'pol' },
	{ title: 'sym', objectKey: 'sym' },
	{ title: 'fl', objectKey: 'fluro' },
	{ title: 'lab', objectKey: 'lab' },
	{ title: 'Table%', objectKey: 'table' },
	{ title: 'TD%', objectKey: 'table_depth' },
	{ title: 'Measure', objectKey: 'measurement' },
	{ title: 'bit', objectKey: 'bit' },
	{ title: 'bc', objectKey: 'bc' },
	{ title: 'wt', objectKey: 'wt' },
	{ title: 'wc', objectKey: 'wc' },
	{ title: 'milky', objectKey: 'milky' },
	{ title: 'L/W Ratio', objectKey: 'l_w_ratio' },
	{ title: 'Additional', objectKey: null },
]

export const defaultState = {
	searchResults: [],
	filters: initialFormData,
	theme: 'light',
	viewMode: 'table',
	sorting: { sort_by: '', sort_type: '' },
	page: 1,
	limit: 25,
}
