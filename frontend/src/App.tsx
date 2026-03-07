import './App.css';
import Game from './Game/Game';
import {useEffect, useState} from "react";

function App() {
    const [x, setX] = useState(150);
    let lastX = x;

    useEffect(() => {
        const dragEnter = (e: DragEvent) => {
            setX(e.x - 32)
        }

        document.addEventListener('dragenter', dragEnter)

        // return document.removeEventListener('dragenter', dragEnter)
    }, [])

    useEffect(() => {
        const dragFn = (e: DragEvent) => {
            setX(e.x - 32)
            lastX = x;
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
                <li className={""}>{`🌟${lastX >= 100 ? "Game page" : ""}`}</li>
                <li className={""}>{`🐣${lastX >= 100 ? "Easter egg" : ""}`}</li>
            </ul>
            <div className={"game-layout"}>
                <div className={"drag-bar"} draggable={true}></div>
                <Game/>
            </div>
        </div>
    );
}

export default App;