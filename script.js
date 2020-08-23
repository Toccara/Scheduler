$(document).ready(function () {

	var time = new Date();
	console.log(time.getHours() + ":" + time)

	//Date
	function getDate() {
		$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));
	};

	setInterval(getDate, 1000);

	//Color coding to indicate whether it is in the past, present, or future
	function colorSchedule() {
		$("input").each(function () {
			var rowHour = $(this).attr("id");
			var rowNumber = parseInt(rowHour);
			if (blockHour < currentHour) {
				$(this).addClass("past");
			} else if (blockHour === currentHour) {
				$(this).removeClass("past");
				$(this).addClass("present");
			} else {
				$(this).removeClass("past");
				$(this).removeClass("present");
				$(this).addClass("future");
			}
		});
	};

	//Results after selecting refresh
	function renderStoredInputs() {
		$(".event").each(function () {
			var inputId = $(this).attr("id");
			$(this).val(localStorage.getItem(inputId));
		});
	};

	//Click event to save user input in local storage
	$(".saveBtn").click(function () {
		var scheduleInputs = $(this).siblings(".event").val();
		var inputsLocation = $(this).siblings(".event").attr("id");
		localStorage.setItem(inputsLocation, scheduleInputs);
	});

	setInterval(getDate, 1000);
	colorSchedule();
	setInterval(colorSchedule, 1000);
	renderStoredInputs();

});

function newFunction() {
	return moment().hours();
}