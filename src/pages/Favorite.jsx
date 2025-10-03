export default function Favorite() {
	const colors = localStorage.getItem('favColors')
	const favColors = colors ? colors.split(',') : ''
	const favGradient = JSON.parse(localStorage.getItem('favGradient'))
	return (
		<div className='flex flex-col items-center justify-center max-w-[100vw] min-h-[100vh]'>
			<h1 className='md:text-2xl text-xl font-bold text-blue-500 bg-blue-950 md:p-8 rounded-xl p-4'>
				Favorite Colors And Gradients:
			</h1>
			<div className='flex justify-between md:min-w-[1200px] md:gap-x-20 max-w-[100vw] gap-x-2'>
				<ul className='ml-5 md:ml-10 mt-10 flex flex-wrap items-start gap-x-2 md:gap-x-5 md:min-w-[45%]'>
					{favColors
						? favColors.map((el, ind) => (
								<div
									key={ind}
									className='md:w-[100px] md:h-[100px] w-[80px] h-[80px] flex items-center justify-center rounded-xl mt-5'
									style={{
										backgroundColor: `#${el}`,
									}}
								>
									{'#' + el}
								</div>
						  ))
						: 'No one favorite color'}
				</ul>
				<ul className='ml-5 mt-10 flex md:gap-x-5 gap-x-0 flex-wrap items-start md:min-w-[45%]'>
					{favGradient
						? favGradient.map((el, index) => (
								<div
									key={index}
									className='md:w-[200px] w-[160px] h-[100px] flex items-center justify-center rounded-xl md:mt-5 mt-2'
									style={{
										backgroundImage: `linear-gradient(to right, #${el[0][0]}, #${el[0][1]})`,
									}}
								>
									{'#' + String(el[0][0]) + ', #' + String(el[0][1])}
								</div>
						  ))
						: 'no one favorite gradient'}
				</ul>
			</div>
		</div>
	)
}
