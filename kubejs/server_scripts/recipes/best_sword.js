ServerEvents.recipes((event) => {
    event.recipes.industrialforegoing.dissolution_chamber([
        'thermal:enderium_block','mekanism:pellet_antimatter','minecraft:netherite_block',
        'minecraft:netherite_sword','minecraft:netherite_sword',
        'create:precision_mechanism','advanced_ae:quantum_alloy_block','ae2:singularity'
    ],
    Fluid.of('industrialforegoing:ether_gas',500),
    'factory:best_sword',
    1250
    )
})