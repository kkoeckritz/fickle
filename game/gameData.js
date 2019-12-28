/**
 * gameData.js - holds game data in master object
 */

let gameData = {
	locations: [
		{
			name: "University Main Gate",
			desc: "A scholarly gateway to the forest.",
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
			desc: "A diminutive hipster's dive bar.",
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
			desc: "Lushest disc golf course in the West, probably.",
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
			name: "Union Street",
			desc: "A foggy view of the Humboldt Bay.",
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
			name: "Wildberries",
			desc: "Quality groceries at the price you'd expect.",
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
	],
	characters: [
		{
			name: "Henry",
			desc: "A quiet man who's grown tired of living in the forest.",
			sayings: [
				"Hey, man... where you living right now?",
				"Doesn't get much better than sleeping under the redwoods, let me tell you.",
				"Ever have anyone sleep on your couch? So annoying, man!"
			]
		},
		{
			name: "Becca",
			desc: "Kind but nervous. Great to talk with for a few seconds at a time.",
			sayings: [
				"It's really cold in here. Isn't it?",
				"I like horses. I feel like I can tell them anything. Same with rocks.",
				"Most people don't think about rocks. I do."
			]
		}
	],
	items: [
		{
			name: "Sunglasses",
			desc: "You need these to see anything on the beach.",
			required: true
		}
	]
};

export default gameData;
