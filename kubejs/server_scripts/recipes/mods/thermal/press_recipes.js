ServerEvents.recipes((event) => {
    //齿轮冲压模板
    event.recipes.thermal.press('thermal:press_gear_die',['thermal:tin_block', 'thermal:tin_gear']).energy(3000).id('kubejs:press_gear_die')
})
