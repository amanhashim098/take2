const StatCard = ({ title, value, percentage, isPositive }) => (
    <div className="bg-white border-2 border-black p-6 rounded-sm hover:shadow-[-8px_8px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-gray-600">{title}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {isPositive ? "+" : ""}
          {percentage}%
        </span>
      </div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  )
  
  export default StatCard
  
  