export const SamplePage = () => {
	const columns = [
		{
			header: "Name",
		},
		{
			header: "Job",
		},
		{
			header: "Employed",
		},
	];

	const rows = [
		{
			name: "John Doe",
			job: "Software Engineer",
			date: "2021-12-31",
		},
		{
			name: "Jane Doe",
			job: "DevOps Engineer",
			date: "2024-09-14",
		},
		{
			name: "John Smith",
			job: "Data Scientist",
			date: "2023-05-31",
		},
		{
			name: "Jane Smith",
			job: "Product Manager",
			date: "2022-02-28",
		},
	];

	return (
		<table className="alpha-w-full alpha-min-w-max alpha-table-auto alpha-text-left">
			<thead>
				<tr className="alpha-bg-gray-100">
					{columns.map(({ header }, index) => (
						<th
							key={`${header}_${index}`}
							className="alpha-border-b alpha-border-blue-gray-100 alpha-bg-blue-gray-50 alpha-p-4 alpha-font-normal alpha-leading-none alpha-opacity-70"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map(({ name, job, date }) => (
					<tr key={name} className="even:alpha-bg-blue-gray-50/50">
						<td className="alpha-p-4 alpha-border-b alpha-border-blue-gray-50">
							{name}
						</td>
						<td className="alpha-p-4 alpha-border-b alpha-border-blue-gray-50">
							{job}
						</td>
						<td className="alpha-p-4 alpha-border-b alpha-border-blue-gray-50">
							{date}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
