
import {RandomNumberGenerator} from "./RandomNumberGenerator";

function Header() {

    return (
        <header className="header">
            <p>Всем привет тут можно добавлять/удалять/редактировать список</p>
            <RandomNumberGenerator/>
        </header>
    );
}

export default Header;