import { useEffect, useState } from "react";
import { User } from "../Entities/User";
import { useAppDispatch } from "../hooks/hooks";
import { modalSlice } from "../hooks/modalSlice";
import { editingSlice, userSlice } from "../hooks/userSlice";
import { capitalize } from "../utils";

export function UserList() {   
    const [users, setUsers] = useState<User[]>([])
    const dispatch = useAppDispatch()

    function openModal(user: User) {
        dispatch(editingSlice.actions.setEditing())
        dispatch(userSlice.actions.loadSelectedUser(user))
        dispatch(modalSlice.actions.open());
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://fakestoreapi.com/users`).then((response) => response.json())
            setUsers(response)
        }
        fetchUsers().catch((e) => console.log(e))
    }, []
    )
    
    return (
    <div className="px-12 pb-12 overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" id='main-table'>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Id
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Full Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Username
                    </th>
                    <th scope="col" className="py-3 px-6">
                        E-mail
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Phone
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return(
                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.id}
                        </th>
                        <td className="py-4 px-6">
                            {capitalize(user.name.firstname + ' ' + user.name.lastname)} 
                        </td>
                        <td className="py-4 px-6">
                            {user.username}
                        </td>
                        <td className="py-4 px-6">
                            {user.email}
                        </td>
                        <td className="py-4 px-6">
                            {user.phone}
                        </td>
                        <td className="py-4 px-6">
                            <button className="p-2 rounded-lg border-solid border-2 border-gray-200 hover:border-gray-300" onClick={() => openModal(user)}>Click Here</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}