import Phaser, { Scene } from "phaser";
import { GridEngineConfig } from "grid-engine"; 
import { GridEngineExtender } from "../extenders/grid-engine-extender";
import { MapSetup, Maps } from "../resources/maps";
import { PlayerSetup, Players } from "../resources/players";

export default class MainGame extends Scene {
    private gridEngine!: GridEngineExtender;

    constructor() {
        super('maingame')
    }

    preload() {
        // Do nothing yet
        console.log("preload - MainGame")
    }

    create() {

        const mainMap = MapSetup.MakeTileMap(Maps.MainMap, this);
        const tileSet = MapSetup.AddTileMapImage(mainMap, Maps.MainMap);
        MapSetup.CreateAllLayers(mainMap, Maps.MainMap) 

        const heroSprite = PlayerSetup.CreatePlayer(Players.Hero, this); 

        const container = this.add.container(0, 0, [
            heroSprite
        ]);
        const gridEngineConfig: GridEngineConfig = {
            characters: [
                {
                    id: Players.Hero.name,
                    sprite: heroSprite,
                    startPosition: Players.Hero.startPosition,
                    walkingAnimationMapping: Players.Hero.walkingAnimationMapping,
                    container
                }
            ]
        }

        for (let index = 1; index < 60; index++) {
            const name = "dummy"+index;
           const sprite = PlayerSetup.CreatePlayerByName(name, this);
           gridEngineConfig.characters.push(PlayerSetup.GridEngineConfigSetupByName(name,{ x: 10+index, y: 1+index }, 0, sprite)) 
        }    

        this.cameras.main.startFollow(container, true);
        this.cameras.main.setFollowOffset(-heroSprite.width, -heroSprite.height);

 
        
        this.gridEngine.create(mainMap, gridEngineConfig);
        for (let index = 1; index < 60; index++) {
             
            this.gridEngine.moveRandomly("dummy"+index, this.getRandomInt(100,1500), -1)
        }  

    }

    update() {
        PlayerSetup.UpdatePlayerBasicKeyboardMovement(this, this.gridEngine);
        const cursor = this.input.keyboard?.createCursorKeys();

        // Test Move to
        if (cursor?.space.isDown) {
            this.gridEngine.moveTo(Players.Hero.name, {
                x: 8, y: 8
            })
        }

        if (cursor?.shift.isDown) {
            this.gridEngine.moveRandomly(Players.Hero.name, 3, -1)
        }
    } 
/**
* Gets random int
* @param min 
* @param max 
* @returns random int - min & max inclusive
*/
getRandomInt(min: number, max: number) : number{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

    
}