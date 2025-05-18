ServerEvents.recipes((event) => {
    let inter = 'create:blaze_cake_base'
    event.recipes.create.sequenced_assembly([
        Item.of('create:creative_blaze_cake').withChance(100.0),
    ], inter, [
        event.recipes.createFilling(inter, [inter, Fluid.of('thermal:redstone', 1000)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('thermal:glowstone', 1000)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('thermal:ender', 1000)]),
        event.recipes.createDeploying(inter, [inter, 'thermal:enderium_ingot']),
        event.recipes.createDeploying(inter, [inter, 'ae2:singularity']),
        event.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(15).id('kubejs:creative_blaze_cake')
})
