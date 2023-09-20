'use client'
import { useEffect } from 'react';


const MainGameComponent = ({ width, height }: { width: number, height: number }) => {
    const isDevelopment = false;

    useEffect(() => {
        async function initPhaser() {
            const Phaser = await import('phaser');
            const { default: GridEngine } = await import('grid-engine');

            const { default: BootstrapLoader } = await import('../scenes/bootstrap-loader');
            const { default: MainGame } = await import('../scenes/main-game');

            const phaserGame = new Phaser.Game({
                type: Phaser.AUTO,
                title: "Pieter Linde Profile",
                parent: "game-container",
                render: {
                    antialias: true,
                },
                width: width,
                height: height,
                pixelArt: false,
                scale: {
                    zoom: 1,
                },
                scene: [
                    BootstrapLoader,
                    MainGame
                ],
                physics: {
                    default: 'arcade',
                    arcade: {
                        debug: isDevelopment
                    }
                },
                plugins: {
                    scene: [{
                        key: "gridEngine",
                        plugin: GridEngine,
                        mapping: "gridEngine"
                    }]
                },
                backgroundColor: "#398EC1",
                input: {
                    mouse: {
                        preventDefaultWheel: false 
                    },
                    touch: {
                        capture: true
                    }
                }
            })
        }
        initPhaser(); 
    }, []);

    return <div id="game-container"></div>;
};

export default MainGameComponent;