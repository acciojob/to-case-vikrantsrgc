function toCase(text) {
  // write your code here
	const upercase = text.toUpperCase()
	const lowercase = text.toLowerCase()
	const result = `${lowercase}-${upercase}`
	return result
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
