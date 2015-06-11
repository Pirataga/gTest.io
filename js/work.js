var wMoney = moneyTypes[0].value;
var bMoney = moneyTypes[1].value;

var work = function(name,salary,time){
	this.name = name;
	this.salary = salary;
	this.time = time;
}
var jobVariant = [
carwash = new work('carwash', 45, 500),
laundry = new work('work in the laundry', 70, 1000),
port = new work('work in port',110,2500),
test4 = new work('test4'),
test5 = new work('test5'),
test6 = new work('test6')
];	
$("#job[type = text]").val(function(){
		return this.value.toUpperCase();
})
$("#job").append(function(){
	for (var i = 0; i <= jobVariant.length - 1; i++) {
		$("#job").append("<div class='well disabled' onclick='moneyGive("+ i +")'><span>" +jobVariant[i].name+ "</span></div>");

	};
});
	

var progress = false;
function progressBar(i){
	$("#progressBar").animate({width: "0%"}, 10,"linear");
	progress = true;
	$("#progressBar").animate({width:"100%"}, i,"linear");
	progress = false;
}

function moneyGive(i){
	if (progress === true) {
		$(".tab-content > div > div > span").addClass('disabled');
	};
	progressBar(this.jobVariant[i].time);
	wMoney = wMoney + this.jobVariant[i].salary;
		moneyInit(wMoney,bMoney);
			console.log(wMoney);
	}


