import { Camera } from '../Camera.tsx';
import mysteryBlock from '../../assets/scenery/special/myster-box-animated.gif';
import type { Coordinates, GameAsset } from './GameAsset.tsx';
import f0 from "../../../public/gif/frame_0_delay-0.2s.gif"
import f1 from "../../../public/gif/frame_1_delay-0.2s.gif"
import f2 from "../../../public/gif/frame_2_delay-0.2s.gif"
import f3 from "../../../public/gif/frame_3_delay-0.2s.gif"

export class MysteryBlock implements GameAsset {
    sprite: HTMLImageElement;

    width: number;
    height: number;

    pos: Coordinates;

    useCamera: boolean = true;

    counter = 0;
    slower = 0;
    images: HTMLImageElement["src"][] = [f0, f1, f2, f3]

    constructor(width: number, height: number) {
        this.pos = { x: 200, y: 200 };

        this.width = width;
        this.height = height;

        this.sprite = new Image();

        this.sprite.src = mysteryBlock;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // TODO: Clicks
    handleUserInput(keys: React.RefObject<Record<string, boolean>>): void {
        return;
    }

    render(ctx: CanvasRenderingContext2D): void {
        const camera = Camera.getInstance();



        const image: HTMLImageElement["src"] =  this.images[this.counter]

        this.slower++
        if (this.slower > 100) {
            this.counter = (this.counter + 1) % 4
            this.slower = 0
        }
        this.sprite = new Image()
        this.sprite.src = image

        ctx.drawImage(
            this.sprite,
            this.useCamera ? -camera.x + this.pos.x : this.pos.x,
            this.pos.y,
            this.width,
            this.height,
        );
    }
}
