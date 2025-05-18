ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('factory:upgrade_augment_creative',[
        'OOOOOOOOO',
        'O3333333O',
        'O3222223O',
        'R3211123O',
        'R321X123O',
        'R3211123O',
        'O3222223O',
        'O3333333O',
        'OOOOOOOOO',
    ] , {
        'X': 'thermal:enderium_gear',
        'O': 'mekanism:block_refined_obsidian',
        'R': 'minecraft:redstone_block',
        '1': 'thermal:upgrade_augment_1',
        '2': 'thermal:upgrade_augment_2',
        '3': 'thermal:upgrade_augment_3',
    }).id('kubejs:upgrade_augment_creative')
})
