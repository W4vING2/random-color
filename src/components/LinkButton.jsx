import { memo } from 'react'
import { NavLink } from 'react-router-dom'

function LinkButton({ to }) {
	return (
		<>
			<NavLink
				className={({ isActive }) => {
					const borderBottom = isActive ? 'border-b-2' : ''
					return `mt-5 text-blue-500 font-bold text-xl mx-2 border-blue-500 ${borderBottom}`
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
