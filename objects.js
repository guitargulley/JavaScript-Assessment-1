//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me.name = 'Brandon Gulley'
me.age = 30
me['hair color'] = 'brown'

console.log(me)

//2. Iterate over the object to console.log the propery or key names. 
function showPerson(obj) {

	for(var prop in obj){
		console.log(`obj.${prop} = ${obj[prop]}`)
	}
} console.log(showPerson(me))