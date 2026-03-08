import './App.css';
import Game from './Game/Game';
import {useEffect, useState} from "react";

function App() {
    const [x, setX] = useState(150);

    useEffect(() => {
        const dragEnter = (e: DragEvent) => {
            if (e.x != 0) {
                setX(e.x - 32)
            }
        }

        document.addEventListener('dragenter', dragEnter)


        document.addEventListener("dragstart", function( event ) {
            const img = new Image();
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
            // @ts-expect-error jasfkl;ajsdf
            event.dataTransfer.setDragImage(img, 0, 0);
        }, false);
        // return document.removeEventListener('dragenter', dragEnter)
    }, [])

    useEffect(() => {
        const dragFn = (e: DragEvent) => {
            if (e.x != 0 ) {
                setX(e.x - 32)
            }
        }

        document.addEventListener('drag', dragFn)

        // return document.removeEventListener('drag', dragFn)
    }, []);


    useEffect(() => {
        const dragLeave = (e: DragEvent) => {
            e.preventDefault()
            e.stopPropagation()
        }

        document.addEventListener('dragend', dragLeave)

        // return document.removeEventListener('dragend', dragLeave)
    }, []);


    return (
        <div className={"app-layout"}>
            <ul className={"text-buttons"} style={{
                width: x,
            }}>
                <li>🌟{x >= 100 && <span>Game Page</span>}</li>
                <li>🐣{x >= 100 && <span>Easter egg</span>}</li>
            </ul>
            <div className={"game-layout"}>
                <div className={"drag-bar"} draggable={true}></div>
                <Game/>
            </div>
        </div>
    );
}

export default App;