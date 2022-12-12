import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { modalSlice } from '../hooks/modalSlice';
import { editingSlice, userSlice } from '../hooks/userSlice';
import { createUser } from '../useCases/createUser';
import { User } from '../Entities/User';
import { updateUser } from '../useCases/updateUser';
import { deleteUser } from '../useCases/deleteUser';

export function DetailModal() {
    const isOpen = useAppSelector(state => state.modal.isOpen)
    const selectedUser = useAppSelector(state => state.user.user)
    const isEditing = useAppSelector(state => state.editing.isEditing)

    const [userId, setUserId] = useState<number>(0)
    const [userFirstName, setUserFirstName] = useState<string>('')
    const [userLastName, setUserLastName] = useState<string>('')
    const [userUsername, setUserUsername] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')
    const [userEmail, setUserEmail] = useState<string>('')
    const [userPhone, setUserPhone] = useState<string>('')
    const dispatch = useAppDispatch()

    async function handleConfirm(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        
        const user:User = {
            email: userEmail,
            id: userId,
            name: {
                firstname: userFirstName, 
                lastname: userLastName
            },
            phone: userPhone,
            username: userUsername,
            password: userPassword
        }
        try {
        if (isEditing){
            const response = await updateUser(user)
            console.log(response)
            if (response.status === 200) {
                alert('Edited Successfully')
            }
        }
        else{
            const response = await createUser(user);
            if (response.status === 200) {
                alert('Created Successfully')
            }
        }
        } catch (e) {
            alert(e)
        }
        dispatch(modalSlice.actions.close())
        dispatch(editingSlice.actions.clearEditing())
        dispatch(userSlice.actions.clearSelectedUser())
    }
    async function handleDelete(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            const response = await deleteUser(userId)
            if (response.status === 200) {
                alert('Deleted Successfully')
            }
        } catch (e) {
            alert(e)
        }
        dispatch(modalSlice.actions.close())
        dispatch(editingSlice.actions.clearEditing())
        dispatch(userSlice.actions.clearSelectedUser())
    } 

    function closeModal() {
        dispatch(userSlice.actions.clearSelectedUser())
        dispatch(modalSlice.actions.close())
    }

    useEffect(() => {
        setUserId(selectedUser.id)
        setUserFirstName(selectedUser.name.firstname)
        setUserLastName(selectedUser.name.lastname)
        setUserEmail(selectedUser.email)
        setUserPhone(selectedUser.phone)
        setUserUsername(selectedUser.username)
        setUserPassword(selectedUser.password)
    }, [selectedUser])

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="rounded-md relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => closeModal()}
                    >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className='w-full'>
                        <h1 className='pb-8  text-2xl font-bold leading-7 text-gray-600 sm:truncate sm:text-3xl sm:tracking-tight'>{isEditing ? 'Edit User' : 'Create User'}</h1>
                        <div className='flex gap-4'>
                            <div className="flex-1 basis-1/2 pb-6 col-span-6 sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    value={userUsername}
                                    onChange={(e) => setUserUsername(e.target.value)}
                                    className="p-2 block w-full flex-1 rounded-lg border-solid border-2 border-gray-200 hover:border-gray-300 focus:border-gray-300 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex-1 basis-1/2 pb-6 col-span-6 sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="password"
                                    value={userPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                    className="p-2 block w-full flex-1 rounded-lg border-solid border-2 border-gray-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="pb-8 col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email-address"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="p-2 block w-full flex-1 rounded-lg border-solid border-2 border-gray-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className='pb-8 flex gap-4 justify-items-stretch h-full'>
                            <div className="flex-1 basis-1/2 col-span-6 sm:col-span-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="first-name"
                                    value={userFirstName}
                                    onChange={(e) => setUserFirstName(e.target.value)}
                                    className="p-2 block w-full flex-1 rounded-lg border-solid border-2 border-gray-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div> {/* First Name */}
                            <div className="flex-1 basis-1/2 col-span-6 sm:col-span-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="last-name"
                                    value={userLastName}
                                    onChange={(e) => setUserLastName(e.target.value)}
                                    className="p-2 block w-full flex-1 rounded-lg border-solid border-2 border-gray-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div> {/* Last Name */}
                        </div> {/* First Name - Last Name group */}
                        <div className="pb-8 col-span-6 sm:col-span-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="phone"
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                                className="p-2 block w-full flex-1 rounded-lg border-solid border-2 border-gray-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div> {/* Last Name */}
                        <div className='flex gap-4'>
                            <button
                                type="submit"
                                onClick={handleConfirm}
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Confirm
                            </button>
                            {isEditing && <button
                                type="submit"
                                onClick={handleDelete}
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Delete
                            </button> }
                        </div>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}