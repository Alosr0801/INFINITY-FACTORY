ServerEvents.recipes(event => {
    event.remove({id: 'ae2:network/cables/smart_white'})
    event.shaped(Item.of('ae2:white_smart_cable', 4),[
        'AAA',
        'CDC',
        'AAA'
    ],
    {
        'A': Item.of('minecraft:white_concrete', 1),
        'C': Item.of('minecraft:glass', 1),
        'D': Item.of('minecraft:redstone', 1)
    }).id('kubejs:white_smart_cable')
})