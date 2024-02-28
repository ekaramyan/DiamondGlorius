import Image from 'next/image'
import {
	Row,
	Col,
	Modal,
	Button,
	Table,
	Form,
	InputGroup,
	FormControl,
	FormGroup,
} from 'react-bootstrap'
import { Dash, Plus } from 'react-bootstrap-icons'
import styles from './Cart.module.css'

export default function Cart({ show, close }) {
	const items = [
		{
			amt: 1356.84,
			amt_thb: 48710.56,
			bc_type: { id: 1, title: 'BC2' },
			bit_type: { id: 1, title: 'BT2' },
			carat: 1.5,
			cert: { id: 2, title: 'HRD' },
			cert_no: '230000060745',
			cert_url:
				'https://d3at7kzws0mw3g.cloudfront.net/certificates/230000060745.jpg',
			clarity: { id: 1, title: 'SI2' },
			color: { id: 4, title: 'I' },
			color_shade: { id: 1, title: 'WH' },
			comment: '-',
			cr_a: 38.87,
			cut_type: { id: 1, title: 'EX' },
			depth_per: 60.9,
			disc: -83.85,
			ec_type: { id: 1, title: 'E2' },
			finish_type: { id: 1, title: 'EX' },
			fluro_type: { id: 1, title: 'N' },
			gridle: 'medium',
			ha: '',
			id: 28347,
			img_url:
				'https://d3at7kzws0mw3g.cloudfront.net/images/diamond/230194-52.jpg',
			key_symbols: '-',
			l_w_ratio: 1.35,
			location: 'HONGKONG',
			measure: '8.79x6.50x3.96',
			milky_type: { id: 1, title: 'M0' },
			oppv_type: { id: 2, title: 'PO0' },
			opta_crown: { id: 2, title: 'CO1' },
			opta_type: { id: 2, title: 'PO0' },
			pav_a: 39.09,
			rap_price: 5600,
			rate: 904.56,
			rate_thb: 32473.71,
			shape: { id: 5, title: 'OVAL' },
			show_thb: true,
			site_diamond_id: 18171,
			stno: '230194-52',
			sym_type: { id: 2, title: 'VG' },
			table_per: 56,
			vido_url:
				'https://d3at7kzws0mw3g.cloudfront.net/video/Vision360.html?d=230194-52',
			wc_type: { id: 1, title: 'WC2' },
			wt_type: { id: 2, title: 'WT1' },
		},
	]
	return (
		<Modal show={show} size='xl' onHide={close} className={styles.cart}>
			<Modal.Header closeButton>
				<Modal.Title>Shopping Cart</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th className='h5'>Shopping Bag</th>
							<th>Location</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										<div className='d-flex align-items-center'>
											<Image
												src={item?.img_url}
												className='img-fluid rounded-3'
												width={120}
												height={120}
												alt='Diamond'
											/>
											<div className='flex-column ms-4'>
												<p className='mb-2'>{item.stno}</p>
												<p className='mb-0'>{item.id}</p>
											</div>
										</div>
									</td>
									<td>
										<p className='mb-0' style={{ fontWeight: 500 }}>
											{item.location}
										</p>
									</td>
									<td>
										<div className='d-flex flex-row'>
											<Button
												variant='link'
												className='px-2'
												onClick={() => {}}
											>
												<Dash />
											</Button>
											<Form.Control
												type='number'
												value='1'
												style={{ width: '50px' }}
											/>
											<Button
												variant='link'
												className='px-2'
												onClick={() => {}}
											>
												<Plus />
											</Button>
										</div>
									</td>
									<td>
										<p className='mb-0' style={{ fontWeight: 500 }}>
											{item.rap_price}
										</p>
									</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</Modal.Body>
			<Modal.Footer>
				<div
					className='card shadow-2-strong mb-5 mb-lg-0'
					style={{ borderRadius: '16px', width: '100%' }}
				>
					<div className='card-body p-4'>
						<Row>
							<div className='col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0'>
								<Form>
									<div className='d-flex flex-row pb-3'>
										<div className='d-flex align-items-center pe-2'>
											<Form.Check type='radio' id='radioNoLabel1v' checked />
										</div>
										<div className='rounded border w-100 p-3'>
											<p className='d-flex align-items-center mb-0'>
												{/* <FontAwesomeIcon
                                    icon={['fab', 'cc-mastercard']}
                                    size='2x'
                                    className='text-dark pe-2'
                                /> */}
												Credit Card
											</p>
										</div>
									</div>
									<div className='d-flex flex-row pb-3'>
										<div className='d-flex align-items-center pe-2'>
											<Form.Check type='radio' id='radioNoLabel2v' />
										</div>
										<div className='rounded border w-100 p-3'>
											<p className='d-flex align-items-center mb-0'>
												{/* <FontAwesomeIcon
                                    icon={['fab', 'cc-visa']}
                                    size='2x'
                                    className='text-dark pe-2'
                                /> */}
												Debit Card
											</p>
										</div>
									</div>
									<div className='d-flex flex-row'>
										<div className='d-flex align-items-center pe-2'>
											<Form.Check type='radio' id='radioNoLabel3v' />
										</div>
										<div className='rounded border w-100 p-3'>
											<p className='d-flex align-items-center mb-0'>
												{/* <FontAwesomeIcon
                                    icon={['fab', 'cc-paypal']}
                                    size='2x'
                                    className='text-dark pe-2'
                                /> */}
												PayPal
											</p>
										</div>
									</div>
								</Form>
							</div>
							<Col md={6} lg={4} xl={6}>
								<Row>
									<Col md={12} xl={6}>
										<FormGroup className='mb-4 mb-xl-5'>
											<Form.Label>Name on card</Form.Label>
											<InputGroup>
												<FormControl type='text' placeholder='John Smith' />
											</InputGroup>
										</FormGroup>
										<FormGroup className='mb-4 mb-xl-5'>
											<Form.Label>Expiration</Form.Label>
											<InputGroup>
												<FormControl type='text' placeholder='MM/YY' />
											</InputGroup>
										</FormGroup>
									</Col>
									<Col md={12} xl={6}>
										<FormGroup className='mb-4 mb-xl-5'>
											<Form.Label>Card Number</Form.Label>
											<InputGroup>
												<FormControl
													type='text'
													placeholder='1111 2222 3333 4444'
												/>
											</InputGroup>
										</FormGroup>
										<FormGroup className='mb-4 mb-xl-5'>
											<Form.Label>Cvv</Form.Label>
											<InputGroup>
												<FormControl
													type='password'
													placeholder='&#9679;&#9679;&#9679;'
												/>
											</InputGroup>
										</FormGroup>
									</Col>
								</Row>
							</Col>

							<div className='col-lg-4 col-xl-3'>
								<div
									className='d-flex justify-content-between'
									style={{ fontWeight: 500 }}
								>
									<p className='mb-2'>Subtotal</p>
									<p className='mb-2'>$23.49</p>
								</div>
								<div
									className='d-flex justify-content-between'
									style={{ fontWeight: 500 }}
								>
									<p className='mb-0'>Shipping</p>
									<p className='mb-0'>$2.99</p>
								</div>
								<hr className='my-4' />
								<div
									className='d-flex justify-content-between mb-4'
									style={{ fontWeight: 500 }}
								>
									<p className='mb-2'>Total (tax included)</p>
									<p className='mb-2'>$26.48</p>
								</div>
								<Button variant='primary' size='lg' block>
									<div className='d-flex justify-content-between'>
										<span>Checkout</span>
										<span>$26.48</span>
									</div>
								</Button>
							</div>
						</Row>
					</div>
				</div>
			</Modal.Footer>
		</Modal>
	)
}
