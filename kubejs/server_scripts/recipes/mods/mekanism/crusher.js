ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:iron_block','mekanism:ingot_steel', 'ars_nouveau:source_gem_block','mekanism:ingot_steel',
        'minecraft:bedrock','mekanism:ingot_steel','ars_nouveau:source_gem_block','mekanism:ingot_steel'],
        'mekanism:steel_casing',
        'mekanism:crusher',
        1000
    ).id('kubejs:crusher')
})