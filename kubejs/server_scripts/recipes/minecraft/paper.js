ServerEvents.recipes((event) => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "farmersdelight:tree_bark"
            },
            {
                "item": "minecraft:sand"
            },
            {
                "amount": 250,
                "fluidTag": "water"
            }
        ],
        "results": [
            {
            "amount": 1,
            "item": "minecraft:paper"
            }
        ]
    })
})