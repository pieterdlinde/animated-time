import { Scene } from "phaser";
import { GridEngineConfig } from "grid-engine";
import { GridEngineExtender } from "../extenders/grid-engine-extender";
import { MapSetup, Maps } from "../resources/maps";
import { PlayerSetup, Players } from "../resources/players";
import { createNumber, getRandomInt } from "../resources/numbers"; 

export default class MainGame extends Scene {
    private gridEngine!: GridEngineExtender;
    private showTime = false;
    private updateTime: number = 0;
    private updateSeconds: number = 0;
    private randomMovement = false;

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

        for (let index = 1; index <= 30; index++) {
            const name = "dummy" + index;
            const sprite = PlayerSetup.CreatePlayerByName(name, this);
            gridEngineConfig.characters.push(PlayerSetup.GridEngineConfigSetupByName(name, { x: 10 + index , y: 2 }, 0, sprite))
        }

        for (let index = 31; index <= 60; index++) {
            const name = "dummy" + index;
            const sprite = PlayerSetup.CreatePlayerByName(name, this);
            gridEngineConfig.characters.push(PlayerSetup.GridEngineConfigSetupByName(name, { x: 10 + index -30 , y: 3 }, 0, sprite))
        }

        this.cameras.main.startFollow(container, true);
        this.cameras.main.setFollowOffset(-heroSprite.width, -heroSprite.height);
        this.gridEngine.create(mainMap, gridEngineConfig);
    }

    update() {
        PlayerSetup.UpdatePlayerBasicKeyboardMovement(this, this.gridEngine);
        const cursor = this.input.keyboard?.createCursorKeys();

        const date = new Date();
        if (this.showTime && (this.updateSeconds + 5 <= date.getSeconds() || this.updateTime != date.getMinutes())) {
            this.randomMovement = false;
            this.updateTime = date.getMinutes();
            this.updateSeconds = date.getSeconds();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            let space1: string[] = [];
            let space2: string[] = [];
            let space3: string[] = [];
            let space4: string[] = [];
            for (let index = 1; index <= 15; index++) {
                space1.push("dummy" + index);
            }
            for (let index = 16; index <= 30; index++) {
                space2.push("dummy" + index);
            }
            for (let index = 31; index <= 45; index++) {
                space3.push("dummy" + index);
            }
            for (let index = 46; index <= 60; index++) {
                space4.push("dummy" + index);
            }

            createNumber(Number(hours.toString()[0]), this.gridEngine, space1, 0, 0)
            createNumber(Number(hours.toString()[1]), this.gridEngine, space2, 4, 0)
            if (minutes >= 10) {
                createNumber(Number(minutes.toString()[0]), this.gridEngine, space3, 8, 0)
                createNumber(Number(minutes.toString()[1]), this.gridEngine, space4, 12, 0)
            } else {
                createNumber(0, this.gridEngine, space3, 8, 0)
                createNumber(Number(minutes.toString()[0]), this.gridEngine, space4, 12, 0)
            }
        }
        if(this.showTime === false && this.randomMovement === false){
            this.randomMovement = true;
            for (let index = 1; index <= 60; index++) {
                this.gridEngine.moveRandomly("dummy" + index, getRandomInt(10,500),30)
            }
        }

        if (cursor?.shift.isDown) {
            this.showTime = true;
        }
        if (cursor?.space.isDown) {
            this.showTime = false;
        }
    }



}