ServerEvents.recipes((plastic) => {
    plastic.recipes.thermal.smelter(
        ['thermal:slag',Item.of('industrialforegoing:plastic',1).withChance(0.1)],
        ['ars_nouveau:fire_essence','industrialforegoing:dryrubber','ars_nouveau:fire_essence'],
    ).id('kubejs:plastic')
})