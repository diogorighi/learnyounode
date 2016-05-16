var arr = process.argv.slice(2,process.argv.length);
var sum = arr.reduce(function(previousValue, currentValue){
	return Number(previousValue) + Number(currentValue);
});

console.log(sum);
