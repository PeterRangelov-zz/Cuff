// HANDLE BACK BUTTON

// HANDLE FORWARD BUTTON

// HANDLE REFRESH

window.onbeforeunload = function() {
	return "You will lose your progress! If you wish to navigate please use the 'Back' and 'Continue' buttons";
	window.history.forward(1);
}