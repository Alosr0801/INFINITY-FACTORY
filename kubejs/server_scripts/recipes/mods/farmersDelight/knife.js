ServerEvents.recipes((event) => {
    event.shaped(Item.of(Item.of('farmersdelight:netherite_knife', "{Damage:0,HideFlags:1,Unbreakable:1b,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"bold\":true,\"color\":\"gray\",\"text\":\"其实只是一把柴刀\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"obfuscated\":true,\"color\":\"gold\",\"text\":\"aa\"},{\"bold\":true,\"color\":\"gold\",\"text\":\"余烬之刃\"},{\"bold\":true,\"obfuscated\":true,\"color\":\"gold\",\"text\":\"aa\"}],\"text\":\"\"}'}}").enchant('minecraft:unbreaking', 10),1),[
        '  D',
        ' D ',
        'L  '
    ],
    {
        'D': Item.of('factory:hard_dirt', 1),
        'L': Item.of('factory:hard_plank', 1)
    }).id('kubejs:netherite_knife')
})