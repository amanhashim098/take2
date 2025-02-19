import StatCard from "./components/stat-card"
import OrdersChart from "./components/orders-chart"
import ProductsTable from "./components/products-table"

const DashboardAdmin = () => {
  const stats = [
    { title: "Total sales", value: "$ 62,541.21", percentage: 12.5, isPositive: true },
    { title: "Total orders", value: "$ 34,721.65", percentage: 2.5, isPositive: false },
    { title: "Total revenue", value: "$ 59,021.34", percentage: 7.2, isPositive: true },
  ]

  const orderData = [
    { name: "Feb", online: 200, offline: 100 },
    { name: "Mar", online: 400, offline: 300 },
    { name: "Apr", online: 300, offline: 200 },
    { name: "May", online: 420, offline: 280 },
    { name: "Jun", online: 300, offline: 200 },
    { name: "Jul", online: 400, offline: 300 },
    { name: "Aug", online: 500, offline: 400 },
    { name: "Sep", online: 400, offline: 200 },
    { name: "Oct", online: 600, offline: 500 },
  ]

  const products = [
    {
      id: "237864",
      name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
      sales: 32,
      price: "1199.90",
      earning: "38,396.80",
    },
    {
      id: "574908",
      name: "Apple Apple Pencil 2",
      sales: 24,
      price: "199.90",
      earning: "4,797.60",
    },
    {
      id: "007234",
      name: "Apple Watch Series 7 GPS 45mm Aluminium case",
      sales: 23,
      price: "799.90",
      earning: "18,397.70",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="mb-8">
          <OrdersChart data={orderData} />
        </div>

        <div className="mb-8">
          <ProductsTable products={products} />
        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin

