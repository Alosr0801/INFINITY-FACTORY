ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('minecraft:bedrock',[
        'SSSSS',
        'SSSSS',
        'SSXSS',
        'SSSSS',
        'SSSSS'
    ], {
        'S': 'mekanism:dust_steel',
        'X': 'minecraft:netherite_block'

    })
})