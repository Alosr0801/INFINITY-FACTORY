ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:water_bucket', 1), [
        ' W ',
        'WBW',
        ' W '
    ], {
        'W': Item.of('minecraft:white_concrete', 1),
        'B': Item.of('minecraft:bucket', 1)
    })
})
