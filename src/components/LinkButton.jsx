import { memo } from 'react'
import { NavLink } from 'react-router-dom'

function LinkButton({ to, onClick }) {
	return (
		<>
			<NavLink
				onClick={onClick}
				className={({ isActive }) => {
					return `mt-5 text-blue-500 font-bold text-xl mx-2 ${
						isActive ? 'text-blue-950' : 'text-blue-500'
					}`
				}}
				to={to}
			>
				{to === '/home'
					? 'HomePage'
					: to === '/gradient'
					? 'GradientPage'
					: 'OneColorPage'}
			</NavLink>
		</>
	)
}

export default memo(LinkButton)
