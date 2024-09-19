import { Bell, ChevronRight, Search } from 'lucide-react'
import Image from 'next/image'

export default function () {
  return (
    <div className="max-w-md mx-auto bg-yellow-400 min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4">
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
            className="w-full py-2 px-4 rounded-full bg-white text-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <button className="text-black">
          <Bell className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-grow bg-gray-100 p-4 space-y-4">
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <Image
            src="/placeholder.svg"
            alt="Kurro Coffee"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-lg">Kurro Coffe</h2>
            <p className="text-sm">
              Nikmati Disc 20 % untuk pembelian semua menu dengan menukarkan 100 point
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold mb-2">Mau kemana?</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex-shrink-0 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mb-1"></div>
                <span className="text-xs">Kurro Coffe</span>
              </div>
            ))}
            <div className="flex-shrink-0 text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mb-1 flex items-center justify-center">
                <ChevronRight className="w-6 h-6" />
              </div>
              <span className="text-xs">See all</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold mb-2">Poin anda</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold text-yellow-400">5500</p>
              <p className="text-sm">Ayo tukarkan!</p>
            </div>
            <div className="flex space-x-2">
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="w-8 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Poin sukses di tuker</h3>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg p-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold">Discount 25% untuk pembelian semua menu di Kurro Coffe</p>
                  <p className="text-xs text-gray-500">**) Berlaku untuk semua pembelian diatas 50k</p>
                </div>
                <button className="bg-yellow-400 text-xs font-semibold py-1 px-3 rounded-full">
                  tukarkan!
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}