ServerEvents.recipes((event) => {
    
    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        output: {
            item: 'ars_nouveau:creative_source_jar',
        },
        pedestalItems: Array(12).fill({
            item: Item.of(
                'ars_nouveau:source_jar',
                '{BlockEntityTag:{Items:[],id:"ars_nouveau:source_jar",source:10000}}'
            ).weakNBT(),
        }),
        reagent: [{ item: 'mekanism:pellet_polonium' }],
        sourceCost: 120000,
    }).id('kubejs:creative_source_jar')
})
