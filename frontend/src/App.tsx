import './App.css';
import Game from './Game/Game';
import {useEffect, useState} from "react";

function App() {
    const [x, setX] = useState(150);
    const [showEaster, setShowEaster] = useState(false);

    useEffect(() => {
        const dragEnter = (e: DragEvent) => {
            if (e.x != 0) {
                setX(e.x - 32)
            }
        }

        document.addEventListener('dragenter', dragEnter)


        document.addEventListener("dragstart", function (event) {
            const img = new Image();
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
            // @ts-expect-error jasfkl;ajsdf
            event.dataTransfer.setDragImage(img, 0, 0);
        }, false);
        // return document.removeEventListener('dragenter', dragEnter)
    }, [])

    useEffect(() => {
        const dragFn = (e: DragEvent) => {
            if (e.x != 0) {
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

        showEaster
            ?
            <div className={"easter-back"}>
                <div>
                <button className={"reload button"} onClick={() => location.reload()}>Reload page</button>
                <img src={"/Credz.png"}  alt={"By William H and Charles RD - Universite Laval Rouge"} width={500}/>
                </div>
            <video width={800} height={400} autoPlay={true} controls={true}>
                <source src={'/a.mp4'} type={'video/mp4'}/>
            </video>
            </div>

            : <div className={"app-layout"}>
            <ul className={"text-buttons"} style={{
                width: x,
            }}>
                <li>🌟{x >= 100 && <span>Game Page</span>}</li>
                <li onClick={() => setShowEaster(true)} className={'easter-button'}>🐣{x >= 100 && <span>Easter egg</span>}</li>
            </ul>
            <div className={"game-layout"}>
                <div className={"drag-bar"} draggable={true}></div>
                <Game/>
            </div>
        </div>

    );
}

export default App;