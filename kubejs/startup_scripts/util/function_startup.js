
/**
 * 切换玩家无敌状态
 * @param {Internal.Player} player
 * @param {boolean} enable
 * @returns {void}
 */
function toggleInvincible(player, enable){
    if (player.isCreative() || player.isSpectator()) return;

        if(player.abilities.invulnerable != enable){
            player.abilities.invulnerable = enable;
            if (!enable) player.abilities.invulnerable = false;
            player.onUpdateAbilities();
    }
}