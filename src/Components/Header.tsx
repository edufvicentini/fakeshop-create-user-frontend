import { Popover } from '@headlessui/react'
import { ShoppingCartIcon, UserCircleIcon, UserIcon } from '@heroicons/react/20/solid'
import logo from './assets/logo.png'
import { CategorySelector } from './CategorySelector'
import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <header className='bg-blue-600 '>
      <div className='flex items-center py-8 mx-28 gap-2 justify-items-stretch h-full'>
        <div className='flex-1 basis-1/4'>
          {/* <img src={logo} alt="" className=''/> */}
          <h1 className='text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight'>FakeShop</h1>
        </div> 
        <div className='flex-1 flex items-center basis-1/3'>  
        {/* border-solid border-2 border-black'> */}
          <SearchInput placeholder='Busque aqui seu produto'/>
        </div>
        <div className='flex-1 flex items-center justify-start basis-1/6'>
          <CategorySelector />
        </div>
        <div className='flex-1 flex items-center justify-center basis-1/10'>
          <a href="#" className=''>
            <ShoppingCartIcon height='40px' color='white'></ShoppingCartIcon>
          </a>
        </div>
        <div className='flex-1 flex items-center justify-center basis-1/10'>
            <a href="#"className=''>
              <UserCircleIcon height='40px' color='white'></UserCircleIcon>
            </a>
        </div>       
      </div>
    </header>
  )
}