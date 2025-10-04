import { memo } from 'react'

function ColorCard({ color }) {
	return (
		<>
			<div
				className='flex justify-center items-center border-1 border-blue-950 w-[200px] h-[200px] xs:w-[300px] xs:h-[300px] rounded-xl p-4'
				style={{ backgroundColor: color ? `#${color}` : '#FFFFFF' }}
			>
				{color ? `#${color}` : '#FFFFFF'}
			</div>
		</>
	)
}

export default memo(ColorCard)
