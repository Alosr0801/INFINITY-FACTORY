ServerEvents.recipes((event) => {
    const {create, ars_nouveau, industrialforegoing} = event.recipes

    //钻石晶格
    ars_nouveau.enchanting_apparatus([
        'advanced_ae:quantum_alloy','diamond','diamond',
        'thermal:enderium_ingot','diamond','diamond',
        'advanced_ae:quantum_alloy','diamond','diamond',
        'thermal:enderium_ingot','diamond','diamond',
    ],
    'mekanism:enriched_diamond',
    'avaritia:diamond_lattice',
    10000)

    //水晶矩阵锭
    create.mechanical_crafting('avaritia:crystal_matrix_ingot',
        [
            'ADDDDDDDA',
            'CEEEBEEEC',
            'CEFEBEFEC',
            'CEEEBEEEC',
            'CBBBXBBBC',
            'CEEEBEEEC',
            'CEFEBEFEC',
            'CEEEBEEEC',
            'ADDDDDDDA',
        ],{
            'A': 'advanced_ae:quantum_alloy',
            'D': 'avaritia:diamond_lattice',
            'C': 'mekanism:pellet_antimatter',
            'X': 'minecraft:iron_ingot',
            'B': 'mekanism:ultimate_control_circuit',
            'E': 'ae2:fluix_crystal',
            'F': 'ae2:charged_certus_quartz_crystal',

        }
    )

    let inter = 'minecraft:diamond_block'
    
    //水晶矩阵
    create.sequenced_assembly([
        Item.of('avaritia:crystal_matrix').withChance(120.0),
        Item.of('avaritia:crystal_matrix_ingot').withChance(5.0),
        Item.of('minecraft:iron_nugget').withChance(5.0),
        Item.of('minecraft:diamond').withChance(5.0),
        Item.of('minecraft:bone_meal').withChance(5.0),
    ], inter, [
        event.recipes.createDeploying(inter,[inter, 'avaritia:crystal_matrix_ingot']),
        event.recipes.createDeploying(inter,[inter, 'advanced_ae:quantum_alloy']),
        event.recipes.createDeploying(inter,[inter, 'avaritia:crystal_matrix_ingot']),
        event.recipes.createFilling(inter, [inter, Fluid.of('industrialforegoing:ether_gas',200)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('thermal:ender',200)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('mekanism:fluid_white',200)]),
        event.recipes.createFilling(inter, [inter, Fluid.of('mekanism:fluid_aqua',200)]),
        event.recipes.createCutting(inter,inter),
        event.recipes.createPressing(inter,inter),
    ]).transitionalItem(inter).loops(9).id('kubejs:crystal_matrix')

    //终极工作台
    create.mechanical_crafting('avaritia:extreme_crafting_table',[
        'ABBBBBBBA',
        'BACCCCCAB',
        'BDACCCADB',
        'BDEACAEDB',
        'BDEFXFEDB',
        'BDEACAEDB',
        'BDACCCADB',
        'BACCCCCAB',
        'ABBBBBBBA',
    ],{
        'A': 'advanced_ae:quantum_alloy',
        'B': 'avaritia:crystal_matrix',
        'C': 'avaritia:double_compressed_crafting_table',
        'D': '#minecraft:tools',
        'E': 'ae2:charged_certus_quartz_crystal',
        'F': 'mekanism:pellet_antimatter',
        'X': 'dirt',
    }).id('kubejs:extreme_crafting_table')
})