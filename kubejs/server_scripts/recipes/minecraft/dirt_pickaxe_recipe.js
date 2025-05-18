ServerEvents.recipes((event) => {
    event.shaped(Item.of('factory:dirt_pickaxe', 1), [
        'DDD',
        ' d ',
        ' d '
    ], 
    {
        'D': Item.of('factory:hard_dirt', 1),
        'd': Item.of('minecraft:dirt', 1)
    });
});