var arguments = process.argv.slice(2);

function compare(a,b) {
	if (a > b) {
		return 2;
	}
	else if (a < b) {
		return -5;

	}
	else {
		return 0;
	}
}

var compared = compare(2,2);
console.log(compared);