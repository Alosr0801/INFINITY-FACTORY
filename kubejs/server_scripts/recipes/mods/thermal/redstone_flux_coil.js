ServerEvents.recipes((event) => {

    let inter = 'thermal:invar_ingot'

	event.recipes.create.sequenced_assembly([
		Item.of('thermal:rf_coil').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('thermal:invar_nugget').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('thermal:invar_ingot').withChance(8.0),
		Item.of('create:golden_sheet').withChance(5.0),
		Item.of('thermal:invar_dust').withChance(2.0),
		Item.of('2x minecraft:redstone').withChance(2.0),
	], inter, [ // 'create:golden_sheet' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying(inter, [inter, 'minecraft:redstone']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'create:golden_sheet']),
		event.recipes.createDeploying(inter, [inter, 'thermal:gold_gear']),
        event.recipes.createCutting(inter,inter)
	]).transitionalItem(inter).loops(5).id('kubejs:redstone_flux_coil') // set the transitional item and the number of loops

})