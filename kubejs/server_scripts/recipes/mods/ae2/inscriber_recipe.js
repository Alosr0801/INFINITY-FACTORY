//priority : 100
//AE2 inscriber recipe
//inscriberRecipe_Middle(event, input, result, count)

ServerEvents.recipes((event) => {   
    //安山岩
    inscriberRecipe_Middle(event, 'minecraft:cobblestone', 'minecraft:andesite', 64)
    //石英
    inscriberRecipe_Middle(event,'minecraft:gravel', 'minecraft:quartz', 64)
    //红石
    inscriberRecipe_Middle(event,'minecraft:sand', 'minecraft:redstone', 64)
    //天石
    inscriberRecipe_Middle(event,'minecraft:stone', 'ae2:sky_stone_block', 1)
    //萤石粉
    inscriberRecipe_Middle(event,'minecraft:redstone', 'minecraft:glowstone_dust', 1)
    //钻石
    inscriberRecipe_Middle(event,'minecraft:coal', 'minecraft:diamond', 1)

    //反应室
    event.remove({id : 'advanced_ae:reactionchamber'})
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": 'minecraft:glass'
            },
            "middle": {
                "item": 'factory:hard_plank'
            },
            "top": {
                "item": 'minecraft:glass'
            }
        },
        "mode": "inscribe",
        "result": {
            "item": 'advanced_ae:reaction_chamber',
            "count": 1
        }
    }).id('kubejs:reaction_chamber')
        
      //逻辑电路板
        event.remove({id : 'ae2:inscriber/logic_processor_print'})
        event.custom({
        "type": 'ae2:inscriber',
        "ingredients": {
            "top": {
                "item": 'ae2:logic_processor_press'
            },
            "middle": {
                "item": 'minecraft:gold_nugget'
            },
            "bottom": {
                "item": 'ae2:certus_quartz_crystal'
            }
        },
        "mode": "inscribe",
        "result": {
            "item": 'ae2:printed_logic_processor',
            "count": 1
        }
    }).id('kubejs:logic_processor_print')
})