import Image from 'next/image'

export default function Search() {
  return (
    <div className="flex justify-between bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-2/3 p-4 bg-cover bg-center rounded-xl shadow" style={{ backgroundImage: "url('/kurro-coffe.jpg')" }}>
        <div className="absolute inset-0 bg-gray-100 opacity-60"></div>
        <div className="relative z-10">
          <h2 className="text-black font-bold text-lg">Kurro Coffe</h2>
          <div className="flex space-x-2 mt-4 absolute surface-1 right-1 ">
            <Image src="/maps-icon.png" width={20} height={20} alt="Location" />
            <Image src="/google-icon.png" width={20} height={20} alt="Google" />
            <Image src="/instagram-icon.png" width={20} height={20} alt="Instagram" />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center bg-gray-100 p-4">
        <span className="text-yellow-500 font-semibold text-lg">Total Point:</span>
        <span className="text-yellow-500 font-bold text-4xl">1000</span>
      </div>
    </div>
  )
}