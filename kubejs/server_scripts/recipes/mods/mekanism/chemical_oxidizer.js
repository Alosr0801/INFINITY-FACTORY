ServerEvents.recipes(event =>{
    event.recipes.ars_nouveau.enchanting_apparatus([
        'mekanism:steel_casing','mekanism:alloy_reinforced', 'mekanism:elite_chemical_tank', 'mekanism:alloy_reinforced',
        'mekanism:steel_casing','mekanism:alloy_reinforced', 'mekanism:elite_chemical_tank', 'mekanism:alloy_reinforced',
    ],
    'mekanism:dynamic_tank',
    'mekanism:chemical_oxidizer',
    1000
    ).id('kubejs:chemical_oxidizer')
})
