import { Menu } from '@headlessui/react'
import { Dropdown } from './Components/Dropdown'
import { Header } from './Components/Header'
import { DetailModal } from './Components/DetailModal'
import { UserList } from './Components/UserList'
import { MainScreen } from './Components/MainScreen'
function App() {
  return (
    <>
    {/* <DetailModal></DetailModal> */}
      <Header />
      <MainScreen />
      {/* <UserList /> */}
    </>
  )
}

export default App
