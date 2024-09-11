import AddUserForm from '@/components/add-user-form';
import UsersList from '@/components/users-list';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function Home() {
	return (
		<div>
			<h1 className='text-white text-4xl mb-8'>Users</h1>

			<AddUserForm />
			
			<Suspense fallback={<p>Loading...</p>}>
				<UsersList />
			</Suspense>
		</div>
	);
}
