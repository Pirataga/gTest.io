var money = function(name,value){
	this.name = name;
	this.value = value;
}
var moneyTypes = [
	whiteMoney = new money('whiteMoney', 100),
	blackMoney = new money('blackMoney', 0)
]

function moneyInit(wMoney,bMoney){

 $("#money").text("Money :$ "  + wMoney);
 $("#dMoney").text("Dirty Money :$$ " + bMoney);
}
$(document).ready(function(){
	moneyInit(wMoney, bMoney);
})
