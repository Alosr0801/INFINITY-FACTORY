ServerEvents.recipes((event) => {
    let inter = 'create:zinc_ingot'

    event.recipes.create.sequenced_assembly([
		Item.of('thermal:raw_tin').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:zinc_ingot').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('create:brass_ingot').withChance(8.0),
		Item.of('create:andesite_alloy').withChance(5.0),
		Item.of('create:crushed_tin_ore').withChance(2.0),
		Item.of('2x create:zinc_nugget').withChance(2.0),
	], inter, [  // input
		event.recipes.createFilling(inter, [inter, Fluid.water(100)]),
		event.recipes.createFilling(inter, [inter, Fluid.lava(100)]),
		event.recipes.createDeploying(inter, [inter, 'minecraft:obsidian']),
        event.recipes.createCutting(inter,inter)
	]).transitionalItem(inter).loops(3).id('kubejs:thermal_tin') // set the transitional item and the number of loops
})

