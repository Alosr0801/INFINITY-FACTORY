ServerEvents.recipes(event =>{
    //铀
    event.recipes.mekanism.painting(
        'mekanism:ingot_steel',
        {
            pigment: 'mekanism:lime',
            amount: 100
        },
        'mekanism:ingot_uranium'
    ).id('kubejs:uranium')

    //氟石
    event.recipes.mekanism.painting(
        'minecraft:quartz',
        {
            pigment: 'mekanism:blue',
            amount: 100
        },
        'mekanism:fluorite_gem'
    ).id('kubejs:fluorite')

    //外壳
    event.recipes.create.mechanical_crafting('mekanismgenerators:fission_reactor_casing',[
        'LSSSSSL',
        'SLRRRLS',
        'SRLULRS',
        'SRUXURS',
        'SRLULRS',
        'SLRRRLS',
        'LSSSSSL',
    ],{
        'L': 'mekanism:block_lead',
        'S': 'mekanism:steel_casing',
        'R': 'minecraft:redstone_block',
        'U': 'mekanism:ultimate_control_circuit',
        'X': 'mekanism:ultimate_chemical_tank',
    }).id('kubejs:fission_reactor_casing')

    //端口
    event.recipes.create.mechanical_crafting('mekanismgenerators:fission_reactor_port',[
        'LSGGGSL',
        'SLRRRLS',
        'GRLULRG',
        'GRUXURG',
        'GRLULRG',
        'SLRRRLS',
        'LSGGGSL',
    ],{
        'L': 'mekanism:block_lead',
        'S': 'mekanism:steel_casing',
        'R': 'minecraft:redstone_block',
        'U': 'mekanism:ultimate_control_circuit',
        'X': 'mekanismgenerators:fission_reactor_casing',
        'G': '#forge:glass',
    }).id('kubejs:fission_reactor_port')

    //燃料组件
    event.recipes.create.mechanical_crafting('mekanismgenerators:fission_fuel_assembly',[
        'LSSSSSL',
        'LURRRUL',
        'LURRRUL',
        'LURRRUL',
        'LURRRUL',
        'LURRRUL',
        'LSSSSSL',
    ],{
        'L': 'mekanism:block_lead',
        'S': 'mekanism:steel_casing',
        'R': 'minecraft:redstone_block',
        'U': 'mekanism:block_uranium',
    }).id('kubejs:fission_fuel_assembly')

    //控制棒组件
    event.recipes.create.mechanical_crafting('mekanismgenerators:control_rod_assembly',[
        'LSSSSSL',
        'LUSRSUL',
        'LUUUUUL',
        'LUUUUUL',
        'LUUUUUL',
        'LUUUUUL',
        'LRRRRRL',

    ],{
        'L': 'mekanism:block_lead',
        'S': 'mekanism:steel_casing',
        'R': 'minecraft:redstone_block',
        'U': 'mekanism:ultimate_control_circuit',
    }).id('kubejs:control_rod_assembly')
})