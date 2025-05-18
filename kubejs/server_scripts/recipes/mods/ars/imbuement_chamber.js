ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('ars_nouveau:imbuement_chamber',[
        'GSBSG',
        'IEREI',
        'GRXRG',
        'IEREI',
        'GSBSG'
    ], {
        'S': 'mekanism:dust_steel',
        'E': 'thermal:enderium_gear',
        'G': 'minecraft:gold_block',
        'I': 'thermal:signalum_gear',
        'B': 'minecraft:bedrock',
        'X': 'ae2:singularity',
        'R': 'minecraft:redstone_block'

    }).id('kubejs:imbuement_chamber')
})
