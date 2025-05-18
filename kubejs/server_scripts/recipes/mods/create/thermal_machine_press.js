ServerEvents.recipes((event) => {
    let inter = 'thermal:machine_frame'
    event.recipes.create.sequenced_assembly([
        Item.of('thermal:machine_press').withChance(120.0),
        Item.of('thermal:tin_ingot').withChance(10.0),
        Item.of('2x thermal:tin_nugget').withChance(5.0),
        Item.of('thermal:tin_gear').withChance(30.0),
    ],inter,[
        event.recipes.createFilling(inter, [inter, Fluid.lava(100)]),
        event.recipes.createDeploying(inter, [inter, 'minecraft:iron_block']),
        event.recipes.createDeploying(inter, [inter, 'thermal:tin_gear']),
        event.recipes.createDeploying(inter, [inter, '#forge:glass']),
        event.recipes.createCutting(inter,inter)
    ]).transitionalItem(inter).loops(2).id('kubejs:thermal_machine_press')
})
