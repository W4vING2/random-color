import { memo } from 'react'

function ColorInput({ value, onChange }) {
	return (
		<>
			<input
				value={value}
				onChange={onChange}
				type='color'
				className='
    w-20 h-20
    appearance-none
    border-none
    rounded-3xl
    cursor-pointer
    p-0
    bg-transparent
    backdrop-blur-md
    border border-white/20
    shadow-2xl
    [&::-webkit-color-swatch]:border-none
    [&::-webkit-color-swatch]:rounded-2xl
    [&::-webkit-color-swatch-wrapper]:p-0
    hover:scale-110
    hover:rotate-6
    hover:shadow-3xl
    transition-all
    duration-400
    ease-out
  '
			/>
		</>
	)
}

export default memo(ColorInput)
