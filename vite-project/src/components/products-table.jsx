const ProductsTable = ({ products }) => (
    <div className="bg-white border-2 border-black p-6 rounded-sm hover:shadow-[-8px_8px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in">
      <h2 className="text-xl font-semibold mb-6">Top selling products</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">ID</th>
            <th className="pb-2">Name</th>
            <th className="pb-2">Sales</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Earning</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-4 text-gray-600">#{product.id}</td>
              <td className="py-4">{product.name}</td>
              <td className="py-4">{product.sales}</td>
              <td className="py-4">${product.price}</td>
              <td className="py-4">${product.earning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  
  export default ProductsTable
  
  