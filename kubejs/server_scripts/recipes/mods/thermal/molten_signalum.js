ServerEvents.recipes((event) => {
    event.recipes.create.mixing(Fluid.of('thermal:molten_signalum', 1000), ['4x thermal:signalum_dust',Fluid.lava(1000)]).superheated().id('kubejs:thermal_molten_signalum')

})
