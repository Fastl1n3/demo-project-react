import {UserT} from "../types/User.types";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";
import {useState} from "react";
import {AddUser} from "./AddUser";
function User({user, onDelete, onEdit}: {user: UserT, onDelete : (id: number) => void, onEdit : (user: UserT) => void}) {
    const [editForm, setEditForm] = useState<boolean>(false);

    return (
        <div className="user">
            <IoCloseCircleSharp onClick={() => onDelete(user.id)} className="delete-icon"/>
            <IoHammerSharp onClick={() => setEditForm(!editForm)} className="edit-icon"/>
            <h3>{user.firstname} {user.lastname}</h3>
            <p>{user.bio}</p>
            <b>{user.isHappy ? 'Счастлив :)' : 'Не особо :(' }</b>
            {editForm && <AddUser curUser={user} onAdd={onEdit}/>}
        </div>
    )
}

export default User;