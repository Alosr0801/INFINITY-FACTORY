ServerEvents.recipes(event =>{
    event.recipes.mekanism.painting(
        'mekanism:pigment_mixer',
        {
            pigment: 'mekanism:purple',
            amount: 1000
        },
        'mekanism:chemical_dissolution_chamber'
    ).id('kubejs:chemical_dissolution_chamber')
})