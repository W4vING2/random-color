export default function Typography({ text }) {
	return (
		<>
			<h1 className='md:text-2xl xs:text-xl text-md font-bold text-blue-500 bg-blue-950 md:p-8 rounded-xl xs:p-4 p-2 mr-3 xs:mr-0'>
				{text}
			</h1>
		</>
	)
}
