ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:lava_bucket', 1), [
        ' C ',
        'CBC',
        ' C '
    ], {
        'C': Item.of('minecraft:gray_concrete', 1),
        'B': Item.of('minecraft:bucket', 1)
    })
})
