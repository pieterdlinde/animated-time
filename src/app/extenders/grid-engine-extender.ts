import { GridEngineConfig, IGridEngine } from "grid-engine";

export interface GridEngineExtender extends IGridEngine{
   create(map: any, config: GridEngineConfig): any;
}