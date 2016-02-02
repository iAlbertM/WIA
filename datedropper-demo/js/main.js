$(function () {
	
	$("#ex1").dateDropper({
		format: " m / d / Y ",
		minYear: "1930",
		maxYear: "1998",
		animation: "dropdown",
		years_multiple: "20",
		color: "#fa9f42"
	});

	
	$("#ex2").dateDropper({
		format: "Y",
		years_multiple: "10",
		color: "#00BABE"
	});

	
	$("#ex3").dateDropper({
		format: " l | F j, Y ",
		minYear: "1930",
		maxYear: "2015",
		animation: "dropdown",
		years_multiple: "20",
		color: "#aad33a"
	});

	
	$("#ex4a").dateDropper({
		format: "m",
		animation: "bounce",
		color: "#e33298"
	});

	
	$("#ex4b").dateDropper({
		format: "Y",
		maxYear: 2020,
		animation: "bounce",
		color: "#e33298"
	});
});