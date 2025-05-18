ServerEvents.recipes((event) => {

    //fusion_reactor_frame
    event.recipes.create.mechanical_crafting('mekanismgenerators:fusion_reactor_frame',[
        'SAAAAAS',
        'A33333A',
        'ARPPPRA',
        'ARPXPRA',
        'ARPPPRA',
        'A33333A',
        'SAAAAAS',
    ],{
        'P': Item.of('mekanism:pellet_polonium'),
        'R': Item.of('minecraft:redstone_block'),
        'A': Item.of('mekanism:alloy_atomic'),
        'X': Item.of('mekanism:ultimate_energy_cube'),
        'S': Item.of('mekanism:steel_casing'),
        '3': Item.of('thermal:upgrade_augment_3'),
    }).id('kubejs:fusion_reactor_frame')

    //fusion_reactor_controller
    event.recipes.create.mechanical_crafting('mekanismgenerators:fusion_reactor_controller',[
        'SAAAAAS',
        'A33333A',
        'ARPPPRA',
        'ARPXPRA',
        'ARPPPRA',
        'A33333A',
        'SAAAAAS',
    ],{
        'P': Item.of('mekanism:pellet_polonium'),
        'R': Item.of('mekanism:ultimate_control_circuit'),
        'A': Item.of('mekanismgenerators:fusion_reactor_frame'),
        'X': Item.of('minecraft:gold_block'),
        'S': Item.of('mekanism:steel_casing'),
        '3': Item.of('mekanism:block_refined_obsidian'),
    }).id('kubejs:fusion_reactor_controller')

    //fusion_reactor_port
    event.recipes.create.mechanical_crafting('mekanismgenerators:fusion_reactor_port',[
        'SAAAAAS',
        'A33333A',
        'ARPPPRA',
        'ARPXPRA',
        'ARPPPRA',
        'A33333A',
        'SAAAAAS',
    ],{
        'P': Item.of('mekanism:ultimate_control_circuit'),
        'R': Item.of('mekanismgenerators:fusion_reactor_frame'),
        'A': Item.of('#forge:glass_panes'),
        'X': Item.of('pipez:universal_pipe'),
        'S': Item.of('mekanism:steel_casing'),
        '3': Item.of('mekanismgenerators:fusion_reactor_frame'),

    }).id('kubejs:fusion_reactor_port')
})
