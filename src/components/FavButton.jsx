export default function FavButton({ onClick, page }) {
	return (
		<>
			<button
				className={
					page === 'oneColor'
						? 'bg-blue-500 hover:bg-white transition-all duration-500 rounded-md p-2 border-1 border-blue-500 w-[15%] ml-1 text-center flex justify-center items-center max-h-[45px]'
						: 'bg-blue-500 hover:bg-white transition-all duration-500 rounded-md p-2 border-1 border-blue-500 w-[10%] ml-1 text-center flex justify-center items-center max-h-[45px]'
				}
				onClick={onClick}
			>
				⭐️
			</button>
		</>
	)
}
