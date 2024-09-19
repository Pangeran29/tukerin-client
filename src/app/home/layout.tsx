import PrimaryHeader from "@/components/header/primary.header"
import PhoneLayout from "@/components/phone-layout/phone-layout"
import LoggedInSidebar from "@/components/sidebar/logged-in.sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoggedInSidebar />
      <PhoneLayout>
        <PrimaryHeader />
        <main>{children}</main>
      </PhoneLayout>
    </>
  )
}