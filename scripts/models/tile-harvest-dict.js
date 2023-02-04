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
    [TilesTypes.gold]: {
      tier: 20,
      tools: [ToolsModels.pickaxe]
    },
    [TilesTypes.diamond]: {
      tier: 30,
      tools: [ToolsModels.pickaxe]
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
    [TilesTypes.leaveser]: {
      tier: 30,
      tools: [ToolsModels.axe]
    },
    [TilesTypes.wooder]: {
      tier: 30,
      tools: [ToolsModels.axe]
    },
    [TilesTypes.sky]: {
      tier: 9000,
      tools: []
    },
  };
  