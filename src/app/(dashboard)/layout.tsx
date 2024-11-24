import Sidebar from "../components/Sidebar"

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-clr-fa p-5">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="bg-clr-f8 flex-1 overflow-y-auto lg:p-5">{children}</div>
    </div>
  )
}

export default DashBoardLayout
