ServerEvents.recipes((event) => {

    let inter = 'thermal:lumium_ingot'

    event.recipes.create.sequenced_assembly([
        Item.of('create:creative_motor').withChance(100.0),
    ], inter, [
        event.recipes.createDeploying(inter,[inter, 'create:large_water_wheel']),
        event.recipes.createDeploying(inter,[inter, 'create:hand_crank']),
        event.recipes.createDeploying(inter,[inter, 'create:steam_engine']),
        event.recipes.createDeploying(inter,[inter, 'create:windmill_bearing']),
        event.recipes.createFilling(inter, [inter, Fluid.water(1000)]),
        event.recipes.createFilling(inter, [inter, Fluid.lava(1000)]),
        event.recipes.createCutting(inter,inter)
    ]).transitionalItem(inter).loops(10).id('kubejs:creative_motor')
})
