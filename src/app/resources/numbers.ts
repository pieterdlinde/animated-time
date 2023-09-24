import { GridEngineExtender } from "../extenders/grid-engine-extender"
/**
* Gets random int
* @param min 
* @param max 
* @returns random int - min & max inclusive
*/
export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveTo(charName[4], { x: 16 + x, y: 16 + y })
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveTo(charName[9], { x: 15 + x, y: 18 + y })
        gridEngine.moveTo(charName[10], { x: 16 + x, y: 18 + y })
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter1(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveRandomly(charName[0],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveRandomly(charName[2],getRandomInt(20, 400),-1)

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveTo(charName[4], { x: 16 + x, y: 16 + y })
        gridEngine.moveRandomly(charName[5],getRandomInt(20, 400),-1)

        gridEngine.moveRandomly(charName[6],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveRandomly(charName[8],getRandomInt(20, 400),-1)

        gridEngine.moveRandomly(charName[9],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[10], { x: 16 + x, y: 18 + y })
        gridEngine.moveRandomly(charName[11],getRandomInt(20, 400),-1)

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}


export function createLetter2(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveRandomly(charName[3],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveTo(charName[9], { x: 15 + x, y: 18 + y })
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[11],getRandomInt(20, 400),-1)

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter3(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveRandomly(charName[3],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveRandomly(charName[9],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter4(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveRandomly(charName[1],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveRandomly(charName[9],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveRandomly(charName[12],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[13],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter5(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[5],getRandomInt(20, 400),-1)

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveRandomly(charName[9],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter6(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[5],getRandomInt(20, 400),-1)

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveTo(charName[9], { x: 15 + x, y: 18 + y })
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter7(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveRandomly(charName[3],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveRandomly(charName[6],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[7],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveRandomly(charName[9],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveRandomly(charName[12],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[13],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter8(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveTo(charName[9], { x: 15 + x, y: 18 + y })
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter9(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveTo(charName[7], { x: 16 + x, y: 17 + y })
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveRandomly(charName[9],getRandomInt(20, 400),-1)
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}

export function createLetter0(gridEngine: GridEngineExtender, charName: string[], x: number, y: number) {
    if (charName.length === 15) {
        gridEngine.moveTo(charName[0], { x: 15 + x, y: 15 + y })
        gridEngine.moveTo(charName[1], { x: 16 + x, y: 15 + y })
        gridEngine.moveTo(charName[2], { x: 17 + x, y: 15 + y })

        gridEngine.moveTo(charName[3], { x: 15 + x, y: 16 + y })
        gridEngine.moveRandomly(charName[4],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[5], { x: 17 + x, y: 16 + y })

        gridEngine.moveTo(charName[6], { x: 15 + x, y: 17 + y })
        gridEngine.moveRandomly(charName[7],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[8], { x: 17 + x, y: 17 + y })

        gridEngine.moveTo(charName[9], { x: 15 + x, y: 18 + y })
        gridEngine.moveRandomly(charName[10],getRandomInt(20, 400),-1)
        gridEngine.moveTo(charName[11], { x: 17 + x, y: 18 + y })

        gridEngine.moveTo(charName[12], { x: 15 + x, y: 19 + y })
        gridEngine.moveTo(charName[13], { x: 16 + x, y: 19 + y })
        gridEngine.moveTo(charName[14], { x: 17 + x, y: 19 + y })
    } else {
        console.error("Needs to be 15 people")
    }
}