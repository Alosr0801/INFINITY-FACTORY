ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:crafting_table', 1),[
        'DD',
        'DD'
    ],
    {
        'D': Item.of('minecraft:dirt', 1)
    })
})

    