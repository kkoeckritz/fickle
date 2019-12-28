/**
 * fickleInterface.js - run game in browser with jQuery
 */
import Engine from "../../engine/Engine.js";

let engine = new Engine();	// PASS INITIAL TO ENGINE CONSTRUCTOR
let $fickleConsole = $("#fickleConsole");
let $fickleEntry = $("#fickleEntry");
let $fickleGo = $("#fickleGo");

function appendLeft(inText) {
	$("<p></p>", {
		text: inText,
		"class": "l-text"
	}).appendTo($fickleConsole);
}

function appendRight(inText) {
	$("<p></p>", {
		text: inText,
		"class": "r-text"
	}).appendTo($fickleConsole);
}

// verify text alpha only
function verifyText(inText) {
	let tester = /^[a-zA-Z ]+$/;

	return tester.test(inText);
}

// get welcome text from Engine
function getWelcome() {
	let unused = "Thick, mossy cyprus arch overhead.";
	let initial = "You've awoken on a windy bluff. Below you lies a long, open stretch of beach.";
	appendRight(initial);
}

// parse text with Engine
function parseText(inText) {
	let response = engine.parseEntry(inText);

	appendRight(response);
}

// check entry; if valid pass to parseText; warn if invalid
function sendEntry() {
	event.preventDefault();

	let entryText = $fickleEntry.val().trim().toLowerCase();
	if (verifyText(entryText)) {
		appendLeft(`>> ${entryText}`);
		parseText(entryText);
		$fickleEntry.val("");
	} else {
		$fickleEntry.css("color", "red");
		$fickleEntry.stop().animate({
			color: "rgba(17, 51, 68, .9)"
		}, 500, () => {
			$fickleEntry.val("");
			$fickleEntry.css("color", "white");
		});
	}

	$(".div-area").scrollTop($(".div-area")[0].scrollHeight);	
}

// set up submit, 
function setupClicks() {
	$fickleConsole.click(() => {
		$fickleEntry.focus();
	});
	$fickleGo.click(sendEntry);
}

setupClicks();
getWelcome();