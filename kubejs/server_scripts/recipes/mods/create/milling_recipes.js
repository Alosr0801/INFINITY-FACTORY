ServerEvents.recipes(event => {
    //移除沙砾研磨
    event.remove({id: 'create:milling/gravel'})
    
    //原矿
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
            "item": "minecraft:gravel"
            }
        ],
        "processingTime": 50,
        "results": [
            {
            "count": 1,
            "item": "minecraft:raw_iron"
            },
            {
            "count": 1,
            "item": "minecraft:raw_gold"
            },
            {
            "count": 1,
            "item": "minecraft:raw_copper"
            },
            {
            "chance": 0.99,
            "count": 1,
            "item": "minecraft:gray_concrete_powder"
            },
        ]
    }).id('kubejs:milling_raw_ore_vanilla')

    //余烬面粉
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
            "item": "minecraft:netherrack"
            }
        ],
        "processingTime": 50,
        "results": [
            {
            "count": 1,
            "item": "create:cinder_flour"
            },
            {
            "chance": 0.01,
            "count": 1,
            "item": "minecraft:green_concrete_powder"
            },
        ]
        }).id('kubejs:cinder_flour')
})