import { Camera } from '../Camera.tsx';
import mysteryBlock from '../../assets/special/mystery-block.png';
import type { Coordinates, GameAsset } from './GameAsset.tsx';

export class MysteryBlock implements GameAsset {
    sprite: HTMLImageElement;

    width: number;
    height: number;

    pos: Coordinates;

    useCamera: boolean = true;

    constructor(width: number, height: number) {
        this.sprite = new Image();

        this.width = width;
        this.height = height;

        this.pos = { x: 0, y: 0 };

        this.sprite = new Image();
        this.sprite.src = mysteryBlock;

        this.sprite.onload = () => {
            this.width = this.sprite!.naturalWidth;
            this.height = this.sprite!.naturalHeight;
        };
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
            this.useCamera ? -camera.x * 0.1 : this.pos.x,
            this.pos.y,
            this.width,
            this.height,
        );
    }
}
