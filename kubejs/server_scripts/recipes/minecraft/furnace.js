ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:furnace', 1),[
        'DDD',
        'D D',
        'DDD'
    ],
    {
        'D': Item.of('minecraft:dirt', 1)
    })
})

    