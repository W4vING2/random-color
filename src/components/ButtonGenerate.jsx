import { memo } from 'react'

function ButtonGenerate({ onClick, title }) {
	return (
		<>
			<button
				onClick={onClick}
				className='bg-blue-950 text-white py-2 rounded-xl px-3 hover:bg-white hover:text-blue-950 hover:border-blue-950 hover:border-2 border-2 border-transparent transition-all duration-400 w-[90%]'
			>
				{title}
			</button>
		</>
	)
}

export default memo(ButtonGenerate)
