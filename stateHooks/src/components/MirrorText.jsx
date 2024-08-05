import { useState } from "react";

function MirrorText() {
    const [text, setText] = useState('')
    return (
        <div>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
            <p>Texto digitado: {text}</p>
        </div>
    )
}

export default MirrorText