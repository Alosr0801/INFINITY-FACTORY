ServerEvents.recipes((event) => {
    //镍粉 配方
    event.recipes.create.mixing('thermal:nickel_dust', ['minecraft:iron_ingot','minecraft:glowstone_dust']).superheated().id('kubejs:thermal_nickel_dust')

    //流明粉 配方
    event.recipes.create.mixing('thermal:lumium_dust', [Item.of('thermal:tin_dust', 3),'thermal:invar_dust', Item.of('minecraft:glowstone_dust', 2)]).superheated().id('kubejs:lumium_dust')
    //流明锭 配方
    event.recipes.thermal.furnace('thermal:lumium_ingot', 'thermal:lumium_dust').id('kubejs:lumium_ingot')
    
    //银粉 配方
    event.recipes.thermal.furnace('thermal:silver_dust', 'thermal:gold_dust').xp(1.0).id('kubejs:silver_dust')

    //信素粉 配方
    event.recipes.thermal.chiller('thermal:signalum_ingot', Fluid.of('thermal:molten_signalum', 144)).id('kubejs:signalum_ingot')

    //铅粉 配方
    event.recipes.create.mixing('thermal:lead_dust', ['thermal:iron_dust','minecraft:glowstone_dust','minecraft:coal']).superheated().id('kubejs:thermal_lead_dust')

    //末影锭 配方
    event.recipes.create.mixing('thermal:enderium_ingot', [Fluid.of('thermal:ender', 144),'2x thermal:enderium_dust', 'thermal:signalum_ingot']).superheated().id('kubejs:enderium_ingot')

});