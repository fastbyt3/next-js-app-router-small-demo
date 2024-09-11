import client from "@/db/db";
import { revalidatePath } from "next/cache";

export default async function AddUserForm() {
	const addUser = async (formData: FormData) => {
		'use server';

		const insertQ = `INSERT INTO users(name, age) VALUES ('${formData.get('name')}', ${formData.get('age')})`;

		try {
			const res = await client.query(insertQ);
			console.log(res);
			revalidatePath('/');
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<form className="w-full max-w-sm mb-5" action={addUser}>
			<input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="name" placeholder="name" type="text" required />
			<input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="age" id="age" placeholder="age" type="number" required />

			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
		</form>
	);
}
