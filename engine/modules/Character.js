import Entity from "./Entity.js";

class Character extends Entity {
	constructor(name, desc, sayings) {
		super(name, desc);

		this.sayings = sayings;
	}
}

export default Character;