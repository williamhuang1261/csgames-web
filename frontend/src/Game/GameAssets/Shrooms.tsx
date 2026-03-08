import { Camera } from '../Camera.tsx';
import shrooms from '../../assets/scenery/mushrooms/mushroom.png';
import type { Coordinates, GameAsset } from './GameAsset.tsx';

export class Shrooms implements GameAsset {
    sprite: HTMLImageElement;

    width: number;
    height: number;

    pos: Coordinates;

    useCamera: boolean = true;

    constructor(width: number, height: number) {
        this.pos = { x: 200, y: 160 };

        this.width = width;
        this.height = height;

        this.sprite = new Image();

        this.sprite.src = shrooms;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // TODO: Clicks
    handleUserInput(keys: React.RefObject<Record<string, boolean>>): void {
        return;
    }

    render(ctx: CanvasRenderingContext2D): void {
        const camera = Camera.getInstance();

        ctx.drawImage(
            this.sprite,
            this.useCamera ? -camera.x + this.pos.x : this.pos.x,
            this.pos.y,
            this.width,
            this.height,
        );
    }
}
