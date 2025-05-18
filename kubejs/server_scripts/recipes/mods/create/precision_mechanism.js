ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0),
		Item.of('2x minecraft:gold_nugget').withChance(2.0),
		'minecraft:iron_ingot',
		'minecraft:clock'
	], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'thermal:machine_frame']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'thermal:gold_gear']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'thermal:netherite_gear'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(5).id('kubejs:precision_mechanism') // set the transitional item and the number of loops
})
