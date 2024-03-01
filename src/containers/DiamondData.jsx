import Image from 'next/image'
import { Row, Col, Table } from 'react-bootstrap'

export default function DiamondData({ diamond }) {
	console.log(diamond)

	const diamondTable = [
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
	return (
		<>
			<Row
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					gap: 10,
					marginLeft: 2,
					marginTop: 10,
				}}
			>
				<Table striped bordered hover style={{ maxWidth: 300 }}>
					<tbody>
						{diamondTable.map((_, index) => (
							<tr key={index}>
								<td style={{ textTransform: 'uppercase' }}>{_.title}</td>
								<td>{_.value}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Col>
					<Row>
						<Col className='data-column'>
							<div
								style={{
									width: 508,
									height: 400,
									position: 'relative',
									borderRadius: 15,
									overflow: 'hidden',
								}}
							>
								<Image
									src={diamond.img_url}
									alt={diamond.comment}
									layout='fill'
									objectFit='cover'
									style={{ borderRadius: 15 }}
								/>
							</div>
							<div className='data-column__text'>
								<p>stone id: {diamond.id}</p>
								<h6>
									{diamond.carat} {diamond.color.title} {diamond.clarity.title}
								</h6>
							</div>
						</Col>
						<div
							style={{
								width: 530,
								height: '100%',
								position: 'relative',
								borderRadius: 15,
								overflow: 'hidden',
							}}
						>
							<iframe
								src={diamond.vido_url}
								width='100%'
								height='482'
								frameBorder='0'
								scrolling='no'
								style={{ borderRadius: 15 }}
							></iframe>
						</div>
					</Row>
					<Col>
						<div
							style={{
								width: '100%',
								height: '1000px',
								position: 'relative',
								borderRadius: 15,
								overflow: 'hidden',
							}}
						>
							<Image
								src={diamond.cert_url}
								alt='certificate'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
				</Col>
			</Row>
		</>
	)
}
