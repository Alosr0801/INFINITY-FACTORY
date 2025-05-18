ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['thermal:enderium_gear','thermal:signalum_plate','mekanism:ingot_steel','thermal:lumium_plate',
        'thermal:enderium_gear', 'thermal:signalum_plate', 'mekanism:ingot_steel', 'thermal:lumium_plate'
        ],
        'mekanism:steel_casing',
        'mekanism:pigment_extractor',
        1000
    ).id('kubejs:pigment_extractor')
})
