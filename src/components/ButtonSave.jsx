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
				{url === 'save' ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z' />
						<path d='M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7' />
						<path d='M7 3v4a1 1 0 0 0 1 1h7' />
					</svg>
				) : (
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
				)}
			</button>
		</>
	)
}
