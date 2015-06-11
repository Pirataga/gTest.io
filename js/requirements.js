//requires for some actions
var req = function(name,availability){
	this.name = name;
	this.availability = availability;
}

var reqs = [
	pass = new req('passport', false),
	
]
$("#reqs").append(function(){
	for(var i = 0; i <= reqs.length - 1; i++){
	$("#reqs").append("<div class='well'><span>" + reqs[i].name + "</span></div>")
};
})