import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function PointHome() {
  return (
    <div className="bg-white rounded-lg p-4 text-black">
      <div className="flex justify-between items-start">
        <div className='flex flex-col items-center justify-center text-center h-full'>
          <h3 className="font-semibold mt-2">Poin anda</h3>
          <p className="text-4xl font-bold text-yellow-400">5500</p>
          <p className="text-nowrap">Ayo tukerkin!</p>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2 ml-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg mb-1 relative overflow-hidden flex items-center justify-center border border-gray-400">
                <Image
                  src="/1L-matcha-latte.png"
                  alt="Kurro Coffee"
                  width={400}
                  height={200}
                  className="absolute w-full h-full object-cover opacity-40"
                />
                <span className="absolute bottom-1 right-1 text-xs bg-white px-1 rounded-lg">1000 pts</span>
              </div>
              <span className="text-xs">1L Matcha Latte</span>
            </div>
          ))}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-lg mb-1 relative overflow-hidden flex items-center justify-center">
              <span><ChevronRight className="w-6 h-6" /></span>
            </div>
            <span className="text-xs">See more</span>
          </div>
        </div>
      </div>
    </div>
  )
}