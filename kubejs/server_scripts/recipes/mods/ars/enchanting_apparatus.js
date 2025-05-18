ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('ars_nouveau:enchanting_apparatus',[
        'GLBLG',
        'ESDSE',
        'BDXDB',
        'ESDSE',
        'GLBLG'
    ],{
        'G': 'minecraft:gold_block',
        'L': 'thermal:lumium_plate',
        'B': 'minecraft:bedrock',
        'D': 'minecraft:diamond_block',
        'S': 'ars_nouveau:source_gem',
        'E': 'thermal:enderium_gear',
        'X': 'ae2:singularity'
    }).id('kubejs:enchanting_apparatus')
})
