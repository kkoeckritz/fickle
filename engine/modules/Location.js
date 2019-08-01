import Entity from "./Entity.js";

class Location extends Entity {
	constructor(name, desc, dirs, people, items, task) {
		super(name, desc);

		this.dirs = dirs;
		this.people = people;
		this.items = items;
		this.task = task;
		this.visited = false;
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

export default Location;
