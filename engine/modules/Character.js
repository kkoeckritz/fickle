import Entity from "./Entity.js";

class Character extends Entity {
	constructor(name, desc, sayings) {
		super(name, desc);

		this.sayings = sayings;
	}
	static genId() {
		if (this.curId === undefined) {
			this.curId = 0;
		} else {
			this.curId++;
		}
		return this.curId;
	}
}

export default Character;