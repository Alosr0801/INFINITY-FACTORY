ItemEvents.rightClicked(event => {
    // 如果右键的物品是魔力符文
    if (event.getItem().getId() == "minecraft:compass") {
        // 获取重要参数
        var the_player = event.getPlayer()
        var player_name = the_player.getName().getString()
        var the_server = event.getServer()
        // 服务器总计分板
        var server_scoreBoard = the_server.getScoreboard()
        // 建筑的tag、计分板变量名
        var structure_tag = "minecraft:nether_fossil"
        var objective_name = "fortressDist"
        // 简化代码的KubeJs计分板对象
        var objective_cls = server_scoreBoard.getObjective(objective_name)
        // 首先创建一个计分板变量
        the_server.runCommandSilent(`/execute at ${player_name} run scoreboard objectives add ${objective_name} dummy`)
        // 然后将locate命令返回的水平距离参数写入计分板变量中
        the_server.runCommandSilent(`/execute at ${player_name} store result score ${player_name} ${objective_name} run locate structure ${structure_tag}`)
        // 计分板就是KubeJs与MC世界之间的通信桥梁
        var objective_value = objective_cls.getScoreboard().getOrCreatePlayerScore(player_name, objective_cls).getScore()
        // 为右键的玩家发送信息
        the_player.setStatusMessage(`指南针上显示地狱要塞就在附近${objective_value}米内`)
    }
})