ItemEvents.modification((event) => {
    event.modify('minecraft:dirt', (item) => {
        item.burnTime = 200
    })
})
