StartupEvents.registry('block', (event) => {
    event.create('factory:hard_plank')
    .hardness(3)
    .textureAll('block/dark_oak_planks')
    .stoneSoundType()
    .tag('factory:hard_plank')
    .tag('minecraft:block/plank')
    .tag('mineable/axe')
    .tag('mineable/pickaxe')
});
