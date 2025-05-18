ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:oak_sapling', 1), [
        'DDD',
        'DDD',
        ' D '
    ], {D: Item.of('factory:hard_dirt', 1)})
})
