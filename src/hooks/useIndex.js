import { useContext } from 'react'
import { IndexContext } from '../context/IndexContext'

export const useIndex = () => {
	return useContext(IndexContext)
}
