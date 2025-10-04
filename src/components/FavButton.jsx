export default function FavButton({ onClick, page }) {
	return (
		<>
			<button
				className={
					page === 'oneColor'
						? 'bg-blue-950 hover:bg-white transition-all duration-500 rounded-md p-2 border-1 border-blue-950 w-[15%] ml-1 text-center flex justify-center items-center max-h-[45px]'
						: page === 'generate'
						? 'absolute right-9 top-1 bg-white/50 px-1 rounded-md'
						: 'bg-blue-950 hover:bg-white transition-all duration-500 rounded-md p-2 border-1 border-blue-950 w-[10%] ml-1 text-center flex justify-center items-center max-h-[45px]'
				}
				onClick={onClick}
			>
				⭐️
			</button>
		</>
	)
}
