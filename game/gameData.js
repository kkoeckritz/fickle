/**
 * gameData.js - holds game data in master object
 */

let gameData = {
	locations: [
		{
			name: "University Main Gate",
			desc: "Humboldt State: A scholarly gateway to the forest.",
			dirs: {
				n: 1,
				ne: null,
				e: 2,
				se: null,
				s: 3,
				sw: null,
				w: 4,
				nw: null
			},
			people: null,
			items: null,
			task: null
		},
		{
			name: "Blondies",
			desc: "Blondies: A diminutive hipster's dive bar.",
			dirs: {
				n: null,
				ne: null,
				e: null,
				se: null,
				s: 0,
				sw: null,
				w: null,
				nw: null
			},
			people: null,
			items: null,
			task: null
		},
		{
			name: "Redwood Curtain",
			desc: "Redwood Curtain: ",
			dirs: {
				n: null,
				ne: null,
				e: null,
				se: null,
				s: null,
				sw: null,
				w: 0,
				nw: null
			},
			people: null,
			items: null,
			task: null
		},
		{
			name: "Bay View",
			desc: "",
			dirs: {
				n: 0,
				ne: null,
				e: null,
				se: null,
				s: null,
				sw: null,
				w: null,
				nw: null
			},
			people: null,
			items: null,
			task: null
		},
		{
			name: "Bay View",
			desc: "",
			dirs: {
				n: null,
				ne: null,
				e: 0,
				se: null,
				s: null,
				sw: null,
				w: null,
				nw: null
			},
			people: null,
			items: null,
			task: null
		},
	]
};

export default gameData;
