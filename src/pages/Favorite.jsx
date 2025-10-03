import { useIndex } from '../hooks/useIndex'

export default function Favorite() {
	const favColors = localStorage.getItem('favColors').split(',')
	const favGradient = JSON.parse(localStorage.getItem('favGradient'))
	const { indexItem } = useIndex()
	return (
		<div className='flex flex-col items-center justify-center'>
			<h1 className='text-2xl font-bold text-blue-500 bg-blue-950 p-8 rounded-xl'>
				Favorite Colors And Gradients:
			</h1>
			<div className='flex justify-between md:min-w-[1200px] gap-x-20'>
				<ul className='mt-10 flex flex-wrap items-start gap-x-5 min-w-[45%]'>
					{favColors
						? favColors.map((el, ind) => (
								<div
									key={ind}
									className='w-[100px] h-[100px] flex items-center justify-center rounded-xl mt-5'
									style={{
										backgroundColor: `#${el}`,
									}}
								>
									{el}
								</div>
						  ))
						: 'No one fav color'}
				</ul>
				<ul className='ml-20 mt-10 flex gap-x-5 flex-wrap items-start min-w-[45%]'>
					{favGradient
						? favGradient.map((el, index) => (
								<div
									key={index}
									className='w-[200px] h-[100px] flex items-center justify-center rounded-xl mt-5'
									style={{
										backgroundImage: `linear-gradient(to right, #${el[0][0]}, #${el[0][1]})`,
									}}
								>
									{indexItem
										? String(el[0]) + '&' + String(el[1])
										: String(el[0])}
								</div>
						  ))
						: 'no one fav gradient'}
				</ul>
			</div>
		</div>
	)
}
