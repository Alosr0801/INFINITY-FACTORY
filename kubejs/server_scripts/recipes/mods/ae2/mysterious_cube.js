ServerEvents.recipes(event => {
    event.remove({id : 'ae2:mysterious_cube'})
    event.shaped(Item.of('ae2:mysterious_cube', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        'A': Item.of('ae2:sky_stone_block', 1),
        'B': Item.of('ae2:quartz_block', 1)
    }).id('kubejs:mysterious_cube')
})