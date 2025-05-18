ServerEvents.recipes((event) => {

    const colorTypes = ['aqua','black','blue','brown','cyan','gray','dark_red','green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow']
    colorTypes.forEach(color => {
    event.recipes.mekanism.painting('minecraft:bucket',
        {
            pigment : `mekanism:${color}`,
            amount : 1000
        },
            `mekanism:fluid_${color}_bucket`
        ).id(`kubejs:mek_${color}_bucket`)
    })
})
