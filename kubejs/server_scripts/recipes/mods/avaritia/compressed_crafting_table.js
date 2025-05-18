ServerEvents.recipes((event) => {
    //压缩工作台 配方
    event.recipes.industrialforegoing.dissolution_chamber([
        'minecraft:crafting_table','minecraft:crafting_table','minecraft:crafting_table',
        'ae2:singularity','ae2:singularity',
        'minecraft:crafting_table','minecraft:crafting_table','minecraft:crafting_table',
    ],
    Fluid.of('industrialforegoing:ether_gas',100),
    'avaritia:compressed_crafting_table',
    1250)

    event.recipes.industrialforegoing.dissolution_chamber([
        'avaritia:compressed_crafting_table','avaritia:compressed_crafting_table','avaritia:compressed_crafting_table',
        'advanced_ae:quantum_alloy','advanced_ae:quantum_alloy',
        'avaritia:compressed_crafting_table','avaritia:compressed_crafting_table','avaritia:compressed_crafting_table',
    ],
    Fluid.of('industrialforegoing:ether_gas',150),
    'avaritia:double_compressed_crafting_table',
    1250)
})
