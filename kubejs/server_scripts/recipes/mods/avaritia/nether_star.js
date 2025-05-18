ServerEvents.recipes(event => {
    event.custom({
        "type": "avaritia:shaped_extreme_craft",
        "key": {
            "A": {
            "item": "avaritia:crystal_matrix"
            },
            "B": {
            "item": "advanced_ae:quantum_alloy_block"
            },
            "C": {
            "item": "minecraft:white_concrete"
            },
        },
        "pattern": [
            "    A    ",
            "   BAB   ",
            "  CBABC  ",
            " BBBABBB ",
            "AAAAAAAAA",
            " BBBABBB ",
            "  CBABC  ",
            "   BAB   ",
            "    A    ",
        ],
        "result": {
            "item": "minecraft:nether_star"
        },
        "show_notification": true
    })
})