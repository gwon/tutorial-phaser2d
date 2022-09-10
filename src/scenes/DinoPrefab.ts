// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DinoPrefab extends Phaser.GameObjects.Image {
    constructor(
        scene: Phaser.Scene,
        x?: number,
        y?: number,
        texture?: string,
        frame?: number | string
    ) {
        super(scene, x ?? 0, y ?? 0, texture || "FufuSuperDino", frame);

        // this (components)
        new PushOnClick(this);

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.
    init() {
        this.scene.input.on(
            "pointerdown",
            (pointer: PointerEvent) => {
                var timeline = this.scene.tweens.createTimeline();

                timeline.add({
                    targets: this,
                    x: pointer.x,
                    y: pointer.y,
                    ease: Phaser.Math.Easing.Sine.InOut,
                    duration: 500,
                });

                timeline.add({
                    targets: this,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    ease: Phaser.Math.Easing.Sine.InOut,
                    duration: 100,
                    yoyo: true,
                });

                timeline.play();
            },
            this
        );
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
