import {useEffect, useState} from "react";

export function Button() {

    const[click, setClick] = useState(0);

    useEffect(() => { // срабатывает в автоматическом режиме когда происходит действие над кнопкой
        document.title = `Вы нажали ${click}` // `...` позволяет вставлять ${...}
    });

    return (
        <button onClick={() => setClick(click + 1)}>Button{click}</button>
    )
}