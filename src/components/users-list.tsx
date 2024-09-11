import client from "@/db/db";
import { QueryResult } from "pg";

interface User {
	id: number,
	name: string,
	age: number,
};

export default async function usersList() {
	let users: User[] = [];

	try {
		const result: QueryResult = await new Promise((resolve) =>
			setTimeout(() =>
				resolve(client.query('SELECT id, name, age FROM users')),
				3000,
			),
		);
		users = result.rows;
		console.log(users);
	} catch (err) {
		console.error('Error fetching data :: ', err);
	}

	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table
							className="min-w-full text-left text-sm font-light text-surface dark:text-white">
							<thead
								className="border-b border-neutral-200 font-medium dark:border-white/10">
								<tr>
									<th scope="col" className="text-lg px-6 py-4">#</th>
									<th scope="col" className="text-lg px-6 py-4">Name</th>
									<th scope="col" className="text-lg px-6 py-4">Age</th>
								</tr>
							</thead>
							<tbody>
								{users.map(user => (
									<tr key={user.id} className="border-b border-neutral-200 dark:border-white/10">
										<td className="text-lg px-6 py-4 font-medium">{user.id}</td>
										<td className="text-lg px-6 py-4">{user.name}</td>
										<td className="text-lg px-6 py-4">{user.age}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
