var work = function(name,salary){
	this.name = name;
	this.salary = salary
}
var jobVariant = [
carwash = new work('carwash', 45),
laundry = new work('work in the laundry', 70)
];	
$("#job").append(function(){
	
	for (var i = 0; i <= jobVariant.length - 1; i++) {
		$("#job").append("<div class='well' onclick='moneySalary(" +wMoney+ "," +i+ " )'>" +jobVariant[i].name+ "</div>");

	};
});
	

var wMoney = moneyTypes[0].value;
var bMoney = moneyTypes[1].value;

function moneySalary(whiteMoney,i){
	wMoney = wMoney + jobVariant[i].salary;
		moneyInit(wMoney,bMoney);
			console.log(wMoney);

	}
console.log(wMoney);


