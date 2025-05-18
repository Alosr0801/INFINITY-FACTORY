StartupEvents.registry('block', (event) => {
    event.create('factory:compressed_plank')
    .hardness(5)
    .stoneSoundType()
    .tag('factory:compressed_plank')
    .tag('minecraft:block/plank')
    .tag('mineable/axe')
});
