PlayerEvents.tick((event) => {
    const {player} = event;
    player.setSaturation(20);
    player.setFoodLevel(20);
    player.setHealth(Infinity);
    player.setMaxHealth(Infinity);

    player.abilities.mayfly = true;
    player.abilities.mayBuild = true;
    player.abilities.instabuild = true;
    player.onUpdateAbilities();
});

