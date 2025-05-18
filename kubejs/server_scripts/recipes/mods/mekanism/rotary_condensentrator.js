ServerEvents.recipes(event =>{
    event.recipes.ars_nouveau.enchanting_apparatus([
        'mekanism:steel_casing','#forge:glass','mekanism:basic_fluid_tank','#forge:glass',
        'mekanism:steel_casing','#forge:glass','mekanism:basic_chemical_tank','#forge:glass',
    ],
    'mekanism:energy_tablet',
    'mekanism:rotary_condensentrator',
    1000
    ).id('kubejs:rotary_condensentrator')
})
