function add(){
	var sum = 5 + 9;
	console.log(sum);
}
add();


function add(){
	return 5 + 8;
}
var sum = add();
console.log(sum);

function add(a, b){
	return a + b;
}

var sum = add(4, 2);

// calling function from another function
function addAll(){
//	console.log(arguments.length);
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum = add(sum, arguments[i])
	}
	return sum;
}

addAll(6, 3, 5)
addAll(4, 7, 33, 2, '4')



function addAll(){
//	console.log(arguments.length);
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum = add(sum, +arguments[i])
	}
	return sum;
}

addAll(4, 7, 33, 2, '4')
addAll(4, 7, 33, 2, '4', 'hello')



var addAll = function(){
//	console.log(arguments.length);
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		if(!isNaN(arguments[i])){
			sum = add(sum, +arguments[i]);
		}
	}
	return sum;
}

addAll(4, 7, 33, 2, '4', 'hello')


// calculator

var operators = {
	'*': function(x, y){ return x * y},
	'/': function(x, y) { return x / y}
}

var calc = function(operand1, operand2, operator){
	return operators[operator](operand1, operand2);
//	console.log(operators.operator)
}


//mul(5, 6)
//div(55, 5)

calc(55, 5, '*')
















////////////////////////////
function addAll(){

    console.log(arguments.length);
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum=add(sum, arguments[i]);
        sum=add(sum, +arguments[i])  
    }

    return sum;
} 
addAll(4, 7);
///////////////////////////