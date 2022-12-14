// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import DinoPrefab from "./DinoPrefab";
import PushOnClick from "../components/PushOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {
    constructor() {
        super("Level");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    editorCreate(): void {
        // fufuSuperDino
        const fufuSuperDino = new DinoPrefab(this, 400, 235);
        this.add.existing(fufuSuperDino);

        // text
        const text = this.add.text(400, 436, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Phaser 3 + Phaser Editor 2D\nWebpack + TypeScript";
        text.setStyle({
            align: "center",
            fontFamily: "Arial",
            fontSize: "3em",
        });

        // fufuSuperDino (components)
        new PushOnClick(fufuSuperDino);

        this.fufuSuperDino = fufuSuperDino;

        this.events.emit("scene-awake");
    }

    private fufuSuperDino!: DinoPrefab;

    /* START-USER-CODE */

    // Write your code here
    create() {
        this.editorCreate();

        var spaceKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        spaceKey.on("down", (key: KeyType, event: KeyboardEvent) => {
            console.log("space ", key, event);
        });

        this.input.keyboard.on("keydown-A", (event: KeyboardEvent) => {
            console.log("key 'A' down", event);
        });

        this.fufuSuperDino.setInteractive({
            useHandCursor: true,
            cursor: "url(assets/cursors/pointer.cur), pointer",
        });

        this.fufuSuperDino.on("pointerover", () => {
            this.fufuSuperDino.setTint(0xff0000);
            console.log("pointer over fufuSuperDino");
        });

        this.fufuSuperDino.on("pointerout", () => {
            this.fufuSuperDino.clearTint();
            console.log("pointerout fufuSuperDino");
        });

        this.fufuSuperDino.on("pointerdown", () => {
            console.log("pointerdown fufuSuperDino");
        });

        this.fufuSuperDino.on("pointerup", () => {
            console.log("pointerup fufuSuperDino");
        });

        this.input.setDraggable(this.fufuSuperDino);
        this.input.on(
            "drag",
            function (
                pointer: any,
                gameObject: any,
                dragX: number,
                dragY: number
            ) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            }
        );
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
