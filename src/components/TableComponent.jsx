import { Table } from 'react-bootstrap'
import TableItem from './UI/TableItem'
import TableHead from './UI/TableHead'

export default function TableComponent({ data }) {
	const tableHeadings = [
		{ title: 'Stack №', objectKey: 'id' },
		{ title: 'shape', objectKey: 'shape' },
		{ title: 'carat', objectKey: 'carat' },
		{ title: 'color', objectKey: 'color' },
		{ title: 'clarity', objectKey: 'clarity' },
		{ title: 'cs', objectKey: 'color_shade' },
		{ title: 'cut', objectKey: 'cut' },
		{ title: 'polish', objectKey: 'pol' },
		{ title: 'symmetry', objectKey: 'sym' },
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
	return (
		<Table striped bordered hover style={{ overflowX: 'auto' }}>
			<thead>
				<tr>
					{tableHeadings.map((heading, index) => (
						<TableHead
							key={index}
							title={heading.title}
							objectKey={heading.objectKey}
						/>
					))}
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
