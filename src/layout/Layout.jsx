import { Outlet } from 'react-router-dom'
import LinkButton from '../components/LinkButton'

export default function Layout() {
	return (
		<>
			<header className='fixed inset-0 flex justify-around mt-5'>
				<h1 className='font-bold text-2xl'>Random Colors</h1>
				<div>
					<LinkButton to='/home' />
					<LinkButton to='/gradient' />
					<LinkButton to='/one-color' />
				</div>
			</header>
			<Outlet />
		</>
	)
}
