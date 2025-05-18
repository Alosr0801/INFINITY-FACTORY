ServerEvents.recipes((event) => {
    event.remove({id : 'advanced_ae:quartzcrystal'})
    event.custom({
        'type': 'advanced_ae:reaction',
        'energy': 0,
        'fluid': {
            'fluidStack': {
                'Amount': 1000,
                'FluidName': 'minecraft:water'
            }
        },
        'input_items': [
            {
                'amount': 64,
                'ingredient': {
                'item': 'minecraft:quartz',
                }
            }
        ],
        'output': {
            '#': 64,
            '#c': 'ae2:i',
            'id': 'ae2:certus_quartz_crystal'
        }
    }).id('kubejs:certus_quartz_crystal')
    
    //聚合器
    event.custom({
        'type': 'advanced_ae:reaction',
        'energy': 0,
        'fluid': {
            'fluidStack': {
                'Amount': 1000,
                'FluidName': 'minecraft:lava'
            }
        },
        'input_items': [
            {
                'amount': 64,
                'ingredient': {
                'item': 'thermal:signalum_ingot',
                }
            },
            {
                'amount': 64,
                'ingredient': {
                'item': 'thermal:lumium_ingot',
                }
            },
            {
                'amount': 1,
                'ingredient': {
                'item': 'advanced_ae:reaction_chamber',
                }
            }
        ],
        'output': {
            '#': 1,
            '#c': 'ae2:i',
            'id': 'ae2:condenser'
        }
    }).id('kubejs:condenser')

    //ender pearl
    event.custom({
        'type': 'advanced_ae:reaction',
        'energy': 0,
        'fluid': {
            'fluidStack': {
                'Amount': 10000,
                'FluidName': 'minecraft:lava'
            }
        },
        'input_items': [
            {
                'amount': 64,
                'ingredient': {
                'item': 'minecraft:iron_nugget',
                }
            },
            {
                'amount': 64,
                'ingredient': {
                'item': 'factory:hard_dirt',
                }
            },
            {
                'amount': 64,
                'ingredient': {
                'item': 'minecraft:redstone',
                }
            }
        ],
        'output': {
            '#': 1,
            '#c': 'ae2:i',
            'id': 'minecraft:ender_pearl'
        }
    }).id('kubejs:ender_pearl')
})