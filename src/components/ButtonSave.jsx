import { useState } from 'react'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'

export default function ButtonSave({ colorOne, colorTwo, type, color }) {
	const [url, setUrl] = useState('save')
	const { openModal, setOpenModal } = useModal()
	async function saveData(colorOne, colorTwo, type) {
		if (type === 'gradient') {
			const text = `linear-gradient(toRight, ${colorOne}, ${colorTwo})`
			await navigator.clipboard.writeText(text)
		} else {
			await navigator.clipboard.writeText(`#${color}`)
		}
		setUrl('check')
		setOpenModal(true)
		setTimeout(() => {
			setOpenModal(false)
		}, 2000)
	}

	return (
		<>
			{openModal ? <Modal /> : ''}
			<button
				className='transition-all absolute top-1 right-1 bg-white/50 rounded-md text-black'
				onClick={() => saveData(colorOne, colorTwo, type, color)}
			>
				<img src={`../../public/${url}.svg`} alt='Icon' />
			</button>
		</>
	)
}
