var boss; var consigliere; var capos; var soldiers; var associate;
var friendlyPolice; var dangerousPolice;


//var boss = prompt("What is your name, Boss?");	//boss name?
	$(document).ready(function(){
		$('#boss').append(' ' + boss + " 's" + ' family');
	}); 
	if (boss == "") 
		{
			while(boss == ""){
			var boss = prompt("What is your name, Boss?");
			};
		};
