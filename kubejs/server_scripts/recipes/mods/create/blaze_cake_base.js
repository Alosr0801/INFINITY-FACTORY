ServerEvents.recipes((event) => {
    event.recipes.create.compacting('create:blaze_cake_base',
        [
            'minecraft:blaze_powder',
            'create:cinder_flour',
            Fluid.lava(1000)
        ]).heated().id('kubejs:blaze_cake_base')
})
