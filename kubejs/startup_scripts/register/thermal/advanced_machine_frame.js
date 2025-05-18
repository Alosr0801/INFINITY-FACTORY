StartupEvents.registry("block", (event) => {
    event.create('thermal:advanced_machine_frame')
    .soundType('lantern')
    .tag('minecraft:mineable/pickaxe')
    .hardness(5.0)
    .displayName(Text.translate('block.thermal.advanced_machine_frame').yellow())
})
