//priority: 10000

StartupEvents.registry('fluid', (event) => {
    const colorTypes = ['aqua','black','blue','brown','cyan','gray','dark_red','green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow']
    const colors = [ 0x55FFFF , 0x00000F ,0x5555FF,0x46160B, 0x00758F ,0xAAAAAA,0xAA0000,0x00AA00, 0x5E93FF, 0xDDDDDD, 0x55FF55, 0xFF55FF , 0xFFAA00, 0xF262FF, 0xAA00AA, 0xFF5555, 0XFFFFFF, 0xFFFF55]
    colorTypes.forEach((color, index) => {
        event.create(`mekanism:fluid_${color}`)
            .thinTexture(colors[index])
            .bucketColor(colors[index])
            .noBlock()
    });
})
