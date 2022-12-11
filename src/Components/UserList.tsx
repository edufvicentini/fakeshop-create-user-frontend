import { DetailModal } from "./DetailModal";
import ReactDOM from 'react-dom/client'

export function UserList() {
    function openModal() {
        
    }
    
    return (
    <div className="p-12 overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" id='main-table'>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="py-4 px-6">
                        Sliver
                    </td>
                    <td className="py-4 px-6">
                        Laptop
                    </td>
                    <td className="py-4 px-6">
                        <button onClick={openModal}>Clica aqui</button>
                    </td>
                    <td className="py-4 px-6">
                        <button onClick={openModal}>Clica aqui</button>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td className="py-4 px-6">
                        White
                    </td>
                    <td className="py-4 px-6">
                        Laptop PC
                    </td>
                    <td className="py-4 px-6">
                        $1999
                    </td>
                    <td className="py-4 px-6">
                        <button onClick={openModal}>Clica aqui</button>
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td className="py-4 px-6">
                        Black
                    </td>
                    <td className="py-4 px-6">
                        Accessories
                    </td>
                    <td className="py-4 px-6">
                        $99
                    </td>
                    <td className="py-4 px-6">
                        <button onClick={openModal}>Clica aqui</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}