export default function PhoneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>      
      <div className="max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col">
        <main>{children}</main>
      </div>
    </>
  )
}