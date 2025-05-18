function addStage(questId, stage) {
    FTBQuestsEvents.completed(questId, (event) => {
        event.player.stages.add(stage)
    })
}


