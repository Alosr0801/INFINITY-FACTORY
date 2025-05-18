BlockEvents.rightClicked('minecraft:white_concrete', event => {
    if(event.hand === 'OFF_HAND') return

    if(event.player.getMainHandItem().isEmpty()) {
        if(event.player.crouching) {
            console.log('crouching')
            let spawnItem = event.getLevel().createEntity("item")
            spawnItem.pos = event.block.pos
            spawnItem.item = Item.of('factory:dirt_nugget', 1);
            spawnItem.spawn();
        }
    }
})