ItemEvents.tooltip((event) => {
    event.add('factory:dirt_pickaxe', Text.translate('tooltip.factory.dirt_pickaxe').bold().gold());
    event.add('cobblefordays:tier_1', Text.translate('tooltip.cobblefordays.tier_1').bold().gold());

    event.addAdvanced('factory:best_sword', (item, advanced, tooltip) => {
        switch(event.isShift()){
            case true:
                tooltip.add(Text.translate('tooltip.best_sword.shift').gold().bold())
                tooltip.add(Text.translate('tooltip.best_sword.shift_info').gold().bold())
                break
            case false:
                tooltip.add(Text.translate('tooltip.best_sword.normal').gold().bold())
                tooltip.add(Text.literal(''))
                tooltip.add(Text.translate('tooltip.best_sword.hold_shift'))
                break
        }
    })
})
