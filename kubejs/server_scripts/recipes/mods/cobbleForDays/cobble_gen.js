ServerEvents.recipes((event) => {
    event.remove({id: 'cobblefordays:tier_1'})
    event.shaped(Item.of('cobblefordays:tier_1', 1),[
        'OHO',
        'W L',
        'OHO'
    ],
    {   
        'O': Item.of('minecraft:oak_log', 1),
        'H': Item.of('factory:hard_plank', 1),
        'W': Item.of('minecraft:water_bucket', 1),
        'L': Item.of('minecraft:lava_bucket', 1)
    }).id('kubejs:ultimate_cobblegen')
})
