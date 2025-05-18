ServerEvents.recipes(event => {
    //蓝色颜料
    event.recipes.mekanism.pigment_extracting(
        'thermal:enderium_ingot',
        {
            pigment:'mekanism:blue',
            amount:1000
        }
    ).id('kubejs:mek_blue_from_enderium')

    //黄色颜料
    event.recipes.mekanism.pigment_extracting(
        'thermal:lumium_ingot',
        {
            pigment:'mekanism:yellow',
            amount:100
        }
    ).id('kubejs:mek_yellow_from_lumium')
    event.recipes.mekanism.pigment_extracting(
        'mekanism:ingot_refined_glowstone',
        {
            pigment:'mekanism:yellow',
            amount:100
        }
    ).id('kubejs:mek_yellow_from_refined_glowstone')
    event.recipes.mekanism.pigment_extracting(
        'minecraft:glowstone_dust',
        {
            pigment:'mekanism:yellow',
            amount:25
        }
    ).id('kubejs:mek_yellow_from_glowstone_dust')
    event.recipes.mekanism.pigment_extracting(
        'minecraft:glowstone',
        {
            pigment:'mekanism:yellow',
            amount:100
        }
    ).id('kubejs:mek_yellow_from_glowstone')

    //红色颜料
    event.recipes.mekanism.pigment_extracting(
        'thermal:signalum_ingot',
        {
            pigment:'mekanism:red',
            amount:100
        }
    ).id('kubejs:mek_red_from_signalum')
    event.recipes.mekanism.pigment_extracting(
        'minecraft:redstone',
        {
            pigment:'mekanism:red',
            amount:100
        }
    ).id('kubejs:mek_red_from_redstone')
    event.recipes.mekanism.pigment_extracting(
        'minecraft:redstone_block',
        {
            pigment:'mekanism:red',
            amount:1000
        }
    ).id('kubejs:mek_red_from_redstone_block')

    //紫色颜料
    event.recipes.mekanism.pigment_extracting(
        'mekanism:dust_refined_obsidian',
        {
            pigment:'mekanism:purple',
            amount:10
        }
    ).id('kubejs:mek_purple_from_refined_obsidian')
    event.recipes.mekanism.pigment_extracting(
        'mekanism:ingot_refined_obsidian',
        {
            pigment:'mekanism:purple',
            amount:100
        }
    ).id('kubejs:mek_purple_from_ingot_refined_obsidian')
    event.recipes.mekanism.pigment_extracting(
        'mekanism:pellet_antimatter',
        {
            pigment:'mekanism:purple',
            amount:1000
        }
    ).id('kubejs:mek_purple_from_antimatter')

    //白色颜料
    event.recipes.mekanism.pigment_extracting(
        'minecraft:iron_ingot',
        {
            pigment:'mekanism:white',
            amount:100
        }
    ).id('kubejs:mek_white_from_iron')

    //橙色颜料
    event.recipes.mekanism.pigment_extracting(
        'mekanism:ingot_bronze',
        {
            pigment:'mekanism:orange',
            amount:100
        }
    ).id('kubejs:mek_orange_from_bronze')

    //天蓝色
    event.recipes.mekanism.pigment_extracting(
        'minecraft:diamond',
        {
            pigment:'mekanism:aqua',
            amount:100
        }
    ).id('kubejs:mek_aqua_from_diamond')

    //绿色颜料
    event.recipes.mekanism.pigment_extracting(
        'mekanism:pellet_polonium',
        {
            pigment:'mekanism:green',
            amount:100
        }
    ).id('kubejs:mek_green_from_polonium')

    //黄绿色
    event.recipes.mekanism.pigment_extracting(
        'mekanism:ingot_uranium',
        {
            pigment:'mekanism:lime',
            amount:100
        }
    ).id('kubejs:mek_lime_from_uranium')

    //绿色
    event.recipes.mekanism.pigment_mixing(
        {
            pigment: 'mekanism:light_blue',
            amount: 25
        },
        {
            pigment: 'mekanism:white',
            amount: 75
        },
        {
            pigment: 'mekanism:green',
            amount: 100
        }
    ).id('kubejs:mek_light_blue_from_light_blue')

    //棕色
    event.recipes.mekanism.pigment_mixing(
        {
            pigment: 'mekanism:yellow',
            amount: 25
        },
        {
            pigment: 'mekanism:black',
            amount: 75
        },
        {
            pigment: 'mekanism:brown',
            amount: 100
        }
    ).id('kubejs:mek_brown_from_yellow_and_black')

    //黑色
    event.recipes.mekanism.pigment_extracting(
        'mekanism:ingot_steel',
        {
            pigment: 'mekanism:black',
            amount: 100
        }
    ).id('kubejs:mek_black_from_steel')
})
