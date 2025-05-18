ServerEvents.recipes(essences => {

    //防护精华
    essences.recipes.ars_nouveau.enchanting_apparatus([
        'minecraft:purple_dye','mekanism:pellet_antimatter','mekanism:pellet_antimatter',
    ],
    'ars_nouveau:source_gem',
    'ars_nouveau:abjuration_essence',
    10000
    ).id('kubejs:abjuration_essence')
    //水之精华
    essences.recipes.ars_nouveau.enchanting_apparatus([
        'mekanism:fluid_aqua_bucket','thermal:enderium_ingot','minecraft:water_bucket', 'thermal:enderium_ingot'
    ],
    'ars_nouveau:source_gem',
    'ars_nouveau:water_essence',
    10000
    ).id('kubejs:water_essence')
    //火之精华
    essences.recipes.ars_nouveau.enchanting_apparatus([
        'minecraft:red_dye','create:blaze_burner', 'minecraft:lava_bucket','create:blaze_burner',
    ],
    'ars_nouveau:source_gem',
    'ars_nouveau:fire_essence',
    10000
    ).id('kubejs:fire_essence')
})
