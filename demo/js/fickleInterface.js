/**
 * fickleInterface.js - run game in browser with jQuery
 */
import Engine from "../../engine/Engine.js";

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

function sendEntry() {
	event.preventDefault();
	let entryText = $fickleEntry.val().trim();


	appendLeft(entryText);
	$fickleEntry.val("");
}

let unused = "Thick, mossy cyprus arch overhead.";
let initial = "You've awoken on a windy bluff. Below you lies a long, open stretch of beach.";
appendRight(initial);
$fickleGo.click(sendEntry);