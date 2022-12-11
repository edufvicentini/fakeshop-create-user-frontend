import { ChevronDownIcon } from "@heroicons/react/20/solid"

export function CategorySelector() {
  const categories = ['Category 1', 'Category 2', 'Category 3']

  return (
    <div className="w-10/12">
      <div className="relative">
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <ChevronDownIcon height='20px'></ChevronDownIcon>
        </div>
      <select className="appearance-none block w-full py-2 px-4 text-sm 
      text-blue-600 font-bold border border-gray-300 rounded-lg bg-gray-50 
      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {categories.map((category,index) => {
          return (
            <option value={category} key={index}>{category}</option>
          )
        })}
      </select>
      </div>
    </div>
  )
}