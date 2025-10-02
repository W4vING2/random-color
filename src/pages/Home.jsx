import { useEffect, useMemo, useState } from 'react'

export default function Home() {
	const texts = useMemo(() => ['TailwindCSS', 'React.js', 'Cursor AI'], [])
	const [index, setIndex] = useState(0)
	const [displayText, setDisplayText] = useState('')
	const [subIndex, setSubIndex] = useState(0)
	const [reverse, setReverse] = useState(false)

	useEffect(() => {
		if (subIndex === texts[index].length + 1 && !reverse) {
			setReverse(true)
			return
		}
		if (subIndex === 0 && reverse) {
			setReverse(false)
			setIndex(prev => (prev + 1) % texts.length)
			return
		}

		const timeout = setTimeout(
			() => {
				setSubIndex(prev => prev + (reverse ? -1 : 1))
			},
			reverse ? 100 : 200
		)

		return () => clearTimeout(timeout)
	}, [subIndex, reverse, index, texts])

	useEffect(() => {
		setDisplayText(texts[index].substring(0, subIndex))
	}, [subIndex, index, texts])

	return (
		<>
			<h1 className='text-2xl font-bold text-blue-500 bg-blue-950 p-5 rounded-md'>
				Welcome to colors generate app
			</h1>
			<p className='text-xl font-bold text-white mt-7 bg-blue-950 rounded-md p-5'>
				{displayText}
				<span className='text-white/50 w-1 h-10 z-10'>|</span>
			</p>
		</>
	)
}
