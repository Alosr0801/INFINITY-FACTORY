ServerEvents.recipes((event) => {

    event.recipes.kubejs.shaped('minecraft:pig_spawn_egg', [
        ' A ',
        'ABA',
        ' A '
    ], 
        {
            'A' : Item.of('mekanism:fluid_pink_bucket', 1),
            'B' : Item.of('mekanism:bio_fuel', 1)
        }
    )

    event.recipes.kubejs.shaped('minecraft:zombie_spawn_egg', [
        ' A ',
        'CBC',
        ' D '
    ], 
        {
            'A' : Item.of('mekanism:fluid_green_bucket', 1),
            'B' : Item.of('mekanism:bio_fuel', 1),
            'C' : Item.of('mekanism:fluid_light_blue_bucket', 1),
            'D' : Item.of('mekanism:fluid_brown_bucket', 1)
        }
    )
})

