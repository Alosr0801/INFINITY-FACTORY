ServerEvents.recipes(event => {

    //基础控制电路
    event.recipes.mekanism.painting(
        'mekanism:ingot_steel',
        {
            'pigment': 'mekanism:red',
            'amount': 1000
        },
        'mekanism:basic_control_circuit'
    ).id('kubejs:basic_control_circuit')

    //锭注模
    event.recipes.mekanism.painting(
        '#forge:ingots',
        {
            'pigment': 'mekanism:orange',
            'amount': 1000
        },
        'thermal:chiller_ingot_cast'
    ).id('kubejs:ingot_cast')

    //青铜锭
    event.recipes.mekanism.painting(
        'thermal:chiller_ingot_cast',
        {
            'pigment': 'mekanism:orange',
            'amount': 100
        },
        'mekanism:ingot_bronze'
    ).id('kubejs:mek_ingot_bronze')

    //灌注合金
    event.recipes.mekanism.painting(
        'create:shadow_steel',
        {
            'pigment': 'mekanism:red',
            'amount': 100
        },
        'mekanism:alloy_infused'
    ).id('kubejs:alloy_infused')

    //青金石
    event.recipes.mekanism.painting(
        'ae2:charged_certus_quartz_crystal',
        {
            'pigment': 'mekanism:blue',
            'amount': 100
        },
        'minecraft:lapis_lazuli'
    ).id('kubejs:lapis_lazuli')

    //染色球
    event.recipes.mekanism.painting(
        'ae2:matter_ball',
        {
            'pigment': 'mekanism:blue',
            'amount': 1000  
        },
        'ae2:blue_paint_ball'
    ).id('kubejs:blue_paint_ball')
    event.recipes.mekanism.painting(
        'ae2:matter_ball',
        {
            'pigment': 'mekanism:red',
            'amount': 1000  
        },
        'ae2:red_paint_ball'
    ).id('kubejs:red_paint_ball')
    event.recipes.mekanism.painting(
        'ae2:matter_ball',
        {
            'pigment': 'mekanism:purple',
            'amount': 1000  
        },
        'ae2:purple_paint_ball'
    ).id('kubejs:purple_paint_ball')

    //强化萤石
    event.recipes.mekanism.painting(
        'thermal:lumium_ingot',
        {
            'pigment': 'mekanism:yellow',
            'amount': 1000
        },
        'mekanism:ingot_refined_glowstone'
    ).id('kubejs:ingot_refined_glowstone')

    //原子合金
    event.recipes.mekanism.painting(
        'mekanism:alloy_reinforced',
        {
            'pigment': 'mekanism:purple',
            'amount': 1000
        },
        'mekanism:alloy_atomic'
    ).id('kubejs:alloy_atomic')

    //火药
    event.recipes.mekanism.painting(
        'create:cinder_flour',
        {
            'pigment': 'mekanism:white',
            'amount': 10
        },
        'minecraft:gunpowder'
    ).id('kubejs:gunpowder')

    //铅
    event.recipes.mekanism.painting(
        'thermal:nickel_dust',
        {
            'pigment': 'mekanism:white',
            'amount': 100
        },
        'mekanism:dust_lead'
    ).id('kubejs:mek_dust_lead')
})
