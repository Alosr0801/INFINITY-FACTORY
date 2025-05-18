ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:glass','mekanism:dust_steel', 'ars_nouveau:source_gem_block','mekanism:dust_steel',
        '#forge:glass','mekanism:dust_steel','ars_nouveau:source_gem_block','mekanism:dust_steel'],
        'create:shadow_steel',
        'mekanism:metallurgic_infuser',
        1000
    ).id('kubejs:metallurgic_infuser')
})