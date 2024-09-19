import BannerHome from '@/components/home/banner.home'
import ClaimedPointHome from '@/components/home/claimed-point.home'
import PointHome from '@/components/home/point.home'
import RecomendationHome from '@/components/home/recomendation.home'

export default function () {
  return (
    // with bg gray, good option
    <main className="flex-grow p-4 space-y-4">
      {/* <main className="flex-grow p-4 space-y-4"> */}
      <BannerHome />
      <RecomendationHome />
      <PointHome />
      <ClaimedPointHome />
    </main>
  )
}