Platform.setModName('factory', 'Factory');

StartupEvents.modifyCreativeTab('kubejs:tab', (event) => {
    event.setDisplayName('Factory');
    event.setIcon(Item.of('factory:dirt_pickaxe').enchant('efficiency', 1));
    event.add([
        Item.of('factory:dirt_pickaxe'),
    ]);
});
