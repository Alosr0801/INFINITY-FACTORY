//priority : 1000

/**
 * AE2 无限物品元件配方
 * 
 * @param {Internal.Event} event 
 * @param {string} ingredientA 
 * @param {string} ingredientB 
 * @param {string} result 
 * @param {string} stagename 
 */
function infinityCellRecipe(event, ingredientA, ingredientB, result, stagename) {
        event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"'+ result + '"}}'),[
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            'A': Item.of(ingredientA, 1),
            'B': Item.of(ingredientB, 1)
        }).stage(stagename)
}

/**
 * AE2 无限流体元件配方
 * 
 * @param {Internal.Event} event 
 * @param {string} ingredientA 
 * @param {string} ingredientB 
 * @param {string} result 
 * @param {string} stagename 
 */
function infinityCellRecipe_Fluid(event, ingredientA, ingredientB, result, stagename) {
  event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"'+ result + '"}}'),[
      'AAA',
      'ABA',
      'AAA'
  ],
  {
      'A': Item.of(ingredientA, 1),
      'B': Item.of(ingredientB, 1)
  }).stage(stagename)
}

/**
 * 砧板配方
 * 
 * @param {Internal.Event} event 
 * @param {string} ingredients 
 * @param {string} tool 
 * @param {string} result 
 * @param {number} count 
 */
function cuttingBoardRecipe(event, ingredients, tool, result, count) {
        event.custom({
            'type': 'farmersdelight:cutting',
            'ingredients': [
                {
                    'item': ingredients,
                }
            ],
            'tool':{
                'item': tool,
            },
            'result': Item.of(result, count)
        })
}
/**
 * 压印器配方
 * 
 * @param {Internal.Event} event 
 * @param {string} middle 
 * @param {string} result 
 * @param {number} count 
 */
function inscriberRecipe_Middle(event, middle, result, count) {
        event.custom({
            "type": "ae2:inscriber",
            "ingredients": {

              "middle": {
                "item": middle
              },
            },
            "mode": "inscribe",
            "result": {
              "item": result,
              "count": count
            }
          })
}

