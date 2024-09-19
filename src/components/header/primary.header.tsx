import { Bell, Search } from 'lucide-react';

export default function PrimaryHeader() {
  return (
    <header className="flex justify-between items-center p-4 bg-yellow-300">
      <button className="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className="relative flex-grow mx-4">
        <input
          type="text"
          placeholder="Temukan tempat"
          className="w-full py-2 px-4 rounded-full bg-white text-sm text-black placeholder-gray-500"
        />
        <button className='text-black'>
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </button>
      </div>
      <button className="text-black">
        <Bell className="w-6 h-6" />
      </button>
    </header>
  )
}