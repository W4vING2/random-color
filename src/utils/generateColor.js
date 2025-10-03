const generateColor = () => {
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

	return generatedColor
}

const chooseValue = (value, setState, index) => {
	const arrayOfColors = []
	for (let i = 0; i < value; i++) {
		const number = generateColor()
		arrayOfColors.push(number)
	}
	if (value === 1) {
		setState(arrayOfColors)
	} else {
		if (index) {
			setState([[arrayOfColors[0], arrayOfColors[1]]])
			console.log('index - 1')
		} else {
			setState([arrayOfColors])
			console.log('index none 1')
		}
	}
}

export default chooseValue
