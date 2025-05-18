ServerEvents.recipes(event => {
    event.shaped('create:mechanical_crafter', [
        'SES',
        'GBG',
        'SES'
    ], {
        S: 'mekanism:dust_steel',
        E: 'create:electron_tube',
        G: 'thermal:enderium_gear',
        B: 'create:brass_casing'
    }).id('kubejs:mechanical_crafter')
})
