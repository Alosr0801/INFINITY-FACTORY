ServerEvents.recipes(event => {
    //casing
    event.recipes.create.mechanical_crafting('mekanism:sps_casing',[
        'GFFFFFFFG',
        'FDEEEEEDF',
        'FDCCCCCDF',
        'FDBAAABDF',
        'FDBAXABDF',
        'FDBAAABDF',
        'FDCCCCCDF',
        'FDEEEEEDF',
        'GFFFFFFFG',
    ],{
        'X': 'minecraft:nether_star',
        'A' : 'mekanism:pellet_polonium',
        'B' : 'mekanism:pellet_plutonium',
        'C' : 'mekanism:block_lead',
        'D' : 'mekanism:ultimate_universal_cable',
        'E' : 'mekanism:hdpe_rod',
        'F' : 'mekanism:hdpe_sheet',
        'G' : 'mekanism:steel_casing',
    }).id('kubejs:sps_casing')

    //port

    event.recipes.create.mechanical_crafting('mekanism:sps_port',[
        'GFFFFFFFG',
        'FTEEEEETF',
        'FDCCCCCDF',
        'FIBAAABIF',
        'FDBAXABDF',
        'FIBAAABIF',
        'FDCCCCCDF',
        'FTEEEEETF',
        'GFFFFFFFG',
    ],{
        'X': 'mekanism:sps_casing',
        'A' : 'mekanism:pellet_polonium',
        'B' : 'mekanism:pellet_plutonium',
        'C' : 'mekanism:block_lead',
        'D' : 'mekanism:ultimate_energy_cube',
        'I' : 'mekanism:ultimate_fluid_tank',
        'T' : 'mekanism:ultimate_chemical_tank',
        'E' : 'mekanism:hdpe_rod',
        'F' : '#forge:glass_panes',
        'G' : 'mekanism:steel_casing',
    }).id('kubejs:sps_port')

    //crystalizer

    event.recipes.ars_nouveau.enchanting_apparatus([
        'mekanism:ingot_refined_obsidian','mekanism:ultimate_control_circuit','mekanism:ingot_refined_obsidian','mekanism:ultimate_control_circuit','mekanism:ingot_refined_obsidian','mekanism:ultimate_control_circuit','mekanism:ingot_refined_obsidian','mekanism:ultimate_control_circuit','mekanism:ingot_refined_obsidian','mekanism:ultimate_control_circuit','mekanism:ingot_refined_obsidian','mekanism:ultimate_control_circuit',
    ],
    'mekanism:steel_casing',
    'mekanism:chemical_crystallizer',
    10000
    ).id('kubejs:chemical_crystallizer')
})