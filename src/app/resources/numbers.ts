import { GridEngineExtender } from "../extenders/grid-engine-extender"

const startX = 30;
const startY = 30;

/**
* Gets random int
* @param min 
* @param max 
* @returns random int - min & max inclusive
*/
export function getRandomInt(gridEngine: GridEngineExtender,charName: string,min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    gridEngine.setCollisionGroups(charName,["geDefault"]);
    gridEngine.setSpeed(charName, 4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function moveTo(gridEngine: GridEngineExtender, charName: string, direction: {x: number, y:number}) {
    gridEngine.setCollisionGroups(charName,[]);
    gridEngine.setSpeed(charName, 10);
    gridEngine.moveTo(charName, { x:direction.x, y:direction.y})
}

export function createNumber(int: number,gridEngine: GridEngineExtender,charName: string[], x: number, y: number){
    if(int === 0){
        createLetter0(gridEngine,charName,x,y);
    }else if(int === 1){
        createLetter1(gridEngine,charName,x,y);
    }else if(int === 2){
        createLetter2(gridEngine,charName,x,y);
    }else if(int === 3){
        createLetter3(gridEngine,charName,x,y);
    }else if(int === 4){
        createLetter4(gridEngine,charName,x,y);
    }else if(int === 5){
        createLetter5(gridEngine,charName,x,y);
    }else if(int === 6){
        createLetter6(gridEngine,charName,x,y);
    }else if(int === 7){
        createLetter7(gridEngine,charName,x,y);
    }else if(int === 8){
        createLetter8(gridEngine,charName,x,y);
    }else if(int === 9){
        createLetter9(gridEngine,charName,x,y);
    }else if(int === 0){
        createLetter0(gridEngine,charName,x,y);
    }
}

export function createLetterAll(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        moveTo(gridEngine, charName[4], { x: startX + 1 + x, y: startY + 1 +y })
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        moveTo(gridEngine, charName[9], { x: startX + x, y: startY + 3 +y })
        moveTo(gridEngine, charName[10], { x: startX + 1 + x, y: startY + 3 +y })
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter1(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveRandomly(charName[0],getRandomInt(gridEngine, charName[0], 20, 400),30)
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        gridEngine.moveRandomly(charName[2],getRandomInt(gridEngine, charName[2], 20, 400),30)

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        moveTo(gridEngine, charName[4], { x: startX + 1 + x, y: startY + 1 +y })
        gridEngine.moveRandomly(charName[5],getRandomInt(gridEngine, charName[5], 20, 400),30)

        gridEngine.moveRandomly(charName[6],getRandomInt(gridEngine, charName[6], 20, 400),30)
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        gridEngine.moveRandomly(charName[8],getRandomInt(gridEngine, charName[8], 20, 400),30)

        gridEngine.moveRandomly(charName[9],getRandomInt(gridEngine, charName[9], 20, 400),30)
        moveTo(gridEngine, charName[10], { x: startX + 1 + x, y: startY + 3 +y })
        gridEngine.moveRandomly(charName[11],getRandomInt(gridEngine, charName[11], 20, 400),30)

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}


export function createLetter2(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        gridEngine.moveRandomly(charName[3],getRandomInt(gridEngine, charName[3], 20, 400),30)
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        moveTo(gridEngine, charName[9], { x: startX + x, y: startY + 3 +y })
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        gridEngine.moveRandomly(charName[11],getRandomInt(gridEngine, charName[11], 20, 400),30)

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter3(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        gridEngine.moveRandomly(charName[3],getRandomInt(gridEngine, charName[3], 20, 400),30)
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        gridEngine.moveRandomly(charName[9],getRandomInt(gridEngine, charName[9], 20, 400),30)
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter4(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        gridEngine.moveRandomly(charName[1],getRandomInt(gridEngine, charName[1], 20, 400),30)
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        gridEngine.moveRandomly(charName[9],getRandomInt(gridEngine, charName[9], 20, 400),30)
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        gridEngine.moveRandomly(charName[12],getRandomInt(gridEngine, charName[12], 20, 400),30)
        gridEngine.moveRandomly(charName[13],getRandomInt(gridEngine, charName[13], 20, 400),30)
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter5(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        gridEngine.moveRandomly(charName[5],getRandomInt(gridEngine, charName[5], 20, 400),30)

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        gridEngine.moveRandomly(charName[9],getRandomInt(gridEngine, charName[9], 20, 400),30)
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter6(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        gridEngine.moveRandomly(charName[5],getRandomInt(gridEngine, charName[5], 20, 400),30)

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        moveTo(gridEngine, charName[9], { x: startX + x, y: startY + 3 +y })
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter7(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        gridEngine.moveRandomly(charName[3],getRandomInt(gridEngine, charName[3], 20, 400),30)
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        gridEngine.moveRandomly(charName[6],getRandomInt(gridEngine, charName[6], 20, 400),30)
        gridEngine.moveRandomly(charName[7],getRandomInt(gridEngine, charName[7], 20, 400),30)
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        gridEngine.moveRandomly(charName[9],getRandomInt(gridEngine, charName[9], 20, 400),30)
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        gridEngine.moveRandomly(charName[12],getRandomInt(gridEngine, charName[12], 20, 400),30)
        gridEngine.moveRandomly(charName[13],getRandomInt(gridEngine, charName[13], 20, 400),30)
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter8(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        moveTo(gridEngine, charName[9], { x: startX + x, y: startY + 3 +y })
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter9(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[7], { x: startX + 1 + x, y: startY + 2 +y })
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        gridEngine.moveRandomly(charName[9],getRandomInt(gridEngine, charName[9], 20, 400),30)
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter0(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        moveTo(gridEngine, charName[0], { x: startX + x, y: startY +y })
        moveTo(gridEngine, charName[1], { x: startX + 1 + x, y: startY +y })
        moveTo(gridEngine, charName[2], { x: startX + 2 + x, y: startY +y })

        moveTo(gridEngine, charName[3], { x: startX + x, y: startY + 1 +y })
        gridEngine.moveRandomly(charName[4],getRandomInt(gridEngine, charName[4], 20, 400),30)
        moveTo(gridEngine, charName[5], { x: startX + 2 + x, y: startY + 1 +y })

        moveTo(gridEngine, charName[6], { x: startX + x, y: startY + 2 +y })
        gridEngine.moveRandomly(charName[7],getRandomInt(gridEngine, charName[7], 20, 400),30)
        moveTo(gridEngine, charName[8], { x: startX + 2 + x, y: startY + 2 +y })

        moveTo(gridEngine, charName[9], { x: startX + x, y: startY + 3 +y })
        gridEngine.moveRandomly(charName[10],getRandomInt(gridEngine, charName[10], 20, 400),30)
        moveTo(gridEngine, charName[11], { x: startX + 2 + x, y: startY + 3 +y })

        moveTo(gridEngine, charName[12], { x: startX + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[13], { x: startX + 1 + x, y: startY + 4 +y })
        moveTo(gridEngine, charName[14], { x: startX + 2 + x, y: startY + 4 +y })
    } else {
        console.error("Needs to be 15 people")
    }
}