import './App.css';
import Game from './Game/Game';
import {useState} from "react";

function App() {
    const [x, setX] = useState(150);


    document.addEventListener('dragenter', (ev: DragEvent) => {
        setX(ev.x - 32)
    })

    document.addEventListener('drag', (ev: DragEvent) => {
        setX(ev.x - 32)
    })

    document.addEventListener('dragleave', (ev: DragEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
        setX(ev.x - 32)
    })


    return (
        <div className={"app-layout"}>
            <ul className={"text-buttons"} style={{
                width: x,
            }}>
                <li className={""}>🌟 Game page</li>
                {
                    x <= 100 && (
                        <li className={""}>🐣 Easter egg</li>
                    )
                }
            </ul>
            <div className={"game-layout"}>
                <div className={"drag-bar"} draggable={true}></div>
                <Game/>
            </div>
        </div>
    );
}

export default App;