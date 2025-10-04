export default function Modal() {
	return (
		<div className='w-[400px] h-[50px] bg-green-500 flex items-center text-white fixed top-2 right-2 rounded-md px-5 gap-x-1 anim-translate z-99'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M20 6 9 17l-5-5' />
			</svg>
			Success!
		</div>
	)
}
