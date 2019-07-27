import Entity from "./Entity.js";

class Location extends Entity {
	constructor(name, desc, dirs, people, task) {
		super(name, desc);

		this.name = name;
		this.firs = dirs;
		this.people = people;
		this.task = task;
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
