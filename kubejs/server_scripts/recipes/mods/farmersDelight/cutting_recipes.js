//cuttingBoardRecipe(ingredients, tool, result, count)
ServerEvents.recipes((event) => {
//沙砾
cuttingBoardRecipe(event,'minecraft:cobblestone', 'farmersdelight:netherite_knife', 'minecraft:gravel', 1)

//沙子
cuttingBoardRecipe(event,'minecraft:gravel', 'farmersdelight:netherite_knife', 'minecraft:sand', 1)

//剥皮
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
        {
            "item": "minecraft:oak_log"
        }
        ],
        "result": [
        {
            "item": "minecraft:stripped_oak_log"
        },
        {
            "item": "farmersdelight:tree_bark"
        },
        {
            "chance": 0.01,
            "item": "minecraft:white_concrete_powder"
        }
        ],
        "sound": "minecraft:item.axe.strip",
        "tool": {
            "item": "farmersdelight:netherite_knife"
        }
        }).id('kubejs:cutting_oak_log')
})