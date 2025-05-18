ServerEvents.recipes((fluid) => {

    fluid.recipes.industrialforegoing.laser_drill_fluid(
        Fluid.of('industrialforegoing:pink_slime', 10),
        'industrialforegoing:laser_lens2',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: [
                        'factory:black_and_white'
                    ]
                },
                depth_max : 256,
                depth_min : -64,
                weight : 100,
                blacklist: {}
            }
        ],
        'minecraft:pig'
    ).id('kubejs:laser_drill_fluid_pink_slime')

    fluid.recipes.industrialforegoing.laser_drill_fluid(
        Fluid.of('industrialforegoing:meat', 10),
        'industrialforegoing:laser_lens12',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: [
                        'factory:black_and_white'
                    ]
                },
                depth_max : 256,
                depth_min : -64,
                weight : 100,
                blacklist: {}
            }
        ],
        'minecraft:zombie'
    ).id('kubejs:laser_drill_fluid_meat')
})

ServerEvents.recipes((ore) => {
    ore.recipes.industrialforegoing.laser_drill_ore(
        'minecraft:bone_meal',
        'industrialforegoing:laser_lens0',
        [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: [
                        'factory:black_and_white'
                    ]
                },
                depth_max : 256,
                depth_min : -64,
                weight : 100,
                blacklist: {}
            }
        ],
    ).id('kubejs:laser_drill_ore_bone_meal')
})
