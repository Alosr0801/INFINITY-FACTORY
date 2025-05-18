ServerEvents.recipes((event) => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:cobblestone"
            },
            {
                "item": "minecraft:gravel"
            },
            {
                "amount": 250,
                "fluidTag": "lava"
            }
        ],
        "results": [
            {
            "amount": 1,
            "item": "create:raw_zinc"
            }
        ]
    }).id('kubejs:raw_zinc')
})