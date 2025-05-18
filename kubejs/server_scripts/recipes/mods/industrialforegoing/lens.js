ServerEvents.recipes(event => {
    const Num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    Num.forEach(num => {
        event.remove({output: `industrialforegoing:laser_lens${num}`})
    })


    // magenta
    event.recipes.industrialforegoing.dissolution_chamber([
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
    ],
    Fluid.of('mekanism:fluid_magenta',1000),
    'industrialforegoing:laser_lens2',
    200
    ).id('kubejs:laser_lens_magenta')

    // brown
    event.recipes.industrialforegoing.dissolution_chamber([
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
    ],
    Fluid.of('mekanism:fluid_brown',1000),
    'industrialforegoing:laser_lens12',
    200
    ).id('kubejs:laser_lens_brown')

    // white
    event.recipes.industrialforegoing.dissolution_chamber([
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
    ],
    Fluid.of('mekanism:fluid_white',1000),
    'industrialforegoing:laser_lens0',
    200
    ).id('kubejs:laser_lens_white')
    
    // purple
    event.recipes.industrialforegoing.dissolution_chamber([
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes',
        '#forge:glass_panes','#forge:glass_panes','#forge:glass_panes',
    ],
    Fluid.of('mekanism:fluid_purple',1000),
    'industrialforegoing:laser_lens10',
    200
    ).id('kubejs:laser_lens_purple')
})