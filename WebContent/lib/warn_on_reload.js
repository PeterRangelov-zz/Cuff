console.log("Warning on reload script loaded.");
window.onbeforeunload = function() {
	return 'Your changes will not be saved';
}