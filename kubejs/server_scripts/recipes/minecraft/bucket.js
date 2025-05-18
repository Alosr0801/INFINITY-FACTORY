ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:bucket', 1),[
        'H H',
        ' D '
    ],
    {
        'D': Item.of('factory:hard_dirt', 1),
        'H': Item.of('factory:hard_plank', 1)
    })
})