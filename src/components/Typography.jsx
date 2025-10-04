export default function Typography({ text }) {
	return (
		<>
			<h1 className='md:text-2xl text-xl font-bold text-blue-500 bg-blue-950 md:p-8 rounded-xl p-4'>
				{text}
			</h1>
		</>
	)
}
