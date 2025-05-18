ServerEvents.recipes(event => {
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    
    //安山岩合金
    event.shaped(Item.of('create:andesite_alloy', 1),[
        'CA ',
        'AC ',   
    ],
    {
        'A': Item.of('minecraft:andesite', 1),
        'C': Item.of('minecraft:cobblestone', 1)
    }).id('kubejs:andesite_alloy')
})
