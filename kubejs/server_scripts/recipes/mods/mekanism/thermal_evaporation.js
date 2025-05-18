ServerEvents.recipes(event =>{
    //替换 mekanism 热力蒸馏方块 配方
    event.replaceInput(
        {id: 'mekanism:thermal_evaporation/block'},
        'minecraft:copper_ingot',
        'mekanism:ingot_refined_obsidian'
    )
    event.replaceInput(
        {id: 'mekanism:thermal_evaporation/block'},
        'mekanism:ingot_steel',
        'thermal:signalum_ingot'
    )

    event.recipes.ars_nouveau.enchanting_apparatus([
        'mekanism:thermal_evaporation_block','mekanism:alloy_infused','mekanism:thermal_evaporation_block','mekanism:alloy_infused',
        'mekanism:thermal_evaporation_block','mekanism:alloy_infused','mekanism:thermal_evaporation_block','mekanism:alloy_infused',
    ],
    'mekanism:alloy_atomic',
    'mekanism:thermal_evaporation_controller',
    1000
    ).id('kubejs:thermal_evaporation_controller')
})

