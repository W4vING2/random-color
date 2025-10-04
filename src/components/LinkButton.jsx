import { memo } from 'react'
import { NavLink } from 'react-router-dom'

function LinkButton({ to, onClick }) {
	return (
		<>
			<NavLink
				onClick={onClick}
				className={({ isActive }) => {
					return `mt-5 font-bold text-lg mx-2 transition-colors max-h-[50px] hover:text-gray-400 duration-500 ${
						isActive ? 'text-gray-500' : 'text-white'
					}`
				}}
				to={to}
			>
				{to === '/home'
					? 'Home'
					: to === '/gradient'
					? 'Gradient'
					: to === '/favorite'
					? 'Favorite'
					: to === '/generate'
					? 'Generate'
					: 'OneColor'}
			</NavLink>
		</>
	)
}

export default memo(LinkButton)
