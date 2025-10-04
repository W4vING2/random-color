import { useCallback, useState } from 'react'
import ButtonGenerate from '../components/ButtonGenerate'
import FavButton from '../components/FavButton'
import Modal from '../components/Modal'
import ColorCard from '../components/colorCard'
import { useModal } from '../hooks/useModal'
import chooseValue from '../utils/generateColor'

export default function GradientPage() {
	const [colors, setColors] = useState([])
	const { openModal, setOpenModal } = useModal()

	const addToFav = () => {
		const pastData = localStorage.getItem('favGradient')
		if (!pastData) localStorage.setItem('favGradient', JSON.stringify([colors]))
		else {
			const parsedData = JSON.parse(pastData)
			const existingColors = Array.isArray(parsedData)
				? parsedData
				: [parsedData]
			const allColors = [...existingColors, colors]
			localStorage.setItem('favGradient', JSON.stringify(allColors))
		}
		setOpenModal(true)
		setTimeout(() => {
			setOpenModal(false)
		}, 2000)
	}

	const handleGenerate = useCallback(() => {
		chooseValue(2, setColors)
	}, [])
	return (
		<>
			{openModal && <Modal />}
			<div className='relative flex flex-col gap-2 z-1'>
				<div className='flex flex-col md:flex-row gap-2'>
					<ColorCard color={colors[0] ? colors[0][0] : 'ffffff'} />
					<ColorCard color={colors[0] ? colors[0][1] : 'ffffff'} />
				</div>
				<div className='w-[100%] flex flex-nowrap gap-x-5'>
					<ButtonGenerate onClick={handleGenerate} title='Generate Gradient' />
					<FavButton onClick={addToFav} />
				</div>
			</div>
		</>
	)
}
