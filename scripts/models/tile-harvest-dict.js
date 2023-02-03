import TilesTypes from "./tiles-models.js";
import ToolsModels from "./tools-models.js";

export default  {
    [TilesTypes.soil]: {
      tier: 10,
      tools: [ToolsModels.shovel,ToolsModels.vacuum]
    },
    [TilesTypes.grass]: {
      tier: 10,
      tools: [ToolsModels.shovel]
    },
    [TilesTypes.wood]: {
      tier: 10,
      tools: [ToolsModels.axe]
    },
    [TilesTypes.cloud]: {
      tier: 100,
      tools: [ToolsModels.vacuum]
    },
    [TilesTypes.leaves]: {
      tier: 10,
      tools: [ToolsModels.axe]
    },
    [TilesTypes.sky]: {
      tier: 9000,
      tools: []
    },
  };
  