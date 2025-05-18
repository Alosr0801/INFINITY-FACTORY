ServerEvents.recipes((event) => {
    event.remove({id: 'ae2:network/blocks/inscribers'})
    event.shaped(Item.of('ae2:inscriber', 1),[
        'DHD',
        'D A',
        'DSD'
    ],
    {  
        'D': Item.of('factory:hard_dirt', 1),
        'H': Item.of('factory:hard_plank', 1),
        'S': Item.of('minecraft:cobblestone', 1),
        'A': Item.of('minecraft:glass', 1)
    }).id('kubejs:inscriber')
})
