ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['mekanism:ingot_steel', 'mekanism:basic_control_circuit', 'mekanism:basic_chemical_tank','mekanism:basic_control_circuit',
        'mekanism:ingot_steel', 'mekanism:basic_control_circuit', 'mekanism:basic_chemical_tank','mekanism:basic_control_circuit'
        ],
        'mekanism:steel_casing',
        'mekanism:pigment_mixer',
        1000
    ).id('kubejs:pigment_mixer')
})
