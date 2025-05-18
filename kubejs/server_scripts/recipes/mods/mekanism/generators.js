ServerEvents.recipes(event => {

    //太阳能电池板配方
    let inter1 = 'minecraft:netherite_ingot'

    event.recipes.create.sequenced_assembly([
        Item.of('mekanismgenerators:solar_panel').withChance(100),
    ], inter1, [
        event.recipes.createDeploying(inter1, [inter1, 'create:cogwheel']),
        event.recipes.createDeploying(inter1, [inter1, 'minecraft:gray_concrete']),
        event.recipes.createDeploying(inter1, [inter1, 'minecraft:gray_concrete']),
        event.recipes.createDeploying(inter1, [inter1, 'minecraft:gray_concrete']),
        event.recipes.createDeploying(inter1, [inter1, 'create:cogwheel']),
        event.recipes.createPressing(inter1, inter1)
    ]).transitionalItem(inter1).loops(6).id('kubejs:solar_panel')

    //太阳能发电机配方

    let inter2 = 'thermal:tin_ingot'

    event.recipes.create.sequenced_assembly([
        Item.of('mekanismgenerators:solar_generator').withChance(100),
    ], inter2, [
        event.recipes.createDeploying(inter2, [inter2, 'mekanismgenerators:solar_panel']),
        event.recipes.createDeploying(inter2, [inter2, 'thermal:machine_frame']),
        event.recipes.createDeploying(inter2, [inter2, 'mekanismgenerators:solar_panel']),
        event.recipes.createPressing(inter2, inter2)
    ]).transitionalItem(inter2).loops(4).id('kubejs:solar_generator')

    //高级太阳能发电机配方

    let inter3 = 'mekanismgenerators:solar_generator'

    event.recipes.create.sequenced_assembly([
        Item.of('mekanismgenerators:advanced_solar_generator').withChance(100),
    ], inter3, [
        event.recipes.createDeploying(inter3, [inter3, 'mekanismgenerators:solar_generator']),
        event.recipes.createDeploying(inter3, [inter3, 'thermal:machine_frame']),
        event.recipes.createDeploying(inter3, [inter3, 'mekanismgenerators:solar_generator']),
        event.recipes.createPressing(inter3, inter3)
    ]).transitionalItem(inter3).loops(4).id('kubejs:advanced_solar_generator')

    //风力发电机配方

    event.smithing('mekanismgenerators:wind_generator', 'mekanismgenerators:advanced_solar_generator', 'create:propeller').id('kubejs:wind_generator')
})
