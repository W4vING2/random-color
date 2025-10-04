export default function FavButton({ onClick, page }) {
	return (
		<>
			<button
				className={
					page === 'oneColor'
						? 'bg-blue-950 hover:bg-white transition-all duration-500 rounded-md p-2 border-1 border-blue-950 w-[15%] ml-1 text-center flex justify-center items-center max-h-[45px]'
						: page === 'generate'
						? 'absolute right-9 top-1 bg-white/50 px-1 rounded-md'
						: 'bg-blue-950 hover:bg-white transition-all duration-500 xs:rounded-md rounded-xl p-2 border-1 border-blue-950 w-[15%] xs:w-[10%] xs:ml-1 ml-0 text-center flex justify-center items-center max-h-[45px] relative xs:right-0 right-4'
				}
				onClick={onClick}
			>
				⭐️
			</button>
		</>
	)
}
