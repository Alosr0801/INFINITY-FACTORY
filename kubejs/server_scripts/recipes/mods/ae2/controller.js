ServerEvents.recipes((event) => {
    event.remove({id: 'ae2:network/blocks/controller'})
    event.shaped(Item.of('ae2:controller', 1),[
        'CCC',
        'CAC',
        'CCC'
    ],
    {
        'C': Item.of('minecraft:cobblestone', 1),
        'A': Item.of('factory:hard_dirt', 1)
    }).id('kubejs:ae2_controller')
})
