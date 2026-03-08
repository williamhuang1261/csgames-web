import { Camera } from '../Camera.tsx';
import rickRoll from '../../assets/other/EasterEgg/RickRoll.png';
import type { Coordinates, GameAsset } from './GameAsset.tsx';

export class Rick implements GameAsset {
    sprite: HTMLImageElement;

    width: number;
    height: number;

    pos: Coordinates;

    useCamera: boolean = true;

    constructor(width: number, height: number) {
        this.pos = { x: 1000, y: 1000 };

        this.width = width;
        this.height = height;

        this.sprite = new Image();

        this.sprite.src = rickRoll;
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
