import { LogOut } from 'lucide-react'

export default function LoggedInSidebar() {
  return (
    <div className="min-h-screen flex z-10 fixed">
      <div className="bg-white flex flex-col">
        <header className="bg-yellow-400 p-6 rounded-b-3xl">
          <h1 className="text-2xl font-bold">Hi, Jonathan!</h1>
          <p className="text-lg">What you claim today?</p>
        </header>

        <main className="flex-grow p-6">
          <div className="mt-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-500">
              Set Address
            </label>
          </div>
        </main>

        <footer className="p-6">
          <button className="w-full bg-yellow-400 text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </footer>
      </div>
    </div>
  )
}