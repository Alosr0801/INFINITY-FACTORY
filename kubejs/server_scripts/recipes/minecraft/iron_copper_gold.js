//priority: 999
ServerEvents.recipes(event => {

    event.remove({id: 'thermal:storage/copper_nugget_from_ingot'})
    event.remove({id: 'minecraft:iron_ingot_from_smelting_raw_iron'})
    event.remove({id: 'minecraft:copper_ingot_from_smelting_raw_copper'})
    event.remove({id: 'minecraft:gold_ingot_from_smelting_raw_gold'})

    //iron
    event.smelting(Item.of('minecraft:iron_nugget', 1), Item.of('minecraft:raw_iron', 1), 0.7)

    //copper
    event.smelting(Item.of('create:copper_nugget', 1), Item.of('minecraft:raw_copper', 1), 0.7)

    //gold
    event.smelting(Item.of('minecraft:gold_nugget', 1), Item.of('minecraft:raw_gold', 1), 0.7)
})