ServerEvents.recipes(event =>{
    event.recipes.mekanism.painting(
        'mekanism:chemical_oxidizer',
        {
            pigment: 'mekanism:aqua',
            amount: 100
        },
        'mekanism:chemical_infuser'
    ).id('kubejs:chemical_infuser')
})
