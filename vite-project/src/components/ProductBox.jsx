
const ProductBox = ({imgSrc, productTitle}) => {
  return (
    <div>
      <div className="h-[310px] w-[330px] border-[3px] border-black" >
        <img src={imgSrc} className=" object-cover" alt="" />
      </div>
      <h4 className="text-base mt-2 font-semibold uppercase">{productTitle}</h4>
    </div>
  )
}

export default ProductBox

