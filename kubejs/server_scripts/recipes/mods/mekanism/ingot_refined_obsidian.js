ServerEvents.recipes(event => {
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:ingot_refined_obsidian',
        'mekanism:alloy_atomic',
        {
            'infuse_type': 'mekanism:refined_obsidian',
            'amount': 100
        }
    ).id('kubejs:ingot_refined_obsidian')
})

