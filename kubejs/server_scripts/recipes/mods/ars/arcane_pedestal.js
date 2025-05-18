ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('ars_nouveau:arcane_pedestal',[
        'GSSSG',
        '  S  ',
        '  S  ',
        ' SBS ',
    ],{
        'G': 'minecraft:gold_block',
        'S': 'ars_nouveau:source_gem_block',
        'B': 'minecraft:bedrock',
    }).id('kubejs:arcane_pedestal')
})
