ServerEvents.recipes(event => {
    event.recipes.thermal.crystallizer('mekanism:dust_steel',[
        Fluid.of('thermal:ender', 100), 
        'minecraft:iron_ingot', 
        'minecraft:coal'
    ]).id('kubejs:mek_dust_steel')
})