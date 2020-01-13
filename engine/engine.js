/**
 * Engine.js - holds engine logic
 */
import Player from "./Player.js";
import loadedData from "./loadedData.js";

class Engine {
	constructor() {
		
	}
	// pass action to appropriate func
	runAction(inArr) {
		let ret = null;

		// switch(inArr[0]) {
		// 	case ""
		// }
	}
	parseEntry(entry) {
		let entryArr = entry.split(" ");

		let ret = this.runAction(entryArr);

		return ret;
	}
  
}

export default Engine; 