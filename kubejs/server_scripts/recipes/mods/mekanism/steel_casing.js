ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['mekanism:ingot_steel','mekanism:enriched_diamond','minecraft:iron_ingot',
        'mekanism:enriched_iron','mekanism:ingot_steel','mekanism:enriched_carbon',
        'minecraft:iron_ingot','mekanism:enriched_redstone'
        ],
        'mekanism:block_steel',
        'mekanism:steel_casing',
        1000
    ).id('kubejs:steel_casing')
})
