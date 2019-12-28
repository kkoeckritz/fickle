/**
 * loadData.js - loads entities into Engine
 */
import { Location, Character, Item } from "./modules/index.js";
import gameData from "../game/gamedata.js";

function loadLocations() {
	let locations = [];

	// load all props except dirs (FIX TO LOAD PEOPLE/ITEMS LIKE DIRS)
	for (let i of gameData.locations) {
		let curLocation = new Location(i.name, i.desc, i.people, i.items, i.task);
		locations.push(curLocation);
	}

	// set dirs for all locations
	for (let i of locations) {
		
	}

	return locations;
}

function loadCharacters() {
	let characters = [];

	for (let i of gameData.characters) {
		let curCharacter = new Character(i.name, i.desc, i.sayings);
		characters.push(curCharacter);
	}

	return characters;
}

function loadItems() {
	let items = [];

	for (let i of gameData.items) {
		let curItem = new Item(i.name, i.desc, i.required);
		items.push(curItem);
	}

	return items;
}

let loadedData = {
	locations: loadLocations(),
	characters: loadCharacters(),
	items: loadItems()
};

export default loadedData;