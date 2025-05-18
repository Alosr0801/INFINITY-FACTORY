ServerEvents.recipes(event =>{    
    event.recipes.ars_nouveau.enchanting_apparatus([
        'mekanism:steel_casing','mekanism:alloy_infused','#forge:plates/gold','mekanism:alloy_infused',
        'mekanism:steel_casing','mekanism:alloy_infused','#forge:plates/iron','mekanism:alloy_infused',
    ],
    'mekanism:electrolytic_core',
    'mekanism:electrolytic_separator',
    1000
).id('kubejs:electrolytic_separator')
})