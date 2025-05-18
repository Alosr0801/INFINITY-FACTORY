ServerEvents.recipes((event) => {
    event.shaped(Item.of('minecraft:compass', 1),[
        ' N ',
        'NIN',
        ' N '
    ],
    {
        'I' : 'minecraft:iron_ingot',
        'N' : 'minecraft:netherrack'
    }).stage('nether')
})