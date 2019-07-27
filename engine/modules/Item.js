import Entity from "./Entity.js";

class Item extends Entity {
	constructor(name, description, required) {
		super(name, description);

		this.required = required;
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

export default Item;