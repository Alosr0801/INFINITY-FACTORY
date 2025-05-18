ServerEvents.recipes((event) => {
    event.shaped('constructionwand:infinity_wand',[
        '  N',
        ' S ',
        'S  '
    ],
    {
        'N' : Item.of('minecraft:netherite_ingot'),
        'S' : Item.of('minecraft:stick')
    }).id('kubejs:infinity_wand')
})
