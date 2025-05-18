ServerEvents.recipes((event) => {
    //通用管道 配方
    event.replaceInput('pipez:universal_pipe', 'minecraft:iron_ingot', 'thermal:signalum_ingot')
    event.replaceInput('pipez:universal_pipe', 'minecraft:redstone_block', 'ae2:singularity')
})
