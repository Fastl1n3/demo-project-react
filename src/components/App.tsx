import React, {useState} from 'react';
import '../css/main.css';
import Header from "./Header";
import Users from "./Users";
import {AddUser} from "./AddUser";
import {UserT} from "../types/User.types";


// Компонента называется по названию функции, она возвращает разметку, появился новый тег <App/>
function App() {
    const [users, setUsers] = useState<UserT[]>([
        {
            id: 1,
            firstname: "Alice",
            lastname: "Smith",
            bio: "Lorem ipsum Dolor sit amet Dolor sit amet",
            age: 30,
            isHappy: true
        },
        {
            id: 2,
            firstname: "Bob",
            lastname: "Johnson",
            age: 25,
            isHappy: false
        },
        {
            id: 3,
            firstname: "Charlie",
            lastname: "Brown",
            bio: "Lorem ipsum Dolor sit amet Dolor sit amet",
            age: 35,
            isHappy: true
        }
    ])

    const editUser = (user: UserT) => {
        setUsers(prevState => prevState.map(i => i.id === user.id ? user : i))
    }
    const deleteUser = (id: number) => {
        setUsers(prevState => prevState.filter(el => el.id !== id));
    }

    let n = 4;
    const addUser = (user: UserT) => {
        user.id = n++;
        setUsers(prevState => [...prevState, user]);
    }

    return (
      <div>
          <Header />
          <main>
              <Users users={users} onEdit={editUser} onDelete={deleteUser}/>
          </main>
          <aside>
              <AddUser onAdd={addUser}/>
          </aside>
      </div>
    );
}

export default App;
