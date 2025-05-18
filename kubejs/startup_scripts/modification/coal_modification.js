ItemEvents.modification((event) => {
    event.modify('minecraft:coal', (item) => {
        item.burnTime = 2147483647
    })
})
