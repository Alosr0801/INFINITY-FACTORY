ServerEvents.recipes(event => {
        event.recipes.mekanism.metallurgic_infusing(
            'mekanism:alloy_reinforced',
            'mekanism:ingot_refined_glowstone',
            {
                'infuse_type': 'mekanism:diamond',
                'amount': 1000
            }
        ).id('kubejs:elite_alloy')
    })
