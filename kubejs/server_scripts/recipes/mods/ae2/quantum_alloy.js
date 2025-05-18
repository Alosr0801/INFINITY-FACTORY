ServerEvents.recipes( (event) => {
    event.custom({
        'type': 'advanced_ae:reaction',
        'energy': 10000,
        'fluid': {
            'fluidStack': {
                'Amount': 2000,
                'FluidName': 'advanced_ae:quantum_infusion_source'
            }
        },
        'input_items': [
            {
                'amount': 16,
                'ingredient': {
                'item': 'thermal:enderium_ingot',
                }
            },
            {
                'amount': 16,
                'ingredient': {
                'item': 'advanced_ae:shattered_singularity',
                }
            },
            {
                'amount': 8,
                'ingredient': {
                'item': 'ae2:singularity',
                }
            }
        ],
        'output': {
            '#': 1,
            '#c': 'ae2:i',
            'id': 'advanced_ae:quantum_alloy'
        }
    }).id('kubejs:quantum_alloy')
})
