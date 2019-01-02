
var url = "https://botman007.pythonanywhere.com/";
$('#forward').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: url+"forward",
	  context: document.body
	}).done(function(res) {
	  $('#result').text(JSON.stringify(res))
	});
})

$('#backward').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: url+"backward",
	  context: document.body
	}).done(function(res) {
	  $('#result').text(JSON.stringify(res))
	});
})

$('#left').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: url+"left",
	  context: document.body
	}).done(function(res) {
	  $('#result').text(JSON.stringify(res))
	});
})

$('#right').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: url+"right",
	  context: document.body
	}).done(function(res) {
	  $('#result').text(JSON.stringify(res))
	});
})

var ajax = function(req){
	
	/*$.ajax({url: "http://botman007.pythonanywhere.com/"+ req, success: function(result){
		//console.log(result)
		//res = result;
	}});*/

	$.ajax({
	  url: "http://botman007.pythonanywhere.com/"+ req,
	  context: document.body
	}).done(function(res) {
	  console.log(res)
	});
	//return res;
}