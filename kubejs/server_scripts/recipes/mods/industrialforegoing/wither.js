ServerEvents.recipes((wither) => {
    const {create, industrialforegoing, ars_nouveau} = wither.recipes

    create.item_application(
        'minecraft:skeleton_skull',
        [
            'minecraft:bone_block',
            'farmersdelight:netherite_knife',
        ]
    ).keepHeldItem().id('kubejs:skeleton_skull')


    ars_nouveau.enchanting_apparatus([
        'minecraft:bone_meal','minecraft:bone_meal','minecraft:bone_meal',
        'minecraft:bone_meal','minecraft:bone_meal','minecraft:bone_meal',
        'minecraft:bone_meal','minecraft:bone_meal','minecraft:bone_meal',
        'minecraft:bone_meal','minecraft:bone_meal','minecraft:bone_meal',

    ],
    'minecraft:white_concrete',
    'minecraft:bone_block',
    10000
    ).id('kubejs:bone_block')

    industrialforegoing.dissolution_chamber([
        'minecraft:skeleton_skull','minecraft:skeleton_skull','minecraft:skeleton_skull',
        'minecraft:skeleton_skull','minecraft:skeleton_skull',
        'minecraft:skeleton_skull','minecraft:skeleton_skull','minecraft:skeleton_skull',
    ],
    Fluid.of('mekanism:fluid_black', 1000),
    'minecraft:wither_skeleton_skull',
    1250
    ).id('kubejs:wither_skeleton_skull')

})
