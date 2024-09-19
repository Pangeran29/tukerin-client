import Image from 'next/image'

export default function BannerHome() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <Image
        src="/kurro-coffe.jpg"
        alt="Kurro Coffee"
        width={400}
        height={200}
        className="w-full h-40 object-cover opacity-60"
      />
      <div className="p-5 text-black">
        <h2 className="font-bold text-lg">Kurro Coffe</h2>
        <p className="text-sm">
          Nikmati Disc 20 % untuk pembelian semua menu dengan menukarkan 100 point
        </p>
      </div>
    </div>
  )
}