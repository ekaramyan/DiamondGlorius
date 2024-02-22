export const initialFormData = {
	shape_ids: null,
	color_id: null,
	stno: null,
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
