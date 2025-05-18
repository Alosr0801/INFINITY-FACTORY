StartupEvents.registry('item', (event) => {
    event.createCustom('factory:upgrade_augment_creative',
        () => new $AugmentItem(new $Item$Properties(), { Type: 'Upgrade', BaseMod: 999 })
    )
});