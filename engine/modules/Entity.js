class Entity {
	constructor(name, desc) {
		this.name = name;
		this.desc = desc;

		this.id = Entity.genId();
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

export default Entity;