//A是外圈，B是中间
//InfinityCellRecipe(A,B,Result,stage)

ServerEvents.recipes((event) => {

//泥土
infinityCellRecipe(event,'minecraft:dirt', 'minecraft:cobblestone', 'minecraft:dirt', 'dirt')

//橡木
infinityCellRecipe(event,'minecraft:oak_log', 'minecraft:cobblestone', 'minecraft:oak_log', 'wood')

//圆石
infinityCellRecipe(event,'minecraft:cobblestone', 'minecraft:andesite', 'minecraft:cobblestone', 'stone')
//赛特斯
infinityCellRecipe(event,'ae2:certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'AE1')
//铁,金,铜
infinityCellRecipe(event,'minecraft:iron_ingot', 'create:zinc_ingot', 'minecraft:iron_ingot', 'ironGoldCopper')
infinityCellRecipe(event,'minecraft:gold_ingot', 'create:zinc_ingot', 'minecraft:gold_ingot', 'ironGoldCopper')
infinityCellRecipe(event,'minecraft:copper_ingot', 'create:zinc_ingot', 'minecraft:copper_ingot', 'ironGoldCopper')

//锌
infinityCellRecipe(event,'create:zinc_ingot', 'create:brass_ingot', 'create:zinc_ingot', 'zinc')

//锡
infinityCellRecipe(event, 'thermal:tin_ingot', 'thermal:bronze_ingot', 'thermal:tin_ingot', 'tin')


//煤炭
    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:coal"}}'),[
        'A',
    ],
    {
        'A': Item.of('minecraft:coal', 1),
    }).stage('coal')

    //灰色混凝土
    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:gray_concrete"}}'),[
        'ABA',
        'B B',
        'ABA'
    ],
    {
        'A': Item.of('create:zinc_ingot', 1),
        'B': Item.of('create:brass_ingot', 1)
    })

    //白色混凝土
    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:white_concrete"}}'),[
        'ABA',
        'B B',
        'ABA'
    ],
    {
        'A': Item.of('create:brass_ingot', 1),
        'B': Item.of('create:zinc_ingot', 1)
    })
})


