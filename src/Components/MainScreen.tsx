import { useAppDispatch } from '../hooks/hooks'
import { modalSlice } from '../hooks/modalSlice';
import { editingSlice, userSlice } from '../hooks/userSlice';
import { DetailModal } from './DetailModal'
import { UserList } from './UserList'

export function MainScreen() {
    const dispatch = useAppDispatch()
    function handleCreateNewUser() {
        dispatch(editingSlice.actions.clearEditing())
        dispatch(userSlice.actions.clearSelectedUser())
        dispatch(modalSlice.actions.open());
    }
    return (
        <div className="pt-6 bg-gray-50 w-full h-screen">
            <div className='relative'>
                <div className='flex gap-4 mx-20'>
                    <h1 className='flex-1 basis-3/4 pb-8  text-2xl font-bold leading-7 text-gray-600 sm:truncate sm:text-3xl sm:tracking-tight'>Users</h1>
                                
                    <button
                        type="submit"
                        onClick={handleCreateNewUser}
                        className="flex-1 h-10 basis-1/8 group relative flex w-52 justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        New User
                    </button>
                </div>
            </div>
            <UserList></UserList>   
            <DetailModal />         
        </div>
    )
}