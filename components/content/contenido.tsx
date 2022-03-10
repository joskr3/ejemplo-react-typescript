import React, { ChangeEvent, useState } from 'react'

function Contenido() {

    const [counter, setCounter] = useState<null | number>(0)

    const handleChange = (event: ChangeEvent<any>): void => {
        event.preventDefault();
        switch (event.target.name) {
            case 'aumentar':
                setCounter(counter! + 1)
                break;
            case 'disminuir':
                setCounter(counter! - 1)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <h1>
                Contador: {counter}
            </h1>
            <button type='button' name="aumentar" onClick={handleChange}>
                Incrementar
            </button>
            <button type='button' name="disminuir" onClick={handleChange}>
                Disminuir
            </button>
        </>
    )
}

export default Contenido