import PrimaryHeader from "@/components/header/primary.header"
import PhoneLayout from "@/components/phone-layout/phone-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PhoneLayout>
      <PrimaryHeader />
      <main>{children}</main>
    </PhoneLayout>
  )
}