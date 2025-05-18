ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:string', 1), [
        'AAA',
    ], {
        'A': Item.of('minecraft:white_concrete', 1)
    })
})
