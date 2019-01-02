
var res;
$('#forward').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: "http://botman007.pythonanywhere.com/forward",
	  context: document.body
	}).done(function(res) {
	  $('#result').text(JSON.stringify(res))
	});
})

$('#backward').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: "http://botman007.pythonanywhere.com/backward",
	  context: document.body
	}).done(function(res) {
	  $('#result').text(JSON.stringify(res))
	});
})

$('#left').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: "http://botman007.pythonanywhere.com/left",
	  context: document.body
	}).done(function(res) {
	  $('#result').text(JSON.stringify(res))
	});
})

$('#right').on('click', function(e){
	e.preventDefault();
	$.ajax({
	  url: "http://botman007.pythonanywhere.com/right",
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