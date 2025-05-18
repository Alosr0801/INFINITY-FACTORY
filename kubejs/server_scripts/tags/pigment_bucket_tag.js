ServerEvents.tags('item', event =>{
    const colorTypes = ['aqua','black','blue','brown','cyan','gray','dark_red','green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow']

    event.add('forge:pigment_fluid_bucket', colorTypes.map(color => `mekanism:fluid_${color}_bucket`))
})