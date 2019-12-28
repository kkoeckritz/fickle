let $wrapper = $(".wrapper");
let $upBtn = $("#upBtn");
let $downBtn = $("#downBtn");
let $quickCmd = $(".quick-commands");
let $divArea = $(".div-area");
let $gameInput = $(".game-input");
let $gameBtn = $(".game-button");

// move wrapper content to middle of screen
function moveWrapperUp() {
	$divArea.removeClass("div-area--bottom");
	$divArea.addClass("div-area--middle");
	$quickCmd.css("border-radius", "10px 10px 0 0");
	$gameInput.css("border-radius", "0 0 0 10px");
	$gameBtn.css("border-radius", "0 0 10px 0");
	$upBtn.hide();
	$downBtn.show();
	$wrapper.removeClass("wrapper--bottom");
	$wrapper.addClass("wrapper--middle");
}

// " bottom of screen
function moveWrapperDown() {
	$divArea.removeClass("div-area--middle");
	$divArea.addClass("div-area--bottom");
	$quickCmd.css("border-radius", 0);
	$gameInput.css("border-radius", 0);
	$gameBtn.css("border-radius", 0);
	$downBtn.hide();
	$upBtn.show();
	$wrapper.removeClass("wrapper--middle");
	$wrapper.addClass("wrapper--bottom");
}

// set up wrapper button listeners
$upBtn.click(moveWrapperUp);
$downBtn.click(moveWrapperDown);