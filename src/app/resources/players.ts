import { Direction, IGridEngine } from "grid-engine";
import { Scene } from "phaser";

// Define the properties that describe a player character
export interface Player {
  path: string; // The path to the character's sprite image
  name: string; // The name of the character
  startPosition: { x: number; y: number }; // The initial position of the character
  frameWidth: number; // The width of each frame in the sprite sheet
  frameHeight: number; // The height of each frame in the sprite sheet
  walkingAnimationMapping: number; // The index of the animation for walking
}

// Create a class to store different player character definitions
export class Players {
  // Define a player character using the Player interface
  public static Hero: Player = {
    name: 'hero',
    path: 'tiles/character.png',
    frameHeight: 32,
    frameWidth: 16,
    walkingAnimationMapping: 0,
    startPosition: { x: 15, y: 30 },
  };  
}

// Create a class to set up player characters
export class PlayerSetup {
  // Load a player character's spritesheet into a scene
  public static LoadPlayer(player: Player, scene: Scene) {
    scene.load.spritesheet(player.name, player.path, {
      frameWidth: player.frameWidth,
      frameHeight: player.frameHeight,
    });
  }

  public static LoadPlayerByName(playerName: string, playerPath: string, scene: Scene) {
    scene.load.spritesheet(playerName, playerPath, {
      frameWidth: 16,
      frameHeight:32,
    });
  }

  // Create a player sprite with physics
  public static CreatePlayer(player: Player, scene: Scene): any {
    return scene.physics.add.sprite(0, 0, player.name);
  }

  public static CreatePlayerByName(playerName: string, scene: Scene): any {
    return scene.physics.add.sprite(0, 0, playerName);
  }


  // Set up a grid engine configuration for a player character
  public static GridEngineConfigSetup(player: Player, sprite: any) {
    return {
      id: player.name,
      sprite: sprite,
      startPosition: player.startPosition,
      walkingAnimationMapping: player.walkingAnimationMapping,
    };
  }

  public static GridEngineConfigSetupByName(playerName: string, startPosition: { x: number; y: number }, walkingAnimationMapping: number, sprite: any) {
    return {
      id: playerName,
      sprite: sprite,
      startPosition: startPosition,
      walkingAnimationMapping: walkingAnimationMapping,
    };
  }

  public static UpdatePlayerBasicKeyboardMovement(scene: Scene, gridEngine: IGridEngine) {
    const cursor = scene.input.keyboard?.createCursorKeys();
    if (cursor?.left.isDown) {
      gridEngine.move('hero', Direction.LEFT)
    } else if (cursor?.right.isDown) {
      gridEngine.move('hero', Direction.RIGHT)
    } else if (cursor?.up.isDown) {
      gridEngine.move('hero', Direction.UP)
    } else if (cursor?.down.isDown) {
      gridEngine.move('hero', Direction.DOWN)
    }
  }
}