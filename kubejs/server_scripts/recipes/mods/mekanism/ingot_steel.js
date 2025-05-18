ServerEvents.recipes(event => {
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:ingot_steel',
        'mekanism:dust_steel',
        {
            'infuse_type': 'mekanism:refined_obsidian',
            'amount': 40
        }
    ).id('kubejs:mek_ingot_steel')
})
