ServerEvents.recipes(event => {
    //原版
    //移除工作台配方
    event.remove({id: 'minecraft:crafting_table'})
    //移除熔炉配方
    event.remove({id: 'minecraft:furnace'})
    //移除桶配方
    event.remove({id: 'minecraft:bucket'})
    //移除指南针配方
    event.remove({id: 'minecraft:compass'})
    //移除染料配方
    event.remove({output : '#forge:dyes'})
    //移除 骨块 配方
    event.remove({id: 'minecraft:bone_block'})

    //移除 ae2 聚合器 配方
    event.remove({id : 'ae2:network/blocks/io_condenser'})
    //移除 AAE 量子合金 配方
    event.remove({id: 'advanced_ae:quantum_alloy'})

    //移除 Farmers Delight 纸 配方
    event.remove({id: 'farmersdelight:paper_from_tree_bark'})
    
    //移除 Create 精密构件 配方
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
    //移除 Create 烈焰蛋糕 配方
    event.remove({id: 'create:compacting/blaze_cake'})
    //移除 Create 动力合成器 配方
    event.remove({id: 'create:crafting/kinetics/mechanical_crafter'})

    //移除 thermal 造石机 配方
    event.remove({id: 'thermal:device_rock_gen'})
    //移除 thermal 多驱冲压机 配方
    event.remove({id: 'thermal:machine_press'})
    //移除 thermal 感应炉 配方
    event.remove({id:'thermal:machine_smelter'})
    //移除 thermal 粉碎机 配方
    event.remove({id: 'thermal:machine_pulverizer'})
    //移除 thermal 锡齿轮 配方
    event.remove({id: 'thermal:parts/tin_gear'})

    //移除 thermal 流明锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_alloy_lumium'})
    //移除 thermal 信素锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_alloy_signalum'})
    //移除 thermal 末影锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_alloy_enderium'})
    //移除 thermal 红石通量线圈 配方
    event.remove({id: 'thermal:rf_coil'})
    //移除 thermal 红石伺服 配方
    event.remove({id: 'thermal:redstone_servo'})
    //移除 thermal 红石熔炼炉 配方
    event.remove({id: 'thermal:machine_furnace'})
    //移除 thermal 冷冻机 配方
    event.remove({id: 'thermal:machine_chiller'})
    //移除 thermal 熔岩炉 配方
    event.remove({id: 'thermal:machine_crucible'})
    //移除 thermal 结晶器 配方
    event.remove({id: 'thermal:machine_crystallizer'})
    //移除 thermal 流明粉 配方
    event.remove({id: 'thermal:lumium_dust_4'})
    //移除 thermal 流明锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_lumium_dust'})
    //移除 thermal 信素锭 配方  
    event.remove({id: 'thermal:machines/smelter/smelter_signalum_dust'})
    //移除 thermal 末影锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_enderium_dust'})
    //移除 thermal 末影齿轮 配方
    event.remove({id: 'thermal:parts/enderium_gear'})
    //移除 thermal 流明齿轮 配方
    event.remove({id: 'thermal:parts/lumium_gear'})
    //移除 thermal 银锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_silver_dust'})
    //移除 thermal 青铜锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_alloy_bronze'})
    //移除 thermal 锭注模 配方
    event.remove({id: 'thermal:chiller_ingot_cast'})
    //移除 thermal 铅锭 配方
    event.remove({id: 'thermal:machines/smelter/smelter_lead_dust'})

    //移除 thermal upgrade_augment_2 配方
    event.remove({id: 'thermal:augments/upgrade_augment_2'})

    //移除 齿轮冲压模板 配方
    event.remove({id: 'thermal:press_gear_die'})

    //移除 thermal 粉→锭 配方
    const recipeTypes = ['smelting', 'blasting']
    const thermalMetals = [
        'bronze', 'copper', 'gold', 'iron', 'lead', 'nickel', 
        'silver', 'tin', 'copper', 'aluminum', 'steel', 'electrum',
        'invar', 'lumium', 'signalum', 'enderium', 'netherite', 'constantan'
    ];

    recipeTypes.forEach(type => {
        thermalMetals.forEach(metal => {
            event.remove({id: `thermal:smelting/${metal}_ingot_from_dust_${type}`})
        })
    })

    //移除thermal 火焰弹配方

    event.forEachRecipe('*', recipe => {
        let recipeId = recipe.getId();
        // 检查是否是 Thermal 的配方且包含 fire_charge
        if (recipeId.startsWith('thermal:') && recipeId.includes('fire_charge')) {
            event.remove({id: recipeId});
        }
    });



    //移除 ars_nouveau 灌注室 配方
    event.remove({id: 'ars_nouveau:imbuement_chamber'})
    //移除 ars_nouveau 附魔台 配方
    event.remove({id: 'ars_nouveau:enchanting_apparatus'})
    //移除 ars_nouveau 奥术核心 配方
    event.remove({id: 'ars_nouveau:arcane_core'})
    // 移除 ars_nouveau 奥术基座  配方
    event.remove({id: 'ars_nouveau:arcane_pedestal'})
    // 移除 ars_nouveau 防护精华 配方
    event.remove({id: 'ars_nouveau:imbuement_abjuration_essence'})
    // 移除 ars_nouveau 水之精华 配方
    event.remove({id: 'ars_nouveau:imbuement_water_essence'})
    // 移除 ars_nouveau 火之精华 配方
    event.remove({id: 'ars_nouveau:imbuement_fire_essence'})


    //移除 MEK 粉→锭 配方
    // 基础金属
    const mekanismMetals = ['iron', 'gold', 'copper', 'osmium', 'tin', 'lead', 'uranium','steel','bronze'];

    recipeTypes.forEach(type => {
        mekanismMetals.forEach(metal => {
            event.remove({id: `mekanism:processing/${metal}/ingot/from_dust_${type}`});
        });
    });

    //移除 mekanism 颜料 配方
    const pigmentTypes = ['wool', 'concrete', 'dye', 'flower', 'terracotta', 'stained_glass', 'carpet', 'candle', 'banner', 'concrete_powder', 'stained_glass_pane','glass', 'bed', 'glass_pane']
    const colorTypes = ['aqua','black','blue','brown','cyan','gray','dark_red','green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow','large_cyan', 'small_pink', 'large_red','small_yellow','small_magenta','small_red','large_magenta','large_yellow','large_pink']
    pigmentTypes.forEach(type =>{
        colorTypes.forEach(color =>{
            event.remove({id: `mekanism:pigment_extracting/${type}/${color}`})
        })
    })    
    //移除 mekanism 上色 配方
    pigmentTypes.forEach(type =>{
        colorTypes.forEach(color =>{
            event.remove({id: `mekanism:painting/${type}/${color}`})
        })
    })   
    //移除 mekanism 灌注 配方
    event.forEachRecipe('*', recipe => {
        let recipeId = recipe.getId();
        // 检查是否是 Thermal 的配方且包含 fire_charge
        if (recipeId.startsWith('mekanism:') && recipeId.includes('metallurgic_infusing')) {
            event.remove({id: recipeId});
        }
    });




     //移除 mekanism 冶金灌注机 配方
    event.remove({id: 'mekanism:metallurgic_infuser'})
    //移除 mekanism 钢质机壳 配方
    event.remove({id: 'mekanism:steel_casing'})
    //移除 mekanism 青铜锭 配方
    event.remove({id: 'mekanism:processing/bronze/ingot/from_infusing'})
    //移除 mekanism 基础控制电路 配方
    event.remove({id: 'mekanism:control_circuit/basic'})
    //移除 mekanism 颜料混合机 配方
    event.remove({id: 'mekanism:pigment_mixer'})
    //移除 mekanism 富集铁 配方
    event.remove({id: 'mekanism:processing/iron/enriched'})
    //移除 mekanism 青铜 配方
    event.remove({id: 'mekanism:processing/bronze/dust/from_infusing'})
    //移除 mekanism 电解分离室 配方
    event.remove({id: 'mekanism:electrolytic_separator'})
    //移除 mekanism 热力蒸馏控制器 配方
    event.remove({id: 'mekanism:thermal_evaporation/controller'})
    //移除 mekanism 能量芯片 配方
    event.remove({id: 'mekanism:energy_tablet'})
    //移除 mekanism 旋转冷凝器 配方
    event.remove({id: 'mekanism:rotary_condensentrator'})
    //移除 mekanism 化学氧化器 配方
    event.remove({id: 'mekanism:chemical_oxidizer'})
    //移除 mekanism 化学反应器 配方
    event.remove({id: 'mekanism:chemical_infuser'})
    //移除 mekanism 同位素分离器 配方
    event.remove({id: 'mekanism:isotopic_centrifuge'})
    //移除 mekanism 破碎机 配方
    event.remove({id: 'mekanism:crusher'})

    //移除 mekanism 阶级容器 配方
    const tier = ['basic', 'advanced', 'elite', 'ultimate']
    tier.forEach(tier => {
        event.remove({id: `mekanism:fluid_tank/${tier}`})
        event.remove({id: `mekanism:chemical_tank/${tier}`})
        event.remove({id: `mekanism:energy_cube/${tier}`})
    })

    //移除 mekanismgenerators 核反应堆 配方
    event.remove({id: 'mekanismgenerators:fission_reactor/casing'})
    event.remove({id: 'mekanismgenerators:fission_reactor/port'})
    event.remove({id: 'mekanismgenerators:fission_reactor/fuel_assembly'})
    event.remove({id: 'mekanismgenerators:fission_reactor/control_rod_assembly'})

    //移除 mekanism 高压反应室 配方
    event.remove({id: 'mekanism:pressurized_reaction_chamber'})
    //移除 mekanism 太阳能中子激活器 配方
    event.remove({id: 'mekanism:solar_neutron_activator'})

    //移除 mekanism 反物质核聚变器 配方
    event.remove({id: 'mekanism:antiprotonic_nucleosynthesizer'})

    //移除 mekanismgenerators 太阳能发电机 配方
    event.remove({id: 'mekanismgenerators:generator/solar'})
    //移除 mekanismgenerators 风力发电机 配方
    event.remove({id: 'mekanismgenerators:generator/wind'})
    //移除 mekanismgenerators 高级太阳能发电机 配方
    event.remove({id: 'mekanismgenerators:generator/advanced_solar'})
    //移除 mekanismgenerators 太阳能电池板 配方
    event.remove({id: 'mekanismgenerators:solar_panel'})

    //移除 mekanism:chemical_crystallizer 配方
    event.remove({id: 'mekanism:chemical_crystallizer'})
    //移除 mekanism:sps_casing 配方
    event.remove({id: 'mekanism:sps_casing'})
    //移除 mekanism:sps_port 配方
    event.remove({id: 'mekanism:sps_port'})

    //移除 mekanismgenerators:reactor/port 配方
    event.remove({id: 'mekanismgenerators:reactor/port'})
    //移除 mekanismgenerators:reactor/casing 配方
    event.remove({id: 'mekanismgenerators:reactor/frame'})
    //移除 mekanismgenerators:reactor/controller 配方
    event.remove({id: 'mekanismgenerators:reactor/controller'})
    

    //移除工业先锋 缺陷机器框架 配方
    event.remove({id: 'industrialforegoing:machine_frame_pity'})
    //移除工业先锋 简易机器框架 配方
    event.remove({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'})
    //移除工业先锋 高级机器框架 配方
    event.remove({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'})
    //移除工业先锋 超级机器框架 配方
    event.remove({id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'})


    //移除工业先锋 液体提取器 配方
    event.remove({id: 'industrialforegoing:fluid_extractor'})
    //移除工业先锋液体提取器 金合欢木树液 配方
    event.remove({id: 'industrialforegoing:fluid_extractor/acacia'})
    //移除工业先锋 染料混合器 配方
    event.remove({id: 'industrialforegoing:dye_mixer'})
    //移除工业先锋 乳胶处理单元 配方
    event.remove({id: 'industrialforegoing:latex_processing_unit'})
    //移除工业先锋 塑料 配方
    event.remove({id: 'industrialforegoing:plastic'})
    event.remove({id: 'thermal:furnace_978263519'})
    //移除工业先锋 化学溶解室 配方
    event.remove({id: 'industrialforegoing:dissolution_chamber'})
    //移除工业先锋 流体镭射钻基座 配方
    event.remove({id: 'industrialforegoing:fluid_laser_base'})
    //移除工业先锋 镭射钻 配方
    event.remove({id: 'industrialforegoing:laser_drill'})
    //移除工业先锋 生物屠宰机 配方
    event.remove({id: 'industrialforegoing:mob_slaughter_factory'})
    //移除工业先锋 镭射钻基座 配方
    event.remove({id: 'industrialforegoing:ore_laser_base'})
    //移除工业先锋 冷凝室 配方
    event.remove({id: 'industrialforegoing:stasis_chamber'})

    //移除工业先锋 钻石齿轮 配方
    event.remove({id: 'industrialforegoing:diamond_gear'})
    event.remove({id: 'industrialforegoing:iron_gear'})
    event.remove({id: 'industrialforegoing:gold_gear'})
    event.remove({id: 'thermal:parts/signalum_gear'})
    event.remove({id: 'thermal:parts/netherite_gear'})
    event.remove({id: 'thermal:parts/iron_gear'})
    event.remove({id: 'thermal:parts/gold_gear'})
    event.remove({id: 'thermal:parts/diamond_gear'})
    event.remove({id: 'thermal:parts/copper_gear'})

    //移除avaritia 压缩工作台 配方
    event.remove({id: 'minecraft:compressed_crafting_table'})

    //移除avaritia 双倍压缩工作台 配方
    event.remove({id: 'minecraft:double_compressed_crafting_table'})

    //移除avaritia 水晶矩阵 配方
    event.remove({id: 'minecraft:crystal_matrix'})
    event.remove({id: 'avaritia:crystal_matrix_ingot'})
    event.remove({id: 'avaritia:diamond_lattice'})

    //移除avaritia 终极工作台 配方
    event.remove({id: 'avaritia:extreme_crafting_table'})
    
})

