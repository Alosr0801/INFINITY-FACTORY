StartupEvents.registry('block', (event) => {
    event.create('factory:hard_dirt')
    .hardness(3)
    .stoneSoundType()
    .tag('factory:hard_dirt')
    .tag('minecraft:block/dirt')
    .tag('mineable/pickaxe')
});
