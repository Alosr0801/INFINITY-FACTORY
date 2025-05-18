ServerEvents.recipes(event => {
    
    // basic
    event.recipes.create.mechanical_crafting('mekanism:basic_chemical_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:basic_control_circuit',
        'S' : 'mekanism:steel_casing',
        'P' : 'mekanism:basic_pressurized_tube',
        'I' : 'thermal:iron_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:basic_chemical_tank')

    event.recipes.create.mechanical_crafting('mekanism:basic_fluid_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:basic_control_circuit',
        'S' : 'mekanism:steel_casing',
        'P' : 'mekanism:basic_mechanical_pipe',
        'I' : 'thermal:iron_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:basic_fluid_tank')

    event.recipes.create.mechanical_crafting('mekanism:basic_energy_cube',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:basic_control_circuit',
        'S' : 'mekanism:steel_casing',
        'P' : 'mekanism:basic_universal_cable',
        'I' : 'thermal:iron_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:basic_energy_cube')

    // advanced
    event.recipes.create.mechanical_crafting('mekanism:advanced_chemical_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:basic_chemical_tank',
        'S' : 'mekanism:advanced_control_circuit',
        'P' : 'mekanism:advanced_pressurized_tube',
        'I' : 'thermal:lumium_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:advanced_chemical_tank')

    event.recipes.create.mechanical_crafting('mekanism:advanced_fluid_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:basic_fluid_tank',
        'S' : 'mekanism:advanced_control_circuit',
        'P' : 'mekanism:advanced_mechanical_pipe',
        'I' : 'thermal:lumium_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:advanced_fluid_tank')

    event.recipes.create.mechanical_crafting('mekanism:advanced_energy_cube',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:basic_energy_cube',
        'S' : 'mekanism:advanced_control_circuit',
        'P' : 'mekanism:advanced_universal_cable',
        'I' : 'thermal:lumium_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:advanced_energy_cube')

    // elite

    event.recipes.create.mechanical_crafting('mekanism:elite_chemical_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:advanced_chemical_tank',
        'S' : 'mekanism:elite_control_circuit',
        'P' : 'mekanism:elite_pressurized_tube',
        'I' : 'thermal:signalum_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:elite_chemical_tank')

    event.recipes.create.mechanical_crafting('mekanism:elite_fluid_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:advanced_fluid_tank',
        'S' : 'mekanism:elite_control_circuit',
        'P' : 'mekanism:elite_mechanical_pipe',
        'I' : 'thermal:signalum_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:elite_fluid_tank')

    event.recipes.create.mechanical_crafting('mekanism:elite_energy_cube',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:advanced_energy_cube',
        'S' : 'mekanism:elite_control_circuit',
        'P' : 'mekanism:elite_universal_cable',
        'I' : 'thermal:signalum_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:elite_energy_cube')

    // ultimate
    event.recipes.create.mechanical_crafting('mekanism:ultimate_chemical_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:elite_chemical_tank',
        'S' : 'mekanism:ultimate_control_circuit',
        'P' : 'mekanism:ultimate_pressurized_tube',
        'I' : 'thermal:enderium_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:ultimate_chemical_tank')

    event.recipes.create.mechanical_crafting('mekanism:ultimate_fluid_tank',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:elite_fluid_tank',
        'S' : 'mekanism:ultimate_control_circuit',
        'P' : 'mekanism:ultimate_mechanical_pipe',
        'I' : 'thermal:enderium_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:ultimate_fluid_tank')

    event.recipes.create.mechanical_crafting('mekanism:ultimate_energy_cube',[
        'SEPES',
        'ISPSI',
        'PPXPP',
        'ISPSI',
        'SEPES',
    ],{
        'X' : 'mekanism:elite_energy_cube',
        'S' : 'mekanism:ultimate_control_circuit',
        'P' : 'mekanism:ultimate_universal_cable',
        'I' : 'thermal:enderium_plate',
        'E' : 'thermal:enderium_gear'
    }).id('kubejs:ultimate_energy_cube')
})
