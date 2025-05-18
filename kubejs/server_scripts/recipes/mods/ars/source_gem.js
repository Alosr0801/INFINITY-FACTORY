ServerEvents.recipes(event => {

    let inter = 'minecraft:diamond'

    event.recipes.create.sequenced_assembly([
        Item.of('ars_nouveau:source_gem').withChance(100),
    ], inter, [
        event.recipes.createFilling(inter, [inter, Fluid.of('thermal:glowstone', 100)]),
        event.recipes.createCutting(inter, inter)
    ]).transitionalItem(inter).loops(6).id('kubejs:source_gem')
})
