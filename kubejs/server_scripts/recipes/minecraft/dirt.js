ServerEvents.recipes((event) => {
    event.remove({id: 'minecraft:dirt'})
    event.shaped(Item.of('minecraft:dirt', 1),[
        'dd',
        'dd'
    ],
    {
        'd': Item.of('factory:dirt_nugget', 1)
    })
})

    
