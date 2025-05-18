ServerEvents.recipes((extract) => {
    extract.recipes.industrialforegoing.fluid_extractor(
        'minecraft:acacia_log',
        'minecraft:air',
        0.1,
        Fluid.of('industrialforegoing:latex', 2000)
    ).id('kubejs:latex')
})
