
const SecurityField = ({ label, value, action, description, children }) => {
    return(
    <div className="border-b border-gray-200 py-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-[#141414] font-semibold mb-1">{label}</h2>
          {value && <p className="text-[#141414] mb-1">{value}</p>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
          {children}
        </div>
        <button className="ml-4 px-6 py-1.5 border-2 border-[#141414] rounded-full hover:shadow-[-2px_2px_2px_1px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in text-sm">
          {action}
        </button>
      </div>
    </div>
  )
}

  export default SecurityField