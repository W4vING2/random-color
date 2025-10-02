import { useCallback, useState } from 'react'
import ButtonGenerate from '../components/ButtonGenerate'
import FavButton from '../components/FavButton'
import ColorCard from '../components/colorCard'
import chooseValue from '../utils/generateColor'

export default function OneColorPage() {
	const [color, setColor] = useState('')

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
	}

	return (
		<div className='relative flex flex-col z-[-1]'>
			<ColorCard color={color} />

			<div className='w-full flex flex-row items-center gap-2 mt-4'>
				<ButtonGenerate title='Generate Color' onClick={handleClick} />
				<FavButton onClick={addToFav} page='oneColor' />
			</div>
		</div>
	)
}
