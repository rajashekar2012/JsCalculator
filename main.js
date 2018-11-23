
$(document).ready(function(){

	$(".keys").click(function  () {

		var type=$(this).attr("data-type");

		switch(type)
		{
			case "number":
			case "operator":
				var text=$("[data-type='screen']").val();
				$("[data-type='screen']").val(text+this.value);			
				break;

			case "clear":
				$("[data-type='screen']").val("");
				break;

			case "eval":

				var exp=$("[data-type='screen']").val();
				exp=exp.replace(String.fromCharCode(247),"/"); //replace divide by symbol
				exp=exp.replace("x","*");
				var result= eval(exp);
				$("[data-type='screen']").val(result);
				console.log(result);

				break;

			default:
				break;

		}
	})
})


function clear(){
	//debugger;
	alert("hello");
	//$("[data-type='screen']").val("");
}