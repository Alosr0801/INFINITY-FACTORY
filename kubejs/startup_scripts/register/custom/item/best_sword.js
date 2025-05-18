StartupEvents.registry('item', (event) => {
    event.create('factory:best_sword','basic')
        .texture('minecraft:item/netherite_sword')
        .rarity('uncommon')
        .tag('factory:best_sword')
        .unstackable()
        .tag('curios:sword')
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
            .modifyAttribute('minecraft:generic.attack_damage','attack_damage', 100, 'addition')
            .modifyAttribute('minecraft:generic.attack_speed','attack_speed', 10, 'addition')
            .canEquip(() => true)
            .canUnequip(() => true)
            .onEquip((stack,ctx) => {
                toggleInvincible(ctx.entity(), true)
                ctx.entity().sendSystemMessage(Text.translate('best_sword.equip').gold().bold())
            })
            .onUnequip((stack,ctx) => {
                toggleInvincible(ctx.entity(), false)
            })
            .curioTick((stack,ctx) => {
                toggleInvincible(ctx.entity(), true)
            })
        )
        
})
    