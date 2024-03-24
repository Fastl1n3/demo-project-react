import User from "./User";
import {UserT} from "../types/User.types";

function Users({users, onEdit, onDelete } : {users: UserT[], onDelete : (id: number) => void, onEdit : (user: UserT) => void}) {

    if (users.length > 0) {
        return (
            <div>
                {users.map((e) => (
                    <User onEdit={onEdit} onDelete={onDelete} key={e.id} user={e}/>
                ))}
            </div>
        );
    }
    else {
        return (<div className="user">
            <h3>Пользователей нет</h3>
        </div>)
    }
}

export default Users;