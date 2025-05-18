ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting(
        'mekanism:enrichment_chamber',
        [
            'SOBOS',
            'RSFSR',
            'ICEPI',
            'RSMSR',
            'SOBOS',
    ],{
        'S': 'mekanism:block_steel',
        'R': 'minecraft:redstone',
        'I': 'minecraft:iron_block',
        'O': 'minecraft:obsidian',
        'C': 'mekanism:basic_universal_cable',
        'M': 'mekanism:basic_mechanical_pipe',
        'B': 'minecraft:bedrock',
        'P': 'mekanism:basic_pressurized_tube',
        'F': 'mekanism:basic_fluid_tank',
        'E': 'mekanism:metallurgic_infuser',
    }).id('kubejs:enrichment_chamber')
})