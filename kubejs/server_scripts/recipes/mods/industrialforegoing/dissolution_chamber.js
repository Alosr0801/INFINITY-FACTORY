ServerEvents.recipes((craft) => {
    craft.recipes.industrialforegoing.dissolution_chamber([
        'minecraft:oak_log','minecraft:oak_log','minecraft:oak_log','minecraft:oak_log',
        'minecraft:oak_log','minecraft:oak_log','minecraft:oak_log','minecraft:oak_log'
    ],
    Fluid.of('mekanism:fluid_gray', 1000),
    'minecraft:acacia_log',
    100
    ).id('kubejs:dissolution_chamber_acacia_log')
})
