import DashboardCard from "./dashboardCard"
import { dashboardItems } from "./dashboard-items"
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white shadow-[-12px_14px_6px_3px_rgba(0,0,0,0.25)] border-[3px] border-black p-8 mb-8">
          <h1 className="text-2xl font-semibold text-[#141414] mb-2">Your Account</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <DashboardCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
            }}
            className="bg-[#141414] rounded-sm text-white hover:shadow-[-2px_4px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in py-2 px-12"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

