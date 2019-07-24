import Entity from "./Entity.js";

class Location extends Entity {
	constructor(name, desc, dirs, people, task) {
		super(name, desc);

		this.name = name;
		this.firs = dirs;
		this.people = people;
		this.task = task;
	}
}

export default Location;
