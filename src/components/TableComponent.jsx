import { Table } from 'react-bootstrap'
import TableItem from './UI/TableItem'

export default function TableComponent({ data }) {
	return (
		<Table striped bordered hover style={{ overflowX: 'auto' }}>
			<thead>
				<tr>
					<th>Stack №</th>
					<th>Shape</th>
					<th>Carat</th>
					<th>Col</th>
					<th>Clarity</th>
					<th>Cs</th>
					<th>Cut</th>
					<th>Pol</th>
					<th>Sym</th>
					<th>Fl</th>
					<th>Lab</th>
					<th>Table%</th>
					<th>TD%</th>
					<th>Measurement</th>
					<th>Bit</th>
					<th>Bc</th>
					<th>Wt</th>
					<th>Wc</th>
					<th>Milky</th>
					<th>L/W Ratio</th>
					<th>Additional</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((searchResult, index) => (
					<TableItem key={searchResult.id} searchResult={searchResult} />
				))}
			</tbody>
		</Table>
	)
}
