import { useState } from 'react'
import { ModalContext } from './ModalContext'

export const ModalProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(false)
	return (
		<ModalContext.Provider value={{ openModal, setOpenModal }}>
			{children}
		</ModalContext.Provider>
	)
}
