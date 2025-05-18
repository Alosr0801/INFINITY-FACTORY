    // 允许挖掘任何方块
    ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck', (event) => {
        const { entity } = event;
        if (entity.getMainHandItem() == 'factory:dirt_pickaxe') {
            event.setCanHarvest(true);
        }
    });

    // 修改挖掘速度
    ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', (event) => {
        const { entity, originalSpeed } = event;
        
        if (entity.getMainHandItem() != 'factory:dirt_pickaxe') {
            console.log('Not holding dirt pickaxe');
            return;
        }
        
        const isInWater = entity.isInWater();
        const isInAir = !entity.onGround();
        
        let multiplier = 20; // 基础速度倍率
        
        if (isInWater || isInAir) multiplier *= 5;
        if (isInWater && isInAir) multiplier *= 5;
        
        event.setNewSpeed(originalSpeed * multiplier);
    });

