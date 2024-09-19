import { ChevronRight } from 'lucide-react'

export default function ClaimedPointHome() {
  return (
    <div className="bg-white rounded-lg p-4 text-black">
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
  )
}