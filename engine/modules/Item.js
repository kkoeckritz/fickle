import Entity from "./Entity.js";

class Item extends Entity {
	constructor(name, description, required) {
		super(name, description);

		this.required = required;
	}
}

export default Item;