const generateColor = setState => {
	const array = []

	for (let i = 0; i < 6; i++) {
		const generateNumber = Math.floor(Math.random() * 16)

		switch (generateNumber) {
			case 10:
				array.push('A')
				break
			case 11:
				array.push('B')
				break
			case 12:
				array.push('C')
				break
			case 13:
				array.push('D')
				break
			case 14:
				array.push('E')
				break
			case 15:
				array.push('F')
				break
			default:
				array.push(generateNumber)
				break
		}
	}
	let generatedColor = ''

	array.forEach(el => {
		generatedColor += String(el)
	})

	setState(generatedColor)

	return generatedColor
}

const chooseValue = (value, setState) => {
	const arrayOfColors = []
	for (let i = 0; i < value; i++) {
		const number = generateColor(setState)
		arrayOfColors.push(number)
	}
	if (value === 1) {
		setState(arrayOfColors[0])
	} else {
		setState({
			colorOne: arrayOfColors[0],
			colorTwo: arrayOfColors[1],
		})
	}
}

export default chooseValue
