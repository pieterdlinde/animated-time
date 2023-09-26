import { Scene } from "phaser";
import { GridEngineConfig } from "grid-engine";
import { GridEngineExtender } from "../extenders/grid-engine-extender";
import { MapSetup, Maps } from "../resources/maps";
import { PlayerSetup, Players } from "../resources/players";
import { createNumber, getRandomInt } from "../resources/numbers";

export default class MainGame extends Scene {
    private gridEngine!: GridEngineExtender;
    private showTime = false; 
    private updateDate: Date = new Date(); 

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
            gridEngineConfig.characters.push(PlayerSetup.GridEngineConfigSetupByName(name, { x: 15 + index, y: 30 }, 0, sprite))
        }

        for (let index = 31; index <= 60; index++) {
            const name = "dummy" + index;
            const sprite = PlayerSetup.CreatePlayerByName(name, this);
            gridEngineConfig.characters.push(PlayerSetup.GridEngineConfigSetupByName(name, { x: 15 + index - 30, y: 32 }, 0, sprite))
        }

        this.cameras.main.startFollow(container, true);
        this.cameras.main.setFollowOffset(-heroSprite.width, -heroSprite.height);
        this.gridEngine.create(mainMap, gridEngineConfig);



    }

    update() {
        PlayerSetup.UpdatePlayerBasicKeyboardMovement(this, this.gridEngine);
        const cursor = this.input.keyboard?.createCursorKeys();

        const date = new Date();

        if (this.updateDate <= date) {
            date.setSeconds(date.getSeconds() + 15)
            this.updateDate = new Date(date);
            this.showTime = !this.showTime


            if (this.showTime) { 
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

                if (hours >= 10) {
                    createNumber(Number(hours.toString()[0]), this.gridEngine, space1, 0, 0)
                    createNumber(Number(hours.toString()[1]), this.gridEngine, space2, 4, 0)
                } else {
                    createNumber(0, this.gridEngine, space1, 0, 0)
                    createNumber(Number(hours.toString()[0]), this.gridEngine, space2, 4, 0)
                }

                if (minutes >= 10) {
                    createNumber(Number(minutes.toString()[0]), this.gridEngine, space3, 10, 0)
                    createNumber(Number(minutes.toString()[1]), this.gridEngine, space4, 14, 0)
                } else {
                    createNumber(0, this.gridEngine, space3, 10, 0)
                    createNumber(Number(minutes.toString()[0]), this.gridEngine, space4, 14, 0)
                }
            }
            if (!this.showTime) { 
                for (let index = 1; index <= 60; index++) {
                    this.gridEngine.moveRandomly("dummy" + index, getRandomInt(this.gridEngine, "dummy" + index, 10, 500), 30)
                }
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