import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const OrdersChart = ({ data }) => (
  <div className="bg-white border-2 border-black p-6 rounded-sm hover:shadow-[-8px_8px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Orders</h2>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#a3e635] rounded-full"></div>
          <span className="text-sm">Online</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#064e3b] rounded-full"></div>
          <span className="text-sm">Offline</span>
        </div>
      </div>
    </div>
    <BarChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="online" fill="#a3e635" />
      <Bar dataKey="offline" fill="#064e3b" />
    </BarChart>
  </div>
)

export default OrdersChart

