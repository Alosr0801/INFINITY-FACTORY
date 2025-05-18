ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:leather', 1), [
        'ABA',
        'BBB',
        'ABA'
    ], {
        'A': Item.of('minecraft:white_concrete', 1),
        'B': Item.of('minecraft:gray_concrete', 1)
    })
})
