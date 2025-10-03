import { useState } from 'react'
import { IndexContext } from './IndexContext'

export const IndexProvider = ({ children }) => {
	const [indexItem, setIndexItem] = useState(true)
	return (
		<IndexContext.Provider value={{ indexItem, setIndexItem }}>
			{children}
		</IndexContext.Provider>
	)
}
