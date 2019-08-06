/**
 * loadData.js - loads entities into Engine
 */
import { Location, Character, Item } from "./modules/index.js";
import gameData from "../game/gamedata.js";

function loadLocations() {
	let locations = [];

	for (let i in gameData.locations) {
		let curLocation = new Location(i.name, i.desc, i.people, i.items, i.task);
		locations.push(curLocation);
	}

	return locations;
}

function loadCharacters() {
	let characters = [];

	for (let i in gameData.characters) {
		let curCharacter = new Character(i.name, i.desc, i.sayings);
		characters.push(curCharacter);
	}

	return characters;
}

function loadItems() {
	let items = [];

	for (let i in gameData.items) {
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