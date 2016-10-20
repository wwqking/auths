var index = function(arguments){
	this.name = arguments;
	return function(){
		console.log(arguments++);		
	}
}
var num = "2";
var tesr = "2ded";
