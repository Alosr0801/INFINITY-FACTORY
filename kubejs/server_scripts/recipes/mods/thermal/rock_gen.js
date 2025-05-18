ServerEvents.recipes((event) => {
    event.shaped(Item.of('thermal:device_rock_gen', 1),[
        'IEI',
        'GAG',
        'IBI'
    ],
    {
        'I': Item.of('minecraft:iron_ingot', 1),
        'A': Item.of('minecraft:piston', 1),
        'E': Item.of('create:electron_tube', 1),
        'B': Item.of('thermal:redstone_servo', 1),
        'G': '#forge:glass'
    }).id('kubejs:device_rock_gen')
})