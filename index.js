/* eslint no-console: 0 */

import { Location, Character, Item } from "./engine/modules/index.js";

let testEntities = [];

let newLoc = new Location("New Loc", "This is a test.", 0, 1, 2);
let newChar = new Character("Mr. Big", "Another test.", 3);
let newItem = new Item("Carbon Pickaxe", "Strong and heavy.", 1);

testEntities.push(newLoc, newChar, newItem);
for (let e of testEntities) {
	console.log(`${e.name}: ${e.id}`);
}
