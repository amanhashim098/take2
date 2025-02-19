import { Link } from "react-router-dom"

const DashboardCard = ({ icon: Icon, title, description, link }) => {
  return(
  <Link
    to={link}
    className="block p-6 border-2 border-black rounded-sm hover:shadow-[-8px_8px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in bg-white"
  >
    <div className="flex items-start gap-4">
      <Icon className="w-8 h-8 text-[#141414]" />
      <div>
        <h3 className="text-lg font-semibold text-[#141414] mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </Link>
  )
}

export default DashboardCard

