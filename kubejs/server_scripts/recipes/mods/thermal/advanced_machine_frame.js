ServerEvents.recipes((event) => {
    event.recipes.kubejs.shaped(Item.of('thermal:advanced_machine_frame', 1),[
        'CSC',
        'GFG',
        'CSC'
    ],{
        'F': Item.of('thermal:machine_frame'),
        'G': Item.of('thermal:netherite_gear'),
        'S': Item.of('thermal:redstone_servo'),
        'C': Item.of('thermal:rf_coil'),
    }).id('kubejs:advanced_machine_frame_thermal')
})

