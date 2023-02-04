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
    [TilesTypes.stone]: {
      tier: 10,
      tools: [ToolsModels.pickaxe]
    },
    [TilesTypes.cloud]: {
      tier: 10,
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
  