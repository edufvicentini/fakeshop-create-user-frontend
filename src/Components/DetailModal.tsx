/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function handleConfirm(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert('Confirmed');
}

function handleDelete(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert('Deleted');
}

interface DetailModalProps {
    isOpen: boolean;
}

export function DetailModal({ isOpen }: DetailModalProps) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                    onClick={() => setOpen(false)}
                    >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className='w-full'>
                    <h1 className='pb-8  text-2xl font-bold leading-7 text-gray-600 sm:truncate sm:text-3xl sm:tracking-tight'>User Profile</h1>
                        <div className="pb-6 col-span-6 sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="p-2 block w-full flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="pb-8 col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            
                            <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email-address"
                                className="p-2 block w-full flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                    className="p-2 block w-full flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                    className="p-2 block w-full flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                className="p-2 block w-full flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                            <button
                                type="submit"
                                onClick={handleDelete}
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Delete
                            </button>
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