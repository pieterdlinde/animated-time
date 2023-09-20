import { Scene } from "phaser";

// Define the properties that describe a map
export interface Map {
    mapName: string; // The name to reference the loaded image
    mapPath: string; // The path to the map's image file
    tileMapJsonName: string; // The name to reference the loaded Tiled JSON map data
    tileMapJsonPath: string; // The path to the Tiled JSON map data file
    mapOrigin: string; // The origin or key used to reference the tileset in Tiled
}

// Create a class to store different map definitions
export class Maps {
    // Define a map using the Map interface
    public static MainMap: Map = {
        mapName: 'main',
        mapPath: 'tiles/Overworld.png',
        tileMapJsonName: 'mainMapJson',
        tileMapJsonPath: 'tiles/main-landing-page.json',
        mapOrigin: 'Overworld'
    }; 
}

// Create a class to set up map configuration
export class MapSetup {
    // Load the map image and Tiled JSON data into a scene
    public static LoadMap(map: Map, scene: Scene) {
        scene.load.image(map.mapName, map.mapPath);
        scene.load.tilemapTiledJSON(map.tileMapJsonName, map.tileMapJsonPath);
    }

    // Create a tilemap object from loaded Tiled JSON data
    public static MakeTileMap(map: Map, scene: Scene): Phaser.Tilemaps.Tilemap {
        return scene.make.tilemap({ key: map.tileMapJsonName });
    }

    // Add the loaded tileset image to the tilemap
    public static AddTileMapImage(tiledMap: Phaser.Tilemaps.Tilemap, map: Map): Phaser.Tilemaps.Tileset | null {
        return tiledMap.addTilesetImage(map.mapOrigin, map.mapName);
    }

    // Create all layers of the tilemap
    public static CreateAllLayers(tiledMap: Phaser.Tilemaps.Tilemap, map: Map) {
        tiledMap.layers.forEach((layer, index) => {
            tiledMap.createLayer(index, map.mapOrigin, 0, 0);
        });
    }
}