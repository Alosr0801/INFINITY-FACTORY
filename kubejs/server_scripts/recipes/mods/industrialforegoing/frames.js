ServerEvents.recipes((frame) => {
    let inF = 'industrialforegoing'

    // 缺陷机器框架
    frame.recipes.ars_nouveau.enchanting_apparatus([
        'ars_nouveau:abjuration_essence','mekanism:pellet_polonium',
        'ars_nouveau:abjuration_essence','mekanism:pellet_plutonium',
        'ars_nouveau:abjuration_essence','mekanism:pellet_polonium',
        'ars_nouveau:abjuration_essence','mekanism:pellet_plutonium',],
        'minecraft:redstone_block',
        `${inF}:machine_frame_pity`,
        10000
    ).id('kubejs:machine_frame_pity')

    // 简易机器框架
    frame.recipes.ars_nouveau.enchanting_apparatus([
        'ars_nouveau:fire_essence','industrialforegoing:plastic',
        'ars_nouveau:water_essence','industrialforegoing:plastic',
        'ars_nouveau:fire_essence','industrialforegoing:plastic',
        'ars_nouveau:water_essence','industrialforegoing:plastic',],
        `${inF}:machine_frame_pity`,
        `${inF}:machine_frame_simple`,
        10000
    ).id('kubejs:machine_frame_simple')
    
    // 高级机器框架
    frame.recipes.industrialforegoing.dissolution_chamber([
        `${inF}:plastic`,`${inF}:machine_frame_simple`,`${inF}:plastic`,
        'mekanism:ultimate_control_circuit','mekanism:ultimate_control_circuit',
        `${inF}:plastic`,'thermal:signalum_gear',`${inF}:plastic`,
    ],
    Fluid.of(`${inF}:pink_slime`,600),
    `${inF}:machine_frame_advanced`,
    200
    ).id('kubejs:machine_frame_advanced')

    // 超级机器框架
    frame.recipes.industrialforegoing.dissolution_chamber([
        'mekanism:ingot_refined_obsidian',`${inF}:machine_frame_advanced`,'mekanism:ingot_refined_obsidian',
        `${inF}:plastic`,`${inF}:plastic`,
        'mekanism:ingot_refined_obsidian','thermal:enderium_gear','mekanism:ingot_refined_obsidian',
    ],
    Fluid.of(`${inF}:ether_gas`,135),
    `${inF}:machine_frame_supreme`,
    1250
    ).id('kubejs:machine_frame_supreme')
})
