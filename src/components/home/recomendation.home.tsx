import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function RecomendationHome() {
  return (
    <div className="bg-white rounded-lg p-4 overflow-hidden shadow text-black">
      <h3 className="font-semibold mb-2">Mau kemana?</h3>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-lg mb-1 relative overflow-hidden flex items-center justify-center border border-gray-400">
              <Image
                src="/kurro-coffe.jpg"
                alt="Kurro Coffee"
                width={400}
                height={200}
                className="absolute w-full h-full object-cover opacity-40"
              />
              <span className="absolute bottom-1 right-1 text-xs bg-white px-1 rounded-lg">1000 pts</span>
            </div>
            <span className="text-xs">Kurro Coffe</span>
          </div>
        ))}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-lg mb-1 relative overflow-hidden flex items-center justify-center">
            <ChevronRight className="w-6 h-6" />
          </div>
          <span className="text-xs">See more</span>
        </div>
      </div>
    </div>
  )
}