import { Scene } from "phaser";
import { MapSetup, Maps } from "../resources/maps";
import { PlayerSetup, Players } from "../resources/players";

// import {} from "../../../../public/tiles/map.json"
export default class BootstrapLoader extends Scene{
    constructor(){
        super('bootstraploader')
    }

    preload() {
        MapSetup.LoadMap(Maps.MainMap, this)
        // MapSetup.LoadMap(Maps.HouseMap, this)
        PlayerSetup.LoadPlayer(Players.Hero, this); 

        for (let index = 1; index <= 60; index++) {
           PlayerSetup.LoadPlayerByName("dummy"+index,'tiles/character.png' , this);
        }  
    }

    create() {
        this.scene.start('maingame')
    }
}