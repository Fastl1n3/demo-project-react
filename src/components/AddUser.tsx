import React, {useState} from "react";
import {UserT} from "../types/User.types";


export function AddUser({onAdd, curUser} : {onAdd : (user: UserT) => void, curUser? : UserT}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    let userAdd : UserT;
    const [user, setUser] = useState<UserT>({
        id: -23,
        firstname: "",
        lastname: "",
        age: 1,
        isHappy: false,
        bio: ""
    })

    let myForm : HTMLFormElement | null;
    return (
        <form ref={(el) => myForm = el}>
            <input placeholder="Имя" onChange={(event => setUser({...user, firstname: event.target.value}))}/>
            <input placeholder="Фамилия" onChange={(event => setUser({...user, lastname: event.target.value}))}/>
            <textarea placeholder="Биография" onChange={(event => setUser({...user, bio: event.target.value}))}/>
            <input type="number" placeholder="Возраст"
                   onChange={(event => setUser({...user, age: event.target.valueAsNumber}))}/>
            <label htmlFor="isHappy">Счастлив? </label>
            <input type="checkbox" id="isHappy"
                   onChange={(event => setUser({...user, isHappy: event.target.checked}))}/>
            <button type="button" onClick={() => {
                myForm?.reset()
                userAdd = {
                    id : -1,
                    firstname : user.firstname,
                    lastname : user.lastname,
                    age : user.age,
                    bio : user.bio,
                    isHappy : user.isHappy
                };
                if (curUser) {
                    userAdd.id = curUser.id;
                }
                onAdd(userAdd);
            }}> {curUser ? "Изменить": "Добавить"}
                </button>
        </form>
    ) //type button, если не указать то по умолчанию исп. submit(при нажатии перезагружает страницу)
}







