import { Table } from 'react-bootstrap'
import TableItem from './UI/TableItem'
import TableHead from './UI/TableHead'
import { sortHeadings } from '@/initialFormData'

export default function TableComponent({ data }) {
	return (
		<Table striped bordered hover style={{ overflowX: 'auto' }}>
			<thead>
				<tr>
					{sortHeadings.map((heading, index) => (
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
