import { useCallback, useState } from 'react'
import ButtonGenerate from '../components/ButtonGenerate'
import ColorCard from '../components/ColorCard'
import FavButton from '../components/FavButton'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'
import chooseValue from '../utils/generateColor'

export default function OneColorPage() {
	const [color, setColor] = useState('')
	const { openModal, setOpenModal } = useModal()

	const handleClick = useCallback(() => {
		chooseValue(1, setColor)
	}, [])

	const addToFav = () => {
		const lastFavColors = localStorage.getItem('favColors')
		if (!lastFavColors) localStorage.setItem('favColors', color)
		else {
			const concatenateArray = [color, lastFavColors]
			localStorage.setItem('favColors', concatenateArray)
		}
		setOpenModal(true)
		setTimeout(() => {
			setOpenModal(false)
		}, 2000)
	}

	return (
		<>
			{openModal && <Modal />}
			<div className='relative flex flex-col z-1'>
				<ColorCard color={color} />

				<div className='w-full flex flex-row items-center gap-2 mt-4'>
					<ButtonGenerate title='Generate Color' onClick={handleClick} />
					<FavButton onClick={addToFav} page='oneColor' />
				</div>
			</div>
		</>
	)
}
