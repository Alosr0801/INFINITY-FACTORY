ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('mekanism:painting_machine',[
        'SECES',
        'ASCSA',
        'PPXPP',
        'ASCSA',
        'SECES',
    ],{
        'A' : 'create:shadow_steel',
        'S' : 'mekanism:steel_casing',
        'P' : 'mekanism:basic_pressurized_tube',
        'E' : 'thermal:enderium_gear',
        'C' : 'mekanism:basic_universal_cable',
        'X' : 'mekanism:pigment_extractor',
    }).id('kubejs:painting_machine')
})
