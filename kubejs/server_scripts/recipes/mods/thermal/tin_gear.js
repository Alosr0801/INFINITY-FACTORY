ServerEvents.recipes((event) =>{
    event.recipes.create.compacting('thermal:tin_gear','thermal:tin_block').heatRequirement('heated').id('kubejs:tin_gear')
})