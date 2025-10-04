import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import Typography from '../components/Typography'

function Home() {
	const texts = useMemo(() => ['TailwindCSS', 'React', 'Javascript', 'CSS'], [])
	const [index, setIndex] = useState(0)
	const [subIndex, setSubIndex] = useState(0)
	const [reverse, setReverse] = useState(false)

	const updateIndex = useCallback(() => {
		setIndex(prev => (prev + 1) % texts.length)
	}, [texts.length])

	const updateSubIndex = useCallback(() => {
		setSubIndex(prev => prev + (reverse ? -1 : 1))
	}, [reverse])

	const displayText = useMemo(() => {
		return texts[index].substring(0, subIndex)
	}, [texts, index, subIndex])

	const checkConditions = useCallback(() => {
		if (subIndex === texts[index].length + 1 && !reverse) {
			setReverse(true)
			return true
		}
		if (subIndex === 0 && reverse) {
			setReverse(false)
			updateIndex()
			return true
		}
		return false
	}, [subIndex, reverse, index, texts, updateIndex])

	useEffect(() => {
		if (checkConditions()) {
			return
		}

		const timeout = setTimeout(updateSubIndex, reverse ? 100 : 200)
		return () => clearTimeout(timeout)
	}, [subIndex, reverse, checkConditions, updateSubIndex])

	return (
		<>
			<Typography text='Welcome to colors generate app' />
			<p className='max-w-[90vw] text-xl font-bold text-white mt-7 bg-blue-950 rounded-md p-5'>
				{displayText}
				<span className='text-white/50 w-1 h-10 z-10'>|</span>
			</p>
		</>
	)
}

export default memo(Home)
