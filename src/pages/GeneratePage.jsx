import { useState } from 'react'
import ButtonSave from '../components/ButtonSave'
import ColorInput from '../components/ColorInput'
import FavButton from '../components/FavButton'
import Modal from '../components/Modal'
import Typography from '../components/Typography'
import { useModal } from '../hooks/useModal'

export default function GeneratePage() {
	const [firstValue, setFirstValue] = useState('#FFFFFF')
	const [secondValue, setSecondValue] = useState('#FFFFFF')
	const { openModal, setOpenModal } = useModal()

	const addToFav = () => {
		const valuesArray = [
			[
				firstValue.toUpperCase().substring(1, firstValue.length),
				secondValue.toUpperCase().substring(1, secondValue.length),
			],
		]
		const pastData = localStorage.getItem('favGradient')
		if (!pastData)
			localStorage.setItem('favGradient', JSON.stringify([valuesArray]))
		else {
			const parsedData = JSON.parse(pastData)
			const existingColors = Array.isArray(parsedData)
				? parsedData
				: [parsedData]
			const allColors = [...existingColors, valuesArray]
			localStorage.setItem('favGradient', JSON.stringify(allColors))
		}

		setOpenModal(true)
		setTimeout(() => {
			setOpenModal(false)
		}, 2000)
	}

	return (
		<>
			{openModal && <Modal />}
			<div className='flex flex-col gap-y-5 items-center'>
				<Typography text='Gradient Generator' />
				<div className='flex gap-x-2 items-center bg-blue-950 p-5 rounded-xl'>
					<ColorInput
						value={firstValue}
						onChange={e => setFirstValue(e.target.value)}
					/>
					<p className='text-white'>{firstValue.toUpperCase()}</p>
				</div>
				<div className='flex gap-x-2 items-center bg-blue-950 p-5 rounded-xl'>
					<ColorInput
						value={secondValue}
						onChange={e => setSecondValue(e.target.value)}
					/>
					<p className='text-white'>{secondValue.toUpperCase()}</p>
				</div>
				<div
					className='relative w-[350px] h-[125px] rounded-xl flex items-center shadow-2xl '
					style={{
						backgroundImage: `linear-gradient(to right, ${firstValue}, ${secondValue})`,
					}}
				>
					<FavButton page='generate' onClick={addToFav} />
					<ButtonSave
						type='gradient'
						colorOne={firstValue}
						colorTwo={secondValue}
					/>
				</div>
			</div>
		</>
	)
}
