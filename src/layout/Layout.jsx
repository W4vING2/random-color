import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import LinkButton from '../components/LinkButton'

export default function Layout() {
	const [open, setOpen] = useState(false)
	return (
		<>
			<header
				className='fixed inset-0 flex justify-around pt-5  xs:pt-7 max-w-[100vw] md:max-h-[10vh] bg-blue-950 text-white z-90'
				style={
					open === false
						? {
								maxHeight: '10vh',
						  }
						: {
								maxHeight: '100vh',
						  }
				}
			>
				<h1 className='font-bold text-2xl mr-25'>Random Colors</h1>
				<div
					className='h-[30px] w-[30px] absolute right-10 top-6 xs:top-8 flex flex-col gap-y-1 cursor-cell z-95 md:hidden'
					onClick={() => setOpen(false)}
				>
					<input
						type='checkbox'
						id='checkbox'
						className='absolute w-[30px] h-[30px] z-90 opacity-0 peer'
						onChange={() => setOpen(!open)}
						checked={open}
					/>
					<span className='w-5 bg-white h-1 block rounded-md peer-checked:rotate-45 transition-all peer-checked:translate-y-[4px]'></span>
					<span className='w-5 bg-white h-1 block rounded-md peer-checked:hidden transition-all'></span>
					<span className='w-5 bg-white h-1 block rounded-md peer-checked:rotate-135 transition-all peer-checked:translate-y-[-4px]'></span>
				</div>
				<div
					className={
						open
							? 'flex flex-col fixed inset-0 h-[100vh] w-[100vw] bg-blue-950 items-center justify-center z-90'
							: 'hidden md:flex mt-[-20px]'
					}
				>
					<LinkButton onClick={() => setOpen(false)} to='/home' />
					<LinkButton onClick={() => setOpen(false)} to='/gradient' />
					<LinkButton onClick={() => setOpen(false)} to='/one-color' />
					<LinkButton onClick={() => setOpen(false)} to='/favorite' />
					<LinkButton onClick={() => setOpen(false)} to='/generate' />
				</div>
			</header>
			<main className={open ? 'hidden' : 'block'}>
				<Outlet />
			</main>
		</>
	)
}
