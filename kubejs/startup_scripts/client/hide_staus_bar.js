if (Platform.isClientEnvironment()) {
    ForgeEvents.onEvent('net.minecraftforge.client.event.RenderGuiOverlayEvent', (event) => {
        if (event.overlay.id() == 'minecraft:food_level') {
            event.setCanceled(true);
        }

        if (event.overlay.id() == 'minecraft:player_health') {
            event.setCanceled(true);
        }
    });
}
