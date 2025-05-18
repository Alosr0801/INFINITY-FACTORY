// priority: 0

StartupEvents.registry('item', (event) =>{
    event
        .create('factory:dirt_pickaxe',"basic")
        .rarity('uncommon')
        .tag('factory:dirt_pickaxe')
        .unstackable()
        .tag('minecraft:pickaxes')
        .tag('forge:tools/pickaxes')
        .tag('forge:tools')
});